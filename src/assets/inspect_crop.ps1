Add-Type -AssemblyName System.Drawing

$filePath = "e:\portfolio\sss\src\assets\screenshot-1441.png"
if (Test-Path $filePath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($filePath)
    Write-Host "Image dimensions: $($bmp.Width) x $($bmp.Height)"
    
    # Let's save a preview or crop the images
    # If this is the Moments & Milestones screenshot, let's crop the 4 photo cards
    # On 1920x1080:
    # Photo 1 (Team coding): x around 0-450, y around 500-950
    # Photo 2 (Symposium): x around 480-980, y around 500-950
    # Photo 3 (Robot): x around 1010-1510, y around 500-950
    # Photo 4 (Stage Awards): x around 1540-1920, y around 500-950
    
    $bmp.Dispose()
} else {
    Write-Host "File not found!"
}
