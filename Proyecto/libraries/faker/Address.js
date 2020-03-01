const Base = require('./Base')
const Person = require('./Person')

module.exports = {
    _cityPrefix: ['North', 'East', 'West', 'South', 'New', 'Lake', 'Port'],
    _citySuffix: ['town', 'ton', 'land', 'ville', 'berg', 'burgh', 'borough', 'bury', 'view', 'port', 'mouth', 'stad', 'furt', 'chester', 'mouth', 'fort', 'haven', 'side', 'shire'],
    _streetPrefix: ['Alley', 'Avenue', 'Branch', 'Bridge', 'Brook', 'Brooks', 'Burg', 'Burgs', 'Bypass', 'Camp', 'Canyon', 'Cape', 'Causeway', 'Center', 'Centers', 'Circle', 'Circles', 'Cliff', 'Cliffs', 'Club', 'Common', 'Corner', 'Corners', 'Course', 'Court', 'Courts', 'Cove', 'Coves', 'Creek', 'Crescent', 'Crest', 'Crossing', 'Crossroad', 'Curve', 'Dale', 'Dam', 'Divide', 'Drive', 'Drive', 'Drives', 'Estate', 'Estates', 'Expressway', 'Extension', 'Extensions', 'Fall', 'Falls', 'Ferry', 'Field', 'Fields', 'Flat', 'Flats', 'Ford', 'Fords', 'Forest', 'Forge', 'Forges', 'Fork', 'Forks', 'Fort', 'Freeway', 'Garden', 'Gardens', 'Gateway', 'Glen', 'Glens', 'Green', 'Greens', 'Grove', 'Groves', 'Harbor', 'Harbors', 'Haven', 'Heights', 'Highway', 'Hill', 'Hills', 'Hollow', 'Inlet', 'Inlet', 'Island', 'Island', 'Islands', 'Islands', 'Isle', 'Isle', 'Junction', 'Junctions', 'Key', 'Keys', 'Knoll', 'Knolls', 'Lake', 'Lakes', 'Land', 'Landing', 'Lane', 'Light', 'Lights', 'Loaf', 'Lock', 'Locks', 'Locks', 'Lodge', 'Lodge', 'Loop', 'Mall', 'Manor', 'Manors', 'Meadow', 'Meadows', 'Mews', 'Mill', 'Mills', 'Mission', 'Mission', 'Motorway', 'Mount', 'Mountain', 'Mountain', 'Mountains', 'Mountains', 'Neck', 'Orchard', 'Oval', 'Overpass', 'Park', 'Parks', 'Parkway', 'Parkways', 'Pass', 'Passage', 'Path', 'Pike', 'Pine', 'Pines', 'Place', 'Plain', 'Plains', 'Plains', 'Plaza', 'Plaza', 'Point', 'Points', 'Port', 'Port', 'Ports', 'Ports', 'Prairie', 'Prairie', 'Radial', 'Ramp', 'Ranch', 'Rapid', 'Rapids', 'Rest', 'Ridge', 'Ridges', 'River', 'Road', 'Road', 'Roads', 'Roads', 'Route', 'Row', 'Rue', 'Run', 'Shoal', 'Shoals', 'Shore', 'Shores', 'Skyway', 'Spring', 'Springs', 'Springs', 'Spur', 'Spurs', 'Square', 'Square', 'Squares', 'Squares', 'Station', 'Station', 'Stravenue', 'Stravenue', 'Stream', 'Stream', 'Street', 'Street', 'Streets', 'Summit', 'Summit', 'Terrace', 'Throughway', 'Trace', 'Track', 'Trafficway', 'Trail', 'Trail', 'Tunnel', 'Tunnel', 'Turnpike', 'Turnpike', 'Underpass', 'Union', 'Unions', 'Valley', 'Valleys', 'Via', 'Viaduct', 'View', 'Views', 'Village', 'Village', 'Villages', 'Ville', 'Vista', 'Vista', 'Walk', 'Walks', 'Wall', 'Way', 'Ways', 'Well', 'Wells'],
    _postcode: ['#####', '#####-####'],
    _secondaryAddress: ['Apt. ###', 'Suite ###'],
    _buildingNumber: ['%####', '%###', '%##'],
    _country: [
        'Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudí','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán',
        'Bahamas','Bangladés','Barbados','Baréin','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia-Herzegovina','Botsuana','Brasil','Brunéi Darusalam','Bulgaria','Burkina Faso','Burundi','Bután','Bélgica',
        'Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Congo','Corea del Norte','Corea del Sur','Costa Rica','Costa de Marfil','Croacia','Cuba',
        'Dinamarca','Dominica',
        'Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos de América','Estonia','Etiopía',
        'Filipinas','Finlandia','Fiyi','Francia',
        'Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guinea','Guinea Ecuatorial','Guinea-Bisáu','Guyana',
        'Haití','Honduras','Hungría',
        'India','Indonesia','Irak','Irlanda','Irán','Islandia','Islas Marshall','Islas Salomón','Israel','Italia',
        'Jamaica','Japón','Jordania',
        'Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait',
        'Laos','Lesoto','Letonia','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Líbano',
        'Macedonia','Madagascar','Malasia','Malaui','Maldivas','Mali','Malta','Marruecos','Mauricio','Mauritania','Micronesia','Moldavia','Mongolia','Montenegro','Mozambique','México','Mónaco',
        'Namibia','Nauru','Nepal','Nicaragua','Nigeria','Noruega','Nueva Zelanda','Níger',
        'Omán',
        'Pakistán','Palaos','Panamá','Papúa Nueva Guinea','Paraguay','Países Bajos','Perú','Polonia','Portugal',
        'Reino Unido','Reino Unido de Gran Bretaña e Irlanda del Norte','República Centroafricana','República Checa','República Democrática del Congo','República Dominicana','Ruanda','Rumanía','Rusia',
        'Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudáfrica','Sudán','Suecia','Suiza','Surinam',
        'Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Turkmenistán','Turquía','Tuvalu','Túnez',
        'Ucrania','Uganda','Uruguay','Uzbekistán',
        'Vanuatu','Venezuela','Vietnam',
        'Yemen','Yibuti',
        'Zambia','Zimbabue'
    ],
    cityPrefix() {
        return Base.randomElement(this._cityPrefix)
    },
    citySufix() {
        return Base.randomElement(this._citySuffix)
    },
    streetPrefix() {
        return Base.randomElement(this._streetPrefix)
    },
    city() {
        switch(Base.numberBetween(0, 2)) {
            case 0:
                return this.cityPrefix() + ' ' + Person.lastname() + ' ' + this.citySufix()
            case 1:
                return this.cityPrefix() + ' ' + Person.lastname()
            default:
                return Person.lastname() + ' ' + this.citySufix()
        }
    },
    country() {
        return Base.randomElement(this._country)
    },
    streetName(){
        switch(Base.numberBetween(0, 1)) {
            case 0:
                return this.streetPrefix() + ' ' + Person.firstName()
            default:
                return this.streetPrefix() + ' ' + Person.lastname()
        }
    },
    buildingNumber() {
        return Base.numerify(Base.randomElement(this._buildingNumber))
    },
    secondaryAddress() {
        return Base.numerify(Base.randomElement(this._secondaryAddress))
    },
    streetAddress() {
        return this.streetName() + ', ' + this.buildingNumber() + ', ' + this.secondaryAddress()
    },
    postcode() {
        return Base.numerify(Base.randomElement(this._postcode))
    },
    address() {
        return this.streetAddress() + ', ' + this.postcode() + ', ' + this.city()
    },
    latitude(min = 0, max = 180) {
        return Base.randomFloat(6, min, max)
    },
    longitude(min = 0, max = 180) {
        return Base.randomFloat(6, min, max)
    }
}
