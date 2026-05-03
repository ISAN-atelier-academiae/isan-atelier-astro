# s:\Proiecta\isan_atelier_astro\scripts\migrar_obsidian.ps1
# Script para conectar el Cerebro de Obsidian (S:\Connexiones_Obsidian) con la Mediateca Astro (Planta 1)

$Origen = "S:\Connexiones_Obsidian"
$Destino = "s:\Proiecta\isan_atelier_astro\src\content\docs\investigacion"

Write-Host "======================================================="
Write-Host "INICIANDO TRANSFUSION DE CONOCIMIENTO (OBSIDIAN -> ASTRO)"
Write-Host "======================================================="

if (-Not (Test-Path $Destino)) {
    New-Item -ItemType Directory -Force -Path $Destino | Out-Null
    Write-Host "Creado directorio destino: $Destino"
}

# 1. Migrar archivos Markdown (Textos Cientificos)
Write-Host "Migrando Textos Cientificos..."
Copy-Item -Path "$Origen\*.md" -Destination $Destino -Recurse -Force

# 2. Migrar Assets (Imagenes, Audios, Videos) a public o assets de Astro
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
Write-Host "MIGRACION COMPLETADA. El Cerebro esta conectado."
Write-Host "Recuerde ejecutar 'npm run build' para procesar los wikilinks."
Write-Host "======================================================="
