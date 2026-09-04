Add-Type -AssemblyName System.Drawing

# 1. Crop babu-photo from screenshot-1443
$bmp1 = [System.Drawing.Bitmap]::FromFile("e:\portfolio\bbb\src\assets\screenshot-1443.png")
$minX = $bmp1.Width
$maxX = 0
$minY = $bmp1.Height
$maxY = 0

for ($x = 100; $x -lt ($bmp1.Width - 100); $x += 2) {
    for ($y = 80; $y -lt ($bmp1.Height - 120); $y += 2) {
        $c = $bmp1.GetPixel($x, $y)
        if ($c.R -gt 35 -or $c.G -gt 35 -or $c.B -gt 35) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
Write-Host "Photo Bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
$rect1 = [System.Drawing.Rectangle]::new($minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1))
$cropped1 = $bmp1.Clone($rect1, $bmp1.PixelFormat)
$cropped1.Save("e:\portfolio\bbb\src\assets\babu-photo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropped1.Dispose()
$bmp1.Dispose()

# 2. Crop the mockup design from screenshot-1442
$bmp2 = [System.Drawing.Bitmap]::FromFile("e:\portfolio\bbb\src\assets\screenshot-1442.png")
$minX2 = $bmp2.Width
$maxX2 = 0
$minY2 = $bmp2.Height
$maxY2 = 0

for ($x = 100; $x -lt ($bmp2.Width - 100); $x += 2) {
    for ($y = 80; $y -lt ($bmp2.Height - 120); $y += 2) {
        $c = $bmp2.GetPixel($x, $y)
        if ($c.R -gt 40 -or $c.G -gt 40 -or $c.B -gt 40) {
            if ($x -lt $minX2) { $minX2 = $x }
            if ($x -gt $maxX2) { $maxX2 = $x }
            if ($y -lt $minY2) { $minY2 = $y }
            if ($y -gt $maxY2) { $maxY2 = $y }
        }
    }
}
Write-Host "Mockup Bounds: minX=$minX2, maxX=$maxX2, minY=$minY2, maxY=$maxY2"
$rect2 = [System.Drawing.Rectangle]::new($minX2, $minY2, ($maxX2 - $minX2 + 1), ($maxY2 - $minY2 + 1))
$cropped2 = $bmp2.Clone($rect2, $bmp2.PixelFormat)
$cropped2.Save("e:\portfolio\bbb\src\assets\mockup-hero.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropped2.Dispose()
$bmp2.Dispose()
Write-Host "Crop completed successfully!"
