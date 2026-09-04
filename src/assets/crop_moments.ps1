Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("e:\portfolio\sss\src\assets\screenshot-1441.png")
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

$bmp.Dispose()
