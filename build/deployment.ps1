# Define paths and URLs
$sourceRepoPath = "C:\Projects\touch-grass\src"
$destinationRepoPath = "C:\Projects\FaKiieZ.github.io"

# Copy all files from the source repository to the destination repository
Write-Host "Deleting all files from destination..." -ForegroundColor Green
Get-ChildItem -Path "$destinationRepoPath\*" -Exclude ".git" | Remove-Item -Recurse -Force

# Copy all files from the source repository to the destination repository
Write-Host "Copying files from source to destination..." -ForegroundColor Green
Copy-Item -Path "$sourceRepoPath\*" -Destination $destinationRepoPath -Recurse -Force

# Navigate to the destination repository
Set-Location -Path $destinationRepoPath

# Add all changes to the staging area
Write-Host "Adding changes to the staging area..." -ForegroundColor Green
git add .

# Commit the changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Update touch-grass website"

# Push the changes to the remote repository
Write-Host "Pushing changes to the remote repository..." -ForegroundColor Green
git push

Write-Host "Files moved and pushed successfully!" -ForegroundColor Green