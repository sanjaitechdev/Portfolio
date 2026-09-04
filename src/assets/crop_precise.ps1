Add-Type -AssemblyName System.Drawing

# 1. Crop precise photo from screenshot-1443
$bmp1 = [System.Drawing.Bitmap]::FromFile("e:\portfolio\bbb\src\assets\screenshot-1443.png")
# Find vertical column where the photo actually is (skip left dark area)
$pMinX = 0
for ($x = 500; $x -lt 1000; $x++) {
    $c = $bmp1.GetPixel($x, 500)
    if ($c.R -gt 50 -and $c.G -gt 50) {
        $pMinX = $x
        break
    }
}
$pMaxX = $bmp1.Width - 1
for ($x = 1500; $x -ge 1000; $x--) {
    $c = $bmp1.GetPixel($x, 500)
    if ($c.R -gt 50 -and $c.G -gt 50) {
        $pMaxX = $x
        break
    }
}
$pMinY = 104
$pMaxY = 912

Write-Host "Photo precise bounds: $pMinX to $pMaxX, $pMinY to $pMaxY"
$rectPhoto = [System.Drawing.Rectangle]::new($pMinX, $pMinY, ($pMaxX - $pMinX), ($pMaxY - $pMinY))
$photoCropped = $bmp1.Clone($rectPhoto, $bmp1.PixelFormat)
$photoCropped.Save("e:\portfolio\bbb\src\assets\user-balcony.png", [System.Drawing.Imaging.ImageFormat]::Png)
$photoCropped.Dispose()
$bmp1.Dispose()

# 2. Crop precise hero web viewport from screenshot-1442
$bmp2 = [System.Drawing.Bitmap]::FromFile("e:\portfolio\bbb\src\assets\screenshot-1442.png")
# Find red region (R > 180, G < 60, B < 60)
$rMinX = $bmp2.Width
$rMaxX = 0
$rMinY = $bmp2.Height
$rMaxY = 0

for ($x = 400; $x -lt 1600; $x += 2) {
    for ($y = 200; $y -lt 900; $y += 2) {
        $c = $bmp2.GetPixel($x, $y)
        if ($c.R -gt 150 -and $c.G -lt 80 -and $c.B -lt 80) {
            if ($x -lt $rMinX) { $rMinX = $x }
            if ($x -gt $rMaxX) { $rMaxX = $x }
            if ($y -lt $rMinY) { $rMinY = $y }
            if ($y -gt $rMaxY) { $rMaxY = $y }
        }
    }
}
Write-Host "Red Web Viewport Bounds: $rMinX to $rMaxX, $rMinY to $rMaxY"

# Let's crop the person from the right half of the red viewport
# The person sits on the right side of the red screen down to the desk
$devLeft = [int]($rMinX + ($rMaxX - $rMinX) * 0.46)
$devTop = $rMinY + 40
$devWidth = $rMaxX - $devLeft + 20
$devHeight = $rMaxY - $devTop + 100

if ($devLeft + $devWidth -gt $bmp2.Width) { $devWidth = $bmp2.Width - $devLeft }
if ($devTop + $devHeight -gt $bmp2.Height) { $devHeight = $bmp2.Height - $devTop }

Write-Host "Cropping Dev at Desk: $devLeft, $devTop, $devWidth, $devHeight"
$rectDev = [System.Drawing.Rectangle]::new($devLeft, $devTop, $devWidth, $devHeight)
$devCropped = $bmp2.Clone($rectDev, $bmp2.PixelFormat)
$devCropped.Save("e:\portfolio\bbb\src\assets\leeshark-red-desk.png", [System.Drawing.Imaging.ImageFormat]::Png)
$devCropped.Dispose()

# Also crop full web viewport
$webWidth = $rMaxX - $rMinX + 1
$webHeight = $rMaxY - $rMinY + 70 # include desk
if ($rMinY + $webHeight -gt $bmp2.Height) { $webHeight = $bmp2.Height - $rMinY }
$rectWeb = [System.Drawing.Rectangle]::new($rMinX, $rMinY, $webWidth, $webHeight)
$webCropped = $bmp2.Clone($rectWeb, $bmp2.PixelFormat)
$webCropped.Save("e:\portfolio\bbb\src\assets\full-mockup-view.png", [System.Drawing.Imaging.ImageFormat]::Png)
$webCropped.Dispose()

$bmp2.Dispose()
Write-Host "All crops completed!"
