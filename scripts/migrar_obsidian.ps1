# s:\Proiecta\isan_atelier_astro\scripts\migrar_obsidian.ps1
# Script para conectar el Cerebro de Obsidian con la Mediateca Astro (Planta 1)

$Origen = "S:\Connexiones_Obsidian"
$Destino = "s:\Proiecta\isan_atelier_astro\src\content\docs\investigacion"

Write-Host "======================================================="
Write-Host "INICIANDO TRANSFUSION DE CONOCIMIENTO (OBSIDIAN -> ASTRO)"
Write-Host "======================================================="

if (-Not (Test-Path $Destino)) {
    New-Item -ItemType Directory -Force -Path $Destino | Out-Null
}

# 1. Migrar archivos Markdown
Write-Host "Migrando Textos Cientificos..."
Copy-Item -Path "$Origen\*.md" -Destination $Destino -Recurse -Force

# 2. Inyector Automático de Frontmatter (Requisito de Starlight)
Write-Host "Adaptando el código de Obsidian a la arquitectura Astro..."
foreach ($file in Get-ChildItem -Path $Destino -Filter *.md -Recurse) {
    $content = Get-Content $file.FullName -Raw
    if ($null -eq $content) { $content = "" }
    $filename = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    
    # Ignorar si es el archivo de inicio que ya hicimos
    if ($filename -eq "inicio" -or $filename -eq "index") { continue }

    if ($content -match "^---\s*(?:\r?\n)") {
        if ($content -notmatch "(?m)^title:") {
            # Tiene frontmatter pero no tiene titulo
            $content = $content -replace "^---\s*(?:\r?\n)", "---`ntitle: `"$filename`"`n"
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        }
    } else {
        # No tiene frontmatter en absoluto
        $newContent = "---`ntitle: `"$filename`"`n---`n`n" + $content
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
    }
}

# 3. Migrar Assets
$AssetsDestino = "s:\Proiecta\isan_atelier_astro\public\assets"
if (-Not (Test-Path $AssetsDestino)) {
    New-Item -ItemType Directory -Force -Path $AssetsDestino | Out-Null
}

$AssetTypes = @("*.png", "*.jpg", "*.jpeg", "*.mp3", "*.mp4", "*.pdf")
Write-Host "Migrando Medios Dinamicos (Planta 2)..."
foreach ($Type in $AssetTypes) {
    Get-ChildItem -Path $Origen -Filter $Type -Recurse | Copy-Item -Destination $AssetsDestino -Force
}

Write-Host "======================================================="
Write-Host "MIGRACION Y ADAPTACION COMPLETADA."
Write-Host "======================================================="
