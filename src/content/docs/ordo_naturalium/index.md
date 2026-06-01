---
title: "Ordo naturalium — Catálogo Taxonómico Soberano"
description: "Base de datos botánica y geofísica modular de ISAN Academia Centralis, inspirada en iNaturalist y Wikipedia."
sidebar:
  order: 1
---

<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
    <!-- Contenido Principal (iNaturalist Style) -->
    <div style="flex: 2; min-width: 300px;">
        <p style="font-size: 1.15em; line-height: 1.6; color: #E2E8F0;">
            Bienvenido al <b>Ordo naturalium</b>, la plataforma soberana de mapeo y catalogación botánica de la academia. Este catálogo consolida observaciones del estrato vegetal, flores, arbustos y árboles georreferenciados en nuestras áreas de estudio, integrando telemetría cósmica, relieve topográfico e inteligencia artificial taxonómica.
        </p>

        <h2 style="color: #FFD700; border-bottom: 1px solid rgba(255,215,0,0.2); padding-bottom: 8px;">🌱 Mosaico de Especies (iNaturalist Feed)</h2>
        <p>Las últimas observaciones de campo registradas en el búnker de datos:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-top: 15px;">
            <!-- Muestra 1 -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,215,0,0.1); border-radius: 8px; padding: 12px; transition: transform 0.2s;">
                <div style="background: #252e3e; height: 120px; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #FFD700;">🌸 Flor de Mayo</div>
                <h4 style="margin: 8px 0 4px 0; color: #FFD700;"><i>Cattleya mossiae</i></h4>
                <p style="font-size: 0.85em; margin: 0; color: rgba(255,255,255,0.6);">Familia: Orchidaceae</p>
                <p style="font-size: 0.8em; margin: 5px 0 0 0; color: #FFD700;">📍 El Ávila • 1050 msnm</p>
            </div>
            <!-- Muestra 2 -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,215,0,0.1); border-radius: 8px; padding: 12px; transition: transform 0.2s;">
                <div style="background: #252e3e; height: 120px; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #FFD700;">🌿 Platanillo</div>
                <h4 style="margin: 8px 0 4px 0; color: #FFD700;"><i>Heliconia psittacorum</i></h4>
                <p style="font-size: 0.85em; margin: 0; color: rgba(255,255,255,0.6);">Familia: Heliconiaceae</p>
                <p style="font-size: 0.8em; margin: 5px 0 0 0; color: #FFD700;">📍 Valle de Caracas • 900 msnm</p>
            </div>
            <!-- Muestra 3 -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,215,0,0.1); border-radius: 8px; padding: 12px; transition: transform 0.2s;">
                <div style="background: #252e3e; height: 120px; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #FFD700;">🌲 Pino del Caribe</div>
                <h4 style="margin: 8px 0 4px 0; color: #FFD700;"><i>Pinus caribaea</i></h4>
                <p style="font-size: 0.85em; margin: 0; color: rgba(255,255,255,0.6);">Familia: Pinaceae</p>
                <p style="font-size: 0.8em; margin: 5px 0 0 0; color: #FFD700;">📍 Sabanas Centrales • 250 msnm</p>
            </div>
        </div>
    </div>

    <!-- Panel Lateral Informativo (Wikipedia Infobox Style) -->
    <div style="flex: 1; min-width: 250px; background: rgba(18, 22, 31, 0.8); border: 1px solid #FFD700; border-radius: 8px; padding: 15px; height: fit-content; box-shadow: 0px 4px 20px rgba(0,0,0,0.3);">
        <h3 style="text-align: center; margin-top: 0; color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 8px;">Ordo naturalium</h3>
        <p style="text-align: center; font-size: 0.9em; font-style: italic; margin-bottom: 15px;">Ficha Técnica del Proyecto</p>
        
        <table style="width: 100%; font-size: 0.85em; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 6px 0; font-weight: bold; color: #FFD700;">Institución</td>
                <td style="padding: 6px 0; text-align: right;">ISAN Academia Centralis</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 6px 0; font-weight: bold; color: #FFD700;">Base de Datos</td>
                <td style="padding: 6px 0; text-align: right;"><code>speculum_valoris</code></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 6px 0; font-weight: bold; color: #FFD700;">Plataforma de Campo</td>
                <td style="padding: 6px 0; text-align: right;">Streamlit Cloud</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 6px 0; font-weight: bold; color: #FFD700;">Motor IA</td>
                <td style="padding: 6px 0; text-align: right;">Gemini 2.5 Flash</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 6px 0; font-weight: bold; color: #FFD700;">Licencia de Datos</td>
                <td style="padding: 6px 0; text-align: right;">CC BY-NC-SA 4.0 cc</td>
            </tr>
        </table>
        
        <div style="margin-top: 15px; font-size: 0.8em; line-height: 1.4; color: rgba(255,255,255,0.6); text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
            "La configuración de la capa vegetal analizada a la luz de las estrellas, el relieve de la tierra y los metadatos de Lens."
        </div>
    </div>
</div>

---

## 🛠️ Flujo de Trabajo e Interconexión
Las bitácoras botánicas se capturan en campo utilizando la aplicación móvil en la nube, se sincronizan de forma segura con la base de datos PostgreSQL de la academia, se analizan y completan localmente en la bóveda de **Obsidian**, y finalmente se publican en esta sección de investigación mediante el puente integrado.
