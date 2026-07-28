import sharp from 'sharp'
import { statSync, unlinkSync } from 'fs'

const dir = 'src/assets/images'
const files = [
  'edificio.png',
  'banner-home.png',
  'oficina-nosotros.png',
  'cont-map.png',
  'serv-oficina.png',
  'serv-salud.png',
  'serv-consorcio.png',
  'serv-concesionaria.png',
  'serv-cocheras.png',
]

for (const file of files) {
  const input = `${dir}/${file}`
  const output = input.replace(/\.png$/, '.webp')
  const before = statSync(input).size

  await sharp(input).webp({ quality: 90 }).toFile(output)

  const after = statSync(output).size
  const pct = (100 - (after / before) * 100).toFixed(0)
  console.log(`${file} -> ${file.replace('.png', '.webp')}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`)

  unlinkSync(input)
}
