# s:\Proiecta\isan_atelier_astro\scripts\vincular_github.ps1
# Script para conectar la nueva Mediateca Astro con tu repositorio existente en GitHub.

$RemoteURL = "https://github.com/ISAN-atelier-academiae/isan-atelier-astro.git" # Repositorio que debes crear en GitHub
$AstroDir = "s:\Proiecta\isan_atelier_astro"

Write-Host "==========================================================="
Write-Host "🛡️ CONECTANDO ASTRO CON EL REPOSITORIO MAESTRO DE GITHUB"
Write-Host "==========================================================="

Set-Location $AstroDir

# Inicializar un nuevo repositorio Git limpio
Write-Host "[1/4] Inicializando el motor Git..."
git init
git checkout -b main

# Añadir todos los nutrientes y componentes arquitectónicos
Write-Host "[2/4] Agrupando los planos de Antigravity..."
git add .
git commit -m "Elevación a Astro: Construcción de la Mediateca de Sendai Digital"

# Vincular al remoto existente (limpiando si hubo errores previos)
Write-Host "[3/4] Enlazando con la matriz remota: $RemoteURL"
git remote remove origin 2>$null
git remote add origin $RemoteURL


# Empujar los cambios (Force-push para sobreescribir el antiguo Quartz)
Write-Host "[4/4] Sobreescribiendo el repositorio antiguo. ¡Esto elevará la plataforma!"
Write-Host "Presiona Enter para continuar y ejecutar Force-Push, o Ctrl+C para cancelar."
Pause
git push -u origin main --force

Write-Host "==========================================================="
Write-Host "✨ MEDIATECA ENLAZADA. El flujo ahora está en tus manos."
Write-Host "==========================================================="
