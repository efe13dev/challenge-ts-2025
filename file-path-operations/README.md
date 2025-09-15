# 📁 File Path Operations

## 🎯 Objetivo

Este kata requiere que escribas un objeto que reciba una ruta de archivo y realice operaciones sobre ella. 

> ⚠️ **Nota para usuarios de Python:** No puedes usar los módulos `os.path`, `glob`, y `re`. El propósito de este kata es usar análisis de cadenas de texto, por lo que no se supone que debas importar bibliotecas externas.

## 🧪 Testing

### Python
```python
>>> master = FileMaster('/Users/person1/Pictures/house.png')
>>> master.extension()
'png'
>>> master.filename()
'house'
>>> master.dirpath()
'/Users/person1/Pictures/'
```

### Ruby
```ruby
master = FileMaster.new('/Users/person1/Pictures/house.png')
master.extension
#--> png
master.filename
#--> house
master.dirpath
#--> /Users/person1/Pictures/
```

### C#
```csharp
FileMaster FM = new FileMaster("/Users/person1/Pictures/house.png");
FM.extension(); // output: "png"
FM.filename(); // output: "house"
FM.dirpath(); // output: "/Users/person1/Pictures/"
```

### JavaScript
```javascript
const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'
```

### TypeScript
```typescript
const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'
```

### PHP
```php
$fm = new FileMaster('/Users/person1/Pictures/house.png');
$fm->extension(); // 'png'
$fm->filename(); // 'house'
$fm->dirpath(); // '/Users/person1/Pictures'
```

## 📋 Notas

- 📌 Tengo otros kata que necesitan ser probados. Puedes encontrarlos [aquí](#) y [aquí](#)
- 💬 Por favor, publica cualquier pregunta o sugerencia en la sección de discusión. ¡Gracias!
- 🙏 ¡Gracias a todos los usuarios que contribuyeron a este kata! ¡Aprecio mucho tu aporte!
