var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Kecamatan_Polygon_1 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_Polygon_1 = format_Batas_Kecamatan_Polygon_1.readFeatures(json_Batas_Kecamatan_Polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_Polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_Polygon_1.addFeatures(features_Batas_Kecamatan_Polygon_1);
var lyr_Batas_Kecamatan_Polygon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Kecamatan_Polygon_1, 
                style: style_Batas_Kecamatan_Polygon_1,
                interactive: true,
    title: 'Batas_Kecamatan_Polygon<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_0.png" /> Pagai Selatan<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_1.png" /> Pagai Utara<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_2.png" /> Siberut Barat<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_3.png" /> Siberut Barat Daya<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_4.png" /> Siberut Selatan<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_5.png" /> Siberut Tengah<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_6.png" /> Siberut Utara<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_7.png" /> Sikakap<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_8.png" /> Sipora Selatan<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_9.png" /> Sipora Utara<br />\
    <img src="styles/legend/Batas_Kecamatan_Polygon_1_10.png" /> <br />'
        });
var format_Hasil_Survey_gps_2 = new ol.format.GeoJSON();
var features_Hasil_Survey_gps_2 = format_Hasil_Survey_gps_2.readFeatures(json_Hasil_Survey_gps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hasil_Survey_gps_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hasil_Survey_gps_2.addFeatures(features_Hasil_Survey_gps_2);
var lyr_Hasil_Survey_gps_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hasil_Survey_gps_2, 
                style: style_Hasil_Survey_gps_2,
                interactive: true,
                title: '<img src="styles/legend/Hasil_Survey_gps_2.png" /> Hasil_Survey_gps'
            });
var format_JarakJalan_3 = new ol.format.GeoJSON();
var features_JarakJalan_3 = format_JarakJalan_3.readFeatures(json_JarakJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JarakJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JarakJalan_3.addFeatures(features_JarakJalan_3);
var lyr_JarakJalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JarakJalan_3, 
                style: style_JarakJalan_3,
                interactive: true,
                title: '<img src="styles/legend/JarakJalan_3.png" /> Jarak (Jalan)'
            });
var format_ObjekdanPendukungWisata_4 = new ol.format.GeoJSON();
var features_ObjekdanPendukungWisata_4 = format_ObjekdanPendukungWisata_4.readFeatures(json_ObjekdanPendukungWisata_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObjekdanPendukungWisata_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObjekdanPendukungWisata_4.addFeatures(features_ObjekdanPendukungWisata_4);
var lyr_ObjekdanPendukungWisata_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObjekdanPendukungWisata_4, 
                style: style_ObjekdanPendukungWisata_4,
                interactive: true,
                title: '<img src="styles/legend/ObjekdanPendukungWisata_4.png" /> Objek dan Pendukung Wisata'
            });
var format_ObjekdanPendukungWisata_5 = new ol.format.GeoJSON();
var features_ObjekdanPendukungWisata_5 = format_ObjekdanPendukungWisata_5.readFeatures(json_ObjekdanPendukungWisata_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObjekdanPendukungWisata_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObjekdanPendukungWisata_5.addFeatures(features_ObjekdanPendukungWisata_5);
var lyr_ObjekdanPendukungWisata_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObjekdanPendukungWisata_5, 
                style: style_ObjekdanPendukungWisata_5,
                interactive: true,
    title: 'Objek dan Pendukung Wisata<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_0.png" /> Akses Bandara<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_1.png" /> Askes Pelabuhan<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_2.png" /> Layanan Kesehatan<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_3.png" /> Pusat Pemerintahan<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_4.png" /> Pusata Pemerintahan<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_5.png" /> Wisata  Air Terjun<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_6.png" /> Wisata Air Terjun<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_7.png" /> Wisata Budaya<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_8.png" /> Wisata Pantai<br />\
    <img src="styles/legend/ObjekdanPendukungWisata_5_9.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Kecamatan_Polygon_1.setVisible(true);lyr_Hasil_Survey_gps_2.setVisible(true);lyr_JarakJalan_3.setVisible(true);lyr_ObjekdanPendukungWisata_4.setVisible(true);lyr_ObjekdanPendukungWisata_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Kecamatan_Polygon_1,lyr_Hasil_Survey_gps_2,lyr_JarakJalan_3,lyr_ObjekdanPendukungWisata_4,lyr_ObjekdanPendukungWisata_5];
lyr_Batas_Kecamatan_Polygon_1.set('fieldAliases', {'Id': 'Id', 'Kecamatan': 'Kecamatan', });
lyr_Hasil_Survey_gps_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Descript': 'Descript', 'Type': 'Type', 'Comment': 'Comment', 'Symbol': 'Symbol', 'DateTimeS': 'DateTimeS', 'Elevation': 'Elevation', });
lyr_JarakJalan_3.set('fieldAliases', {'Id': 'Id', 'Panjang': 'Panjang', });
lyr_ObjekdanPendukungWisata_4.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Jenis O.W': 'Jenis O.W', });
lyr_ObjekdanPendukungWisata_5.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Jenis O.W': 'Jenis O.W', });
lyr_Batas_Kecamatan_Polygon_1.set('fieldImages', {'Id': 'Range', 'Kecamatan': 'TextEdit', });
lyr_Hasil_Survey_gps_2.set('fieldImages', {'Id': '', 'Name': '', 'Descript': '', 'Type': '', 'Comment': '', 'Symbol': '', 'DateTimeS': '', 'Elevation': '', });
lyr_JarakJalan_3.set('fieldImages', {'Id': '', 'Panjang': '', });
lyr_ObjekdanPendukungWisata_4.set('fieldImages', {'Id': '', 'Nama': '', 'Jenis O.W': '', });
lyr_ObjekdanPendukungWisata_5.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', 'Jenis O.W': 'TextEdit', });
lyr_Batas_Kecamatan_Polygon_1.set('fieldLabels', {'Id': 'header label', 'Kecamatan': 'header label', });
lyr_Hasil_Survey_gps_2.set('fieldLabels', {'Id': 'header label', 'Name': 'header label', 'Descript': 'header label', 'Type': 'header label', 'Comment': 'header label', 'Symbol': 'header label', 'DateTimeS': 'header label', 'Elevation': 'header label', });
lyr_JarakJalan_3.set('fieldLabels', {'Id': 'header label', 'Panjang': 'header label', });
lyr_ObjekdanPendukungWisata_4.set('fieldLabels', {'Id': 'header label', 'Nama': 'header label', 'Jenis O.W': 'header label', });
lyr_ObjekdanPendukungWisata_5.set('fieldLabels', {'Id': 'header label', 'Nama': 'header label', 'Jenis O.W': 'header label', });
lyr_ObjekdanPendukungWisata_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});