// Initialize the map centered on the world
var map = L.map('map').setView([20, 0], 2);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to create a marker with an image
function createImageMarker(coords, imagePath, linkUrl) {
    var customIcon = L.divIcon({
        className: '',
        html: `<div class="image-marker"><img src="${imagePath}"></div>`,
        iconSize: [50, 50],
        iconAnchor: [25, 25]
    });

    L.marker(coords, { icon: customIcon })
        .addTo(map)
        .on('click', function () {
            window.open(linkUrl, '_blank');
        });
}

// Load markers from markers.js
if (typeof markers !== "undefined" && Array.isArray(markers)) {
    markers.forEach(function(m) {
        createImageMarker(m.coords, m.imagePath, m.linkUrl);
    });
}

// belgian_pavilion_expo_2025_osaka_kansai
createImageMarker(
    [34.65206336350514,  135.38613877904203],
    "images/belgian_pavilion_expo_2025_osaka_kansai.jpg",
    "https://www.jma.co.jp/en/works/belgian-pavilion-expo-2025-osaka-kansai/"
);


// tokyo_birth_clinic
createImageMarker(
    [35.63113693997146, 139.72063297963734],
    "images/tokyo_birth_clinic.jpg",
    "https://www.jma.co.jp/en/works/tokyo-birth-clinic/"
);


// premist_shirakabe
createImageMarker(
    [35.18255506098534, 136.9164811924303],
    "images/premist_shirakabe.jpg",
    "https://www.jma.co.jp/en/works/premist-shirakabe/"
);


// yuda_onsen_konkonpark
createImageMarker(
    [34.16736592849613, 131.4570011075216],
    "images/yuda_onsen_konkonpark.jpg",
    "https://www.jma.co.jp/en/works/yuda-onsen-konkonpark/"
);


// patina_osaka
createImageMarker(
    [34.68202045251689, 135.52392837592748],
    "images/patina_osaka.jpg",
    "https://www.jma.co.jp/en/works/patina-osaka/"
);


// urban_planning_for_seiseki_sakuragaoka
createImageMarker(
    [35.653160751649054, 139.44793958093078],
    "images/urban_planning_for_seiseki_sakuragaoka.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-seiseki-sakuragaoka/"
);


// brillia_seiseki_sakuragaoka_blooming_terrace
createImageMarker(
    [35.654325183361884, 139.44721637297067],
    "images/brillia_seiseki_sakuragaoka_blooming_terrace.jpg",
    "https://www.jma.co.jp/en/works/brillia-seiseki-sakuragaoka-blooming-terrace/"
);


// saku_terrace_mall
createImageMarker(
    [35.653313774124804, 139.4480633198641],
    "images/saku_terrace_mall.jpg",
    "https://www.jma.co.jp/en/works/saku-terrace-mall/"
);


// proud_tower_hirai
createImageMarker(
    [35.70748127954285, 139.84135435072372],
    "images/proud_tower_hirai.jpg",
    "https://www.jma.co.jp/en/works/proud-tower-hirai/"
);


// park_tower_nishi_shinjuku
createImageMarker(
    [35.6933056, 139.6840362],
    "images/park_tower_nishi_shinjuku.jpg",
    "https://www.jma.co.jp/en/works/park-tower-nishi-shinjuku/"
);


// branz_tower_osaka_hommachi
createImageMarker(
    [34.68301851013193, 135.50381941903007],
    "images/branz_tower_osaka_hommachi.jpg",
    "https://www.jma.co.jp/en/works/branz-tower-osaka-hommachi/"
);


// premist_kyoto_gojo
createImageMarker(
    [34.996395403445376, 135.76383238904182],
    "images/premist_kyoto_gojo.jpg",
    "https://www.jma.co.jp/en/works/premist-kyoto-gojo/"
);


// laurel_tower_sakaisuji_hommachi
createImageMarker(
    [34.68100854106629, 135.50604059207922],
    "images/laurel_tower_sakaisuji_hommachi.jpg",
    "https://www.jma.co.jp/en/works/laurel-tower-sakaisuji-hommachi/"
);


// lions_minamisenju_grand_place
createImageMarker(
    [35.7358889, 139.7873418],
    "images/lions_minamisenju_grand_place.jpg",
    "https://www.jma.co.jp/en/works/lions-minamisenju-grand-place/"
);


// park_wellstate_makuhari_bay_park
createImageMarker(
    [35.64421950274471, 140.05391720522462],
    "images/park_wellstate_makuhari_bay_park.jpg",
    "https://www.jma.co.jp/en/works/park-wellstate-makuhari-bay-park/"
);


// the_yokohama_front
createImageMarker(
    [35.468767669565466, 139.62352453235522],
    "images/the_yokohama_front.jpg",
    "https://www.jma.co.jp/en/works/the-yokohama-front/"
);


// premist_tokuyama_the_residence
createImageMarker(
    [34.05051347889173, 131.80390431074645],
    "images/premist_tokuyama_the_residence.jpg",
    "https://www.jma.co.jp/en/works/premist-tokuyama-the-residence/"
);


// sun_nakakasai
createImageMarker(
    [35.664443321291294, 139.8729115988088],
    "images/sun_nakakasai.jpg",
    "https://www.jma.co.jp/en/works/sun-nakakasai/"
);


// premist_matsuyama_nibancho
createImageMarker(
    [33.839724600544564, 132.76853633925128],
    "images/premist_matsuyama_nibancho.jpg",
    "https://www.jma.co.jp/en/works/premist-matsuyama-nibancho/"
);


// karasuma_plaza_21
createImageMarker(
    [35.00680997800012, 135.7600535102273],
    "images/karasuma_plaza_21.jpg",
    "https://www.jma.co.jp/en/works/karasuma-plaza-21/"
);


// scenes_kyoto_shijo_karasuma_sai_no_tei_rin_no_tei
createImageMarker(
    [34.999018547587745, 135.7564310591676],
    "images/scenes_kyoto_shijo_karasuma_sai_no_tei_rin_no_tei.jpg",
    "https://www.jma.co.jp/en/works/scenes-kyoto-shijo-karasuma-sai-no-tei-rin-no-tei/"
);


// proud_tower_kawaguchi_cross
createImageMarker(
    [35.803319492344094, 139.72035178340494],
    "images/proud_tower_kawaguchi_cross.jpg",
    "https://www.jma.co.jp/en/works/proud-tower-kawaguchi-cross/"
);


// dassai_blue_sake_brewery
createImageMarker(
    [41.76178462420322, -73.92896009134789],
    "images/dassai_blue_sake_brewery.jpg",
    "https://www.jma.co.jp/en/works/dassai-blue-sake-brewery/"
);


// nagoya_the_tower
createImageMarker(
    [35.163883791587274, 136.88988120427194],
    "images/nagoya_the_tower.jpg",
    "https://www.jma.co.jp/en/works/nagoya-the-tower/"
);


// premist_ohori_2chome
createImageMarker(
    [33.58806657364582, 130.37186675441436],
    "images/premist_ohori_2chome.jpg",
    "https://www.jma.co.jp/en/works/premist-ohori-2chome/"
);


// premist_shurikinjo_cho
createImageMarker(
    [26.215183767110894, 127.71634950719518],
    "images/premist_shurikinjo_cho.jpg",
    "https://www.jma.co.jp/en/works/premist-shurikinjo-cho/"
);


// shirokane_the_sky
createImageMarker(
    [35.64644863675257, 139.73511064769949],
    "images/shirokane_the_sky.jpg",
    "https://www.jma.co.jp/en/works/shirokane-the-sky/"
);


// premist_tower_shirokane_takanawa
createImageMarker(
    [35.644079271250796, 139.73517543560195],
    "images/premist_tower_shirokane_takanawa.jpg",
    "https://www.jma.co.jp/en/works/premist-tower-shirokane-takanawa/"
);


// h_u_bioness_complex
createImageMarker(
    [35.730642886367164, 139.27296626971892],
    "images/h_u_bioness_complex.jpg",
    "https://www.jma.co.jp/en/works/h-u-bioness-complex/"
);


// connect_harumi
createImageMarker(
    [35.64766709467857, 139.7720544137241],
    "images/connect_harumi.jpg",
    "https://www.jma.co.jp/en/works/connect-harumi/"
);


// brillia_kyoto_gojo
createImageMarker(
    [34.99705416774982, 135.76352777432797],
    "images/brillia_kyoto_gojo.jpg",
    "https://www.jma.co.jp/en/works/brillia-kyoto-gojo/"
);


// hiroshima_mazda_saijo
createImageMarker(
    [34.42256472081746, 132.75464273390642],
    "images/hiroshima_mazda_saijo.jpg",
    "https://www.jma.co.jp/en/works/hiroshima-mazda-saijo/"
);


// brillia_tower_seiseki_sakuragaoka_blooming_residence
createImageMarker(
    [35.65290674367441, 139.44916820123768],
    "images/brillia_tower_seiseki_sakuragaoka_blooming_residence.jpg",
    "https://www.jma.co.jp/en/works/brillia-tower-seiseki-sakuragaoka-blooming-residence/"
);


// j_gran_shonan_hiratsuka
createImageMarker(
    [35.33087999453299, 139.3528252687325],
    "images/j_gran_shonan_hiratsuka.jpg",
    "https://www.jma.co.jp/en/works/j-gran-shonan-hiratsuka/"
);


// premist_ashiya
createImageMarker(
    [34.729689897873406, 135.3048834817692],
    "images/premist_ashiya.jpg",
    "https://www.jma.co.jp/en/works/premist-ashiya/"
);


// first_sky_building
createImageMarker(
    [35.68813523247539, 139.70310484003002],
    "images/first_sky_building.jpg",
    "https://www.jma.co.jp/en/works/first-sky-building/"
);


// takasago_thermal_engineering_t_base
createImageMarker(
    [35.80506838659243, 139.84751728983355],
    "images/takasago_thermal_engineering_t_base.jpg",
    "https://www.jma.co.jp/en/works/takasago-thermal-engineering-t-base/"
);


// prestige_international_akita_bpo_nikaho_campus
createImageMarker(
    [39.280172, 139.959108],
    "images/prestige_international_akita_bpo_nikaho_campus.jpg",
    "https://www.jma.co.jp/en/works/prestige-international-akita-bpo-nikaho-campus/"
);


// kusukaze_square_arks_2
createImageMarker(
    [33.25125007849763, 130.29904614886243],
    "images/kusukaze_square_arks_2.jpg",
    "https://www.jma.co.jp/en/works/kusukaze-square-arks-2/"
);


// urban_planning_for_maya
createImageMarker(
    [34.73660391388783, 135.22203048099365],
    "images/urban_planning_for_maya.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-maya/"
);


// furumachi_rufuru
createImageMarker(
    [37.92263169098943, 139.0445263382712],
    "images/furumachi_rufuru.jpg",
    "https://www.jma.co.jp/en/works/furumachi-rufuru/"
);


// maya_city_station_bloom
createImageMarker(
    [34.708889535198054, 135.22340409628367],
    "images/maya_city_station_bloom.jpg",
    "https://www.jma.co.jp/en/works/maya-city-station-bloom/"
);


// mitsui_memorial_museum_2
createImageMarker(
    [35.6863666364582, 139.77314889977566],
    "images/mitsui_memorial_museum_2.jpg",
    "https://www.jma.co.jp/en/works/mitsui-memorial-museum-2/"
);


// wolt_japan_hq
createImageMarker(
    [35.646069115157275, 139.71152639815762],
    "images/wolt_japan_hq.jpg",
    "https://www.jma.co.jp/en/works/wolt-japan-hq/"
);


// loisir_hotel_naha
createImageMarker(
    [26.213404624186374, 127.66681587759889],
    "images/loisir_hotel_naha.jpg",
    "https://www.jma.co.jp/en/works/loisir-hotel-naha/"
);


// maya_city_station_axis
createImageMarker(
    [34.709485, 135.225740],
    "images/maya_city_station_axis.jpg",
    "https://www.jma.co.jp/en/works/maya-city-station-axis/"
);


// ds_varie_hongo_building_renovation
createImageMarker(
    [35.705340004871886, 139.75574408246817],
    "images/ds_varie_hongo_building_renovation.jpg",
    "https://www.jma.co.jp/en/works/ds-varie-hongo-building-renovation/"
);


// kosugi_3rd_avenue
createImageMarker(
    [35.57621961218685, 139.65842690694623],
    "images/kosugi_3rd_avenue.jpg",
    "https://www.jma.co.jp/en/works/kosugi-3rd-avenue/"
);


// premist_higashiginza_tsukiji_arc_court_edge_court
createImageMarker(
    [35.6653206, 139.7620807],
    "images/premist_higashiginza_tsukiji_arc_court_edge_court.jpg",
    "https://www.jma.co.jp/en/works/premist-higashiginza-tsukiji-arc-court-edge-court/"
);


// premist_kyoto_saiin
createImageMarker(
    [34.99767431177362, 135.73184365350338],
    "images/premist_kyoto_saiin.jpg",
    "https://www.jma.co.jp/en/works/premist-kyoto-saiin/"
);


// makuhari_bay_park_sky_grand_tower
createImageMarker(
    [35.644999, 140.049867],
    "images/makuhari_bay_park_sky_grand_tower.jpg",
    "https://www.jma.co.jp/en/works/makuhari-bay-park-sky-grand-tower/"
);


// urban_planning_for_makuhari
createImageMarker(
    [35.646365, 140.051995],
    "images/urban_planning_for_makuhari.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-makuhari/"
);


// center_field
createImageMarker(
    [37.503370, 127.041577],
    "images/center_field.jpg",
    "https://www.jma.co.jp/en/works/center-field/"
);


// branz_city_azamino
createImageMarker(
    [35.5686841016209, 139.5468207689048],
    "images/branz_city_azamino.jpg",
    "https://www.jma.co.jp/en/works/branz-city-azamino/"
);


// sendai_miyagino_building
createImageMarker(
    [38.259929318766524, 140.88833909777625],
    "images/sendai_miyagino_building.jpg",
    "https://www.jma.co.jp/en/works/sendai-miyagino-building/"
);


// kyoto_yura_hotel_mgallery
createImageMarker(
    [35.01178031930591, 135.7491173464823],
    "images/kyoto_yura_hotel_mgallery.jpg",
    "https://www.jma.co.jp/en/works/kyoto-yura-hotel-mgallery/"
);


// urban_planning_for_musashikosugi
createImageMarker(
    [35.575882, 139.659685],
    "images/urban_planning_for_musashikosugi.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-musashikosugi/"
);


// toyosu_bayside_cross
createImageMarker(
    [35.655143168551206, 139.79456600204938],
    "images/toyosu_bayside_cross.jpg",
    "https://www.jma.co.jp/en/works/toyosu-bayside-cross/"
);


// urban_planning_for_toyosu
createImageMarker(
    [35.653770, 139.795442],
    "images/urban_planning_for_toyosu.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-toyosu/"
);


// tokyo_international_airport_international_passenger_terminal2
createImageMarker(
    [35.54927312906292, 139.7904930664673],
    "images/tokyo_international_airport_international_passenger_terminal2.jpg",
    "https://www.jma.co.jp/en/works/tokyo-international-airport-international-passenger-terminal2/"
);


// premist_ariake_gardens
createImageMarker(
    [35.6398889, 139.7884529],
    "images/premist_ariake_gardens.jpg",
    "https://www.jma.co.jp/en/works/premist-ariake-gardens/"
);


// mitsui_garden_hotel_roppongi_premier
createImageMarker(
    [35.662091, 139.735959],
    "images/mitsui_garden_hotel_roppongi_premier.jpg",
    "https://www.jma.co.jp/en/works/mitsui-garden-hotel-roppongi-premier/"
);


// nihonbashi_mitsui_tower_mitsui_building_no_2_renovation
createImageMarker(
    [35.6870308619935, 139.77305649993488],
    "images/nihonbashi_mitsui_tower_mitsui_building_no_2_renovation.jpg",
    "https://www.jma.co.jp/en/works/nihonbashi-mitsui-tower-mitsui-building-no-2-renovation/"
);


// park_city_musashikoyama_the_tower
createImageMarker(
    [35.62003, 139.705257],
    "images/park_city_musashikoyama_the_tower.jpg",
    "https://www.jma.co.jp/en/works/park-city-musashikoyama-the-tower/"
);


// bali_esperanza_villa_uluwatu
createImageMarker(
    [-8.846053, 115.139012],
    "images/bali_esperanza_villa_uluwatu.jpg",
    "https://www.jma.co.jp/en/works/bali-esperanza-villa-uluwatu/"
);


// minato_mirai_center_building_renovation_phase2
createImageMarker(
    [35.457710, 139.633522],
    "images/minato_mirai_center_building_renovation_phase2.jpg",
    "https://www.jma.co.jp/en/works/minato-mirai-center-building-renovation-phase2/"
);


// new_taipei_city_tatung_smart_manor_phase1
createImageMarker(
    [24.982576, 121.445447],
    "images/new_taipei_city_tatung_smart_manor_phase1.jpg",
    "https://www.jma.co.jp/en/works/new-taipei-city-tatung-smart-manor-phase1/"
);


// maya_city_station_gate
createImageMarker(
    [34.708280, 135.224586],
    "images/maya_city_station_gate.jpg",
    "https://www.jma.co.jp/en/works/maya-city-station-gate/"
);


// wakohre_the_kobe_tor_road
createImageMarker(
    [34.694255, 135.187669],
    "images/wakohre_the_kobe_tor_road.jpg",
    "https://www.jma.co.jp/en/works/wakohre-the-kobe-tor-road/"
);


// park_tower_harumi
createImageMarker(
    [35.656506, 139.787446],
    "images/park_tower_harumi.jpg",
    "https://www.jma.co.jp/en/works/park-tower-harumi/"
);


// prestige_international_akita_bpo_yokote_campus
createImageMarker(
    [39.270055, 140.547628],
    "images/prestige_international_akita_bpo_yokote_campus.jpg",
    "https://www.jma.co.jp/en/works/prestige-international-akita-bpo-yokote-campus/"
);


// hotel_canata_kyoto
createImageMarker(
    [35.012745, 135.753066],
    "images/hotel_canata_kyoto.jpg",
    "https://www.jma.co.jp/en/works/hotel-canata-kyoto/"
);


// makuhari_bay_park_cross_tower_residence
createImageMarker(
    [35.646855, 140.051774],
    "images/makuhari_bay_park_cross_tower_residence.jpg",
    "https://www.jma.co.jp/en/works/makuhari-bay-park-cross-tower-residence/"
);


// sophia_arrupe_international_residence
createImageMarker(
    [35.680625, 139.720150],
    "images/sophia_arrupe_international_residence.jpg",
    "https://www.jma.co.jp/en/works/sophia-arrupe-international-residence/"
);


// nihonbashi_muromachi_mitsui_tower
createImageMarker(
    [35.687935, 139.772491],
    "images/nihonbashi_muromachi_mitsui_tower.jpg",
    "https://www.jma.co.jp/en/works/nihonbashi-muromachi-mitsui-tower/"
);


// park_homes_chiyoda_awaji_cho
createImageMarker(
    [35.695015, 139.769753],
    "images/park_homes_chiyoda_awaji_cho.jpg",
    "https://www.jma.co.jp/en/works/park-homes-chiyoda-awaji-cho/"
);


// park_city_musashikosugi_the_garden
createImageMarker(
    [35.577721, 139.656924],
    "images/park_city_musashikosugi_the_garden.jpg",
    "https://www.jma.co.jp/en/works/park-city-musashikosugi-the-garden/"
);


// minato_mirai_center_building_renovation
createImageMarker(
    [35.457710, 139.633522],
    "images/minato_mirai_center_building_renovation.jpg",
    "https://www.jma.co.jp/en/works/minato-mirai-center-building-renovation/"
);


// premist_kamiasao
createImageMarker(
    [35.592005, 139.500237],
    "images/premist_kamiasao.jpg",
    "https://www.jma.co.jp/en/works/premist-kamiasao/"
);


// doubletree_by_hilton_okinawa_chatan_resort
createImageMarker(
    [26.317553, 127.753842],
    "images/doubletree_by_hilton_okinawa_chatan_resort.jpg",
    "https://www.jma.co.jp/en/works/doubletree-by-hilton-okinawa-chatan-resort/"
);


// crevia_rxe_setagaya_shoin_jinja_mae
createImageMarker(
    [35.644887, 139.653148],
    "images/crevia_rxe_setagaya_shoin_jinja_mae.jpg",
    "https://www.jma.co.jp/en/works/crevia-rxe-setagaya-shoin-jinja-mae/"
);


// tsunashima_sustainable_smart_town
createImageMarker(
    [35.542107, 139.641626],
    "images/tsunashima_sustainable_smart_town.jpg",
    "https://www.jma.co.jp/en/works/tsunashima-sustainable-smart-town/"
);


// park_city_kashiwanoha_campus_the_gate_tower
createImageMarker(
    [35.895897, 139.951722],
    "images/park_city_kashiwanoha_campus_the_gate_tower.jpg",
    "https://www.jma.co.jp/en/works/park-city-kashiwanoha-campus-the-gate-tower/"
);


// urban_planning_for_kashiwanoha
createImageMarker(
    [35.893259, 139.952592],
    "images/urban_planning_for_kashiwanoha.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-kashiwanoha/"
);


// nathan_road_562
createImageMarker(
    [22.314718, 114.170589],
    "images/nathan_road_562.jpg",
    "https://www.jma.co.jp/en/works/nathan-road-562/"
);


// takamatsu_sunport_government_building_south_building
createImageMarker(
    [34.351932, 134.045919],
    "images/takamatsu_sunport_government_building_south_building.jpg",
    "https://www.jma.co.jp/en/works/takamatsu-sunport-government-building-south-building/"
);


// park_city_chuo_minato_the_tower
createImageMarker(
    [35.671264, 139.780717],
    "images/park_city_chuo_minato_the_tower.jpg",
    "https://www.jma.co.jp/en/works/park-city-chuo-minato-the-tower/"
);


// jingumae_tower_building
createImageMarker(
    [35.670581, 139.706672],
    "images/jingumae_tower_building.jpg",
    "https://www.jma.co.jp/en/works/jingumae-tower-building/"
);


// proud_tower_nagoya_sakae_terrasse_nayabashi
createImageMarker(
    [35.167566, 136.892584],
    "images/proud_tower_nagoya_sakae_terrasse_nayabashi.jpg",
    "https://www.jma.co.jp/en/works/proud-tower-nagoya-sakae_terrasse-nayabashi/"
);


// duo_hills_tsukuba_emblem
createImageMarker(
    [36.081776, 140.115363],
    "images/duo_hills_tsukuba_emblem.jpg",
    "https://www.jma.co.jp/en/works/duo-hills-tsukuba-emblem/"
);


// kiralis_hakodate
createImageMarker(
    [41.773088, 140.728633],
    "images/kiralis_hakodate.jpg",
    "https://www.jma.co.jp/en/works/kiralis-hakodate/"
);


// branz_tower_minatomirai
createImageMarker(
    [35.458399, 139.634123],
    "images/branz_tower_minatomirai.jpg",
    "https://www.jma.co.jp/en/works/branz-tower-minatomirai/"
);


// bayz_tower_garden
createImageMarker(
    [35.648380, 139.793945],
    "images/bayz_tower_garden.jpg",
    "https://www.jma.co.jp/en/works/bayz-tower-garden/"
);


// tri_seven_roppongi
createImageMarker(
    [35.665346, 139.729219],
    "images/tri_seven_roppongi.jpg",
    "https://www.jma.co.jp/en/works/tri-seven-roppongi/"
);


// four_seasons_hotel_kyoto_courtyard
createImageMarker(
    [34.991090, 135.776376],
    "images/four_seasons_hotel_kyoto_courtyard.jpg",
    "https://www.jma.co.jp/en/works/four-seasons-hotel-kyoto-courtyard/"
);


// shilla_ipark_duty_free
createImageMarker(
    [37.529084, 126.964002],
    "images/shilla_ipark_duty_free.jpg",
    "https://www.jma.co.jp/en/works/shilla-ipark-duty-free/"
);


// coca_cola_headquarters
createImageMarker(
    [35.658222, 139.712256],
    "images/coca_cola_headquarters.jpg",
    "https://www.jma.co.jp/en/works/coca-cola-headquarters/"
);


// maya_city_comfort_maya_city_delight
createImageMarker(
    [34.707919, 135.221993],
    "images/maya_city_comfort_maya_city_delight.jpg",
    "https://www.jma.co.jp/en/works/maya-city-comfort-maya-city-delight/"
);


// lumilace_toyosu
createImageMarker(
    [35.653062, 139.797323],
    "images/lumilace_toyosu.jpg",
    "https://www.jma.co.jp/en/works/lumilace-toyosu/"
);


// park_axis_toyosu_canal_canal_place_toyosu
createImageMarker(
    [35.649199, 139.793366],
    "images/park_axis_toyosu_canal_canal_place_toyosu.jpg",
    "https://www.jma.co.jp/en/works/park-axis-toyosu-canal-canal-place-toyosu/"
);


// kyushu_university_science_department_general_research_building_2
createImageMarker(
    [33.596477, 130.220618],
    "images/kyushu_university_science_department_general_research_building_2.jpg",
    "https://www.jma.co.jp/en/works/kyushu-university-science-department-general-research-building-2/"
);


// park_court_shibuya_oyama_cho_the_plane
createImageMarker(
    [35.671381, 139.673154],
    "images/park_court_shibuya_oyama_cho_the_plane.jpg",
    "https://www.jma.co.jp/en/works/park-court-shibuya-oyama-cho-the-plane/"
);


// open_residencia_minamiaoyama
createImageMarker(
    [35.665874, 139.714878],
    "images/open_residencia_minamiaoyama.jpg",
    "https://www.jma.co.jp/en/works/open-residencia-minamiaoyama/"
);


// calzedonia_shinjyuku
createImageMarker(
    [35.691670, 139.703427],
    "images/calzedonia_shinjyuku.jpg",
    "https://www.jma.co.jp/en/works/calzedonia-shinjyuku/"
);


// park_city_osaki
createImageMarker(
    [35.621682, 139.731229],
    "images/park_city_osaki.jpg",
    "https://www.jma.co.jp/en/works/park-city-osaki/"
);


// urban_planning_for_osaki_gotanda
createImageMarker(
    [35.623017, 139.729557],
    "images/urban_planning_for_osaki_gotanda.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-osaki-gotanda/"
);


// skyz_tower_garden
createImageMarker(
    [35.647322, 139.793118],
    "images/skyz_tower_garden.jpg",
    "https://www.jma.co.jp/en/works/skyz-tower-garden/"
);


// gran_suite_kamogawa
createImageMarker(
    [35.030527, 135.769427],
    "images/gran_suite_kamogawa.jpg",
    "https://www.jma.co.jp/en/works/gran-suite-kamogawa/"
);


// kitsuneno_ashiato
createImageMarker(
    [34.164418, 131.457410],
    "images/kitsuneno_ashiato.jpg",
    "https://www.jma.co.jp/en/works/kitsuneno-ashiato/"
);


// urban_planning_for_yuda_onsen
createImageMarker(
    [34.164759, 131.457214],
    "images/urban_planning_for_yuda_onsen.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-yuda-onsen/"
);


// park_tower_kitahama
createImageMarker(
    [34.689939, 135.510515],
    "images/park_tower_kitahama.jpg",
    "https://www.jma.co.jp/en/works/park-tower-kitahama/"
);


// modesty_home
createImageMarker(
    [25.0120939, 121.4666669],
    "images/modesty_home.jpg",
    "https://www.jma.co.jp/en/works/modesty-home/"
);


// tiat_lounge_sky_lounge_renewal
createImageMarker(
    [35.545282, 139.769604],
    "images/tiat_lounge_sky_lounge_renewal.jpg",
    "https://www.jma.co.jp/en/works/tiat-lounge-sky-lounge-renewal/"
);


// maya_city_nada_exceed
createImageMarker(
    [34.706454, 135.219483],
    "images/maya_city_nada_exceed.jpg",
    "https://www.jma.co.jp/en/works/maya-city-nada-exceed/"
);


// park_axis_hakata
createImageMarker(
    [33.589351, 130.412745],
    "images/park_axis_hakata.jpg",
    "https://www.jma.co.jp/en/works/park-axis-hakata/"
);


// nathan_suites
createImageMarker(
    [1.2951906, 103.8269058],
    "images/nathan_suites.jpg",
    "https://www.jma.co.jp/en/works/nathan-suites/"
);


// hilton_okinawa_chatan_resort
createImageMarker(
    [26.318631, 127.754761],
    "images/hilton_okinawa_chatan_resort.jpg",
    "https://www.jma.co.jp/en/works/hilton-okinawa-chatan-resort/"
);


// kirarito_ginza
createImageMarker(
    [35.674183, 139.768625],
    "images/kirarito_ginza.jpg",
    "https://www.jma.co.jp/en/works/kirarito-ginza/"
);


// tiat_lounge_annex_sky_lounge_annex_haneda_airport_international_passenger_terminal
createImageMarker(
    [35.545396, 139.768096],
    "images/tiat_lounge_annex_sky_lounge_annex_haneda_airport_international_passenger_terminal.jpg",
    "https://www.jma.co.jp/en/works/tiat-lounge-annex-sky-lounge-annex-haneda-airport-international-passenger-terminal/"
);


// refurbishment_nihonbashi_mitsui_tower
createImageMarker(
    [35.686988, 139.773256],
    "images/refurbishment_nihonbashi_mitsui_tower.jpg",
    "https://www.jma.co.jp/en/works/refurbishment-nihonbashi-mitsui-tower/"
);


// tanabesou_dining
createImageMarker(
    [35.030842, 135.769584],
    "images/tanabesou_dining.jpg",
    "https://www.jma.co.jp/en/works/tanabesou-dining/"
);


// park_tower_minami_senrioka
createImageMarker(
    [34.784716, 135.555618],
    "images/park_tower_minami_senrioka.jpg",
    "https://www.jma.co.jp/en/works/park-tower-minami-senrioka/"
);


// park_city_musashi_kosugi_grand_wing_tower
createImageMarker(
    [35.574872, 139.659640],
    "images/park_city_musashi_kosugi_grand_wing_tower.jpg",
    "https://www.jma.co.jp/en/works/park-city-musashi-kosugi-grand-wing-tower/"
);


// park_city_musasino_sakurazutumi_park_city_musasino_sakurazutumi_oukei_tei
createImageMarker(
    [35.709958, 139.531841],
    "images/park_city_musasino_sakurazutumi_park_city_musasino_sakurazutumi_oukei_tei.jpg",
    "https://www.jma.co.jp/en/works/park-city-musasino-sakurazutumi_park-city-musasino-sakurazutumi-oukei-tei/"
);


// abeno_harukas
createImageMarker(
    [34.646071, 135.513993],
    "images/abeno_harukas.jpg",
    "https://www.jma.co.jp/en/works/abeno-harukas/"
);


// maya_city_nada_front
createImageMarker(
    [34.705196, 135.217730],
    "images/maya_city_nada_front.jpg",
    "https://www.jma.co.jp/en/works/maya-city-nada-front/"
);


// park_city_kashiwanoha_campus_nibangai
createImageMarker(
    [35.896559, 139.951100],
    "images/park_city_kashiwanoha_campus_nibangai.jpg",
    "https://www.jma.co.jp/en/works/park-city-kashiwanoha-campus-nibangai/"
);


// park_homes_kaminobori_grand_croix
createImageMarker(
    [34.397860, 132.467984],
    "images/park_homes_kaminobori_grand_croix.jpg",
    "https://www.jma.co.jp/en/works/park-homes-kaminobori-grand-croix/"
);


// blue_vista_riviera
createImageMarker(
    [35.295706, 139.553000],
    "images/blue_vista_riviera.jpg",
    "https://www.jma.co.jp/en/works/blue-vista-riviera/"
);


// arkhills_sengokuyama_mori_tower
createImageMarker(
    [35.6630657, 139.741809],
    "images/arkhills_sengokuyama_mori_tower.jpg",
    "https://www.jma.co.jp/en/works/arkhills-sengokuyama-mori-tower/"
);


// tokyo_american_club
createImageMarker(
    [35.658703, 139.741533],
    "images/tokyo_american_club.jpg",
    "https://www.jma.co.jp/en/works/tokyo-american-club/"
);


// kotesashi_towers
createImageMarker(
    [35.801831, 139.438046],
    "images/kotesashi_towers.jpg",
    "https://www.jma.co.jp/en/works/kotesashi-towers/"
);


// mt_moiwa_ropeway_facilities
createImageMarker(
    [43.021918, 141.322551],
    "images/mt_moiwa_ropeway_facilities.jpg",
    "https://www.jma.co.jp/en/works/mt-moiwa-ropeway-facilities/"
);


// adenium_tower_umeda_east_square
createImageMarker(
    [34.710677, 135.507162],
    "images/adenium_tower_umeda_east_square.jpg",
    "https://www.jma.co.jp/en/works/adenium-tower-umeda-east-square/"
);


// park_city_minami_senrioka
createImageMarker(
    [34.785169, 135.553698],
    "images/park_city_minami_senrioka.jpg",
    "https://www.jma.co.jp/en/works/park-city-minami-senrioka/"
);


// kumamoto_government_office_a
createImageMarker(
    [32.787362, 130.688455],
    "images/kumamoto_government_office_a.jpg",
    "https://www.jma.co.jp/en/works/kumamoto-government-office-a/"
);


// yunoya
createImageMarker(
    [34.164824, 131.455294],
    "images/yunoya.jpg",
    "https://www.jma.co.jp/en/works/yunoya/"
);


// park_tower_gransky
createImageMarker(
    [35.6245618, 139.727215],
    "images/park_tower_gransky.jpg",
    "https://www.jma.co.jp/en/works/park-tower-gransky/"
);


// the_yellow_diamond
createImageMarker(
    [37.553173, 126.92109],
    "images/the_yellow_diamond.jpg",
    "https://www.jma.co.jp/en/works/the-yellow-diamond/"
);


// park_court_azabu_juban_the_tower
createImageMarker(
    [35.6547237, 139.7393921],
    "images/park_court_azabu_juban_the_tower.jpg",
    "https://www.jma.co.jp/en/works/park-court-azabu-juban-the-tower/"
);


// new_haneda_airport_international_passenger_terminal
createImageMarker(
    [35.545278, 139.768096],
    "images/new_haneda_airport_international_passenger_terminal.jpg",
    "https://www.jma.co.jp/en/works/new-haneda-airport-international-passenger-terminal/"
);


// park_city_hamadayama
createImageMarker(
    [35.6802525, 139.6240582],
    "images/park_city_hamadayama.jpg",
    "https://www.jma.co.jp/en/works/park-city-hamadayama/"
);


// urban_planning_for_park_city_hamadayama
createImageMarker(
    [35.680517, 139.624136],
    "images/urban_planning_for_park_city_hamadayama.jpg",
    "https://www.jma.co.jp/en/works/urban-planning-for-park-city-hamadayama/"
);


// shimonoseki_city_lifelong_learning_plaza_shimonoseki_city_central_library
createImageMarker(
    [33.951263, 130.930276],
    "images/shimonoseki_city_lifelong_learning_plaza_shimonoseki_city_central_library.jpg",
    "https://www.jma.co.jp/en/works/shimonoseki-city-lifelong-learning-plaza-shimonoseki-city-central-library/"
);


// palace_grandeur
createImageMarker(
    [38.2332797, 140.3302199],
    "images/palace_grandeur.jpg",
    "https://www.jma.co.jp/en/works/palace-grandeur/"
);


// park_axis_utsubo_park
createImageMarker(
    [34.683847, 135.488900],
    "images/park_axis_utsubo_park.jpg",
    "https://www.jma.co.jp/en/works/park-axis-utsubo-park/"
);


// brillia_l_sio_hagoyama
createImageMarker(
    [35.7427958, 139.4746397],
    "images/brillia_l_sio_hagoyama.jpg",
    "https://www.jma.co.jp/en/works/brillia-l-sio-hagoyama/"
);


// fuji_xerox_rd_square
createImageMarker(
    [35.4635762, 139.627501],
    "images/fuji_xerox_rd_square.jpg",
    "https://www.jma.co.jp/en/works/fuji-xerox-rd-square/"
);


// park_court_akasaka_the_tower
createImageMarker(
    [35.6731984, 139.7316306],
    "images/park_court_akasaka_the_tower.jpg",
    "https://www.jma.co.jp/en/works/park-court-akasaka-the-tower/"
);


// sangji_construction_company_headquater
createImageMarker(
    [37.523588, 127.047085],
    "images/sangji_construction_company_headquater.jpg",
    "https://www.jma.co.jp/en/works/sangji-construction-company-headquater/"
);


// nishimura_asahi_law_firm
createImageMarker(
    [35.6671033, 139.7401427],
    "images/nishimura_asahi_law_firm.jpg",
    "https://www.jma.co.jp/en/works/nishimura-asahi-law-firm/"
);


// park_city_musashikosugi
createImageMarker(
    [35.5758851, 139.661392],
    "images/park_city_musashikosugi.jpg",
    "https://www.jma.co.jp/en/works/park-city-musashikosugi/"
);


// park_city_kashiwanoha_campus_ichibangai
createImageMarker(
    [35.69648, 139.646873],
    "images/park_city_kashiwanoha_campus_ichibangai.jpg",
    "https://www.jma.co.jp/en/works/park-city-kashiwanoha-campus-ichibangai/"
);


// the_ice_cubes
createImageMarker(
    [35.6696348, 139.7059613],
    "images/the_ice_cubes.jpg",
    "https://www.jma.co.jp/en/works/the-ice-cubes/"
);


// the_kosugi_tower
createImageMarker(
    [35.571683, 139.662035],
    "images/the_kosugi_tower.jpg",
    "https://www.jma.co.jp/en/works/the-kosugi-tower/"
);


// kempinski_hotel_suzhou
createImageMarker(
    [31.282724, 120.706112],
    "images/kempinski_hotel_suzhou.jpg",
    "https://www.jma.co.jp/en/works/kempinski-hotel-suzhou/"
);


// urban_dock_park_city_toyosu
createImageMarker(
    [35.6575754, 139.791189],
    "images/urban_dock_park_city_toyosu.jpg",
    "https://www.jma.co.jp/en/works/urban-dock-park-city-toyosu/"
);


// aune_makuhari
createImageMarker(
    [35.6484396, 140.0425695],
    "images/aune_makuhari.jpg",
    "https://www.jma.co.jp/en/works/aune-makuhari/"
);


// de_beers_ginza_building
createImageMarker(
    [35.6734778, 139.7664561],
    "images/de_beers_ginza_building.jpg",
    "https://www.jma.co.jp/en/works/de-beers-ginza-building/"
);


// shibaura_island_design_guideline
createImageMarker(
    [35.6411428, 139.7521838],
    "images/shibaura_island_design_guideline.jpg",
    "https://www.jma.co.jp/en/works/shibaura-island-design-guideline/"
);


// yodoyabashi_mitsui_building_mitsui_sumitomo_kaijyo_yodoyabashi_building_yodoyabashi_odona
createImageMarker(
    [34.6910047, 135.5002348],
    "images/yodoyabashi_mitsui_building_mitsui_sumitomo_kaijyo_yodoyabashi_building_yodoyabashi_odona.jpg",
    "https://www.jma.co.jp/en/works/yodoyabashi-mitsui-building-mitsui-sumitomo-kaijyo-yodoyabashi-building-yodoyabashi-odona/"
);


// mitsui_garden_hotel_prana_tokyo_bay
createImageMarker(
    [35.6358942, 139.9246576],
    "images/mitsui_garden_hotel_prana_tokyo_bay.jpg",
    "https://www.jma.co.jp/en/works/mitsui-garden-hotel-prana-tokyo-bay/"
);


// ricco_sakae_bldg
createImageMarker(
    [35.166732, 136.906701],
    "images/ricco_sakae_bldg.jpg",
    "https://www.jma.co.jp/en/works/ricco-sakae-bldg/"
);


// takamatsu_sunport_government_building
createImageMarker(
    [34.3523565, 134.0457905],
    "images/takamatsu_sunport_government_building.jpg",
    "https://www.jma.co.jp/en/works/takamatsu-sunport-government-building/"
);


// park_tower_shinagawa_bayward_2
createImageMarker(
    [35.634113, 139.747971],
    "images/park_tower_shinagawa_bayward_2.jpg",
    "https://www.jma.co.jp/en/works/park-tower-shinagawa-bayward-2/"
);


// the_jewels_of_aoyama
createImageMarker(
    [35.6631997, 139.7153023],
    "images/the_jewels_of_aoyama.jpg",
    "https://www.jma.co.jp/en/works/the-jewels-of-aoyama/"
);


// urbane_namba_west_2
createImageMarker(
    [34.663896, 135.494256],
    "images/urbane_namba_west_2.jpg",
    "https://www.jma.co.jp/en/works/urbane-namba-west-2/"
);


// mitsui_memorial_museum
createImageMarker(
    [35.686818, 139.7724942],
    "images/mitsui_memorial_museum.jpg",
    "https://www.jma.co.jp/en/works/mitsui-memorial-museum/"
);


// kyushu_university_west_zone_3_west_zone_4
createImageMarker(
    [33.595792, 130.217077],
    "images/kyushu_university_west_zone_3_west_zone_4.jpg",
    "https://www.jma.co.jp/en/works/kyushu-university-west-zone-3-west-zone-4/"
);


// brillia_ginza_id
createImageMarker(
    [35.6715899, 139.7699459],
    "images/brillia_ginza_id.jpg",
    "https://www.jma.co.jp/en/works/brillia-ginza-id/"
);


// brillia_cho_fu_kokuryo
createImageMarker(
    [35.6479582, 139.5664801],
    "images/brillia_cho_fu_kokuryo.jpg",
    "https://www.jma.co.jp/en/works/brillia-cho-fu-kokuryo/"
);


// passenger_terminal_2_tokyo_international_airport_haneda
createImageMarker(
    [35.5521459, 139.789946],
    "images/passenger_terminal_2_tokyo_international_airport_haneda.jpg",
    "https://www.jma.co.jp/en/works/passenger-terminal-2-tokyo-international-airport-haneda/"
);


// the_national_museum_of_art_osaka
createImageMarker(
    [34.6918405, 135.4920244],
    "images/the_national_museum_of_art_osaka.jpg",
    "https://www.jma.co.jp/en/works/the-national-museum-of-art-osaka/"
);


// nihonbashi_mitsui_tower
createImageMarker(
    [35.686818, 139.7724942],
    "images/nihonbashi_mitsui_tower.jpg",
    "https://www.jma.co.jp/en/works/nihonbashi-mitsui-tower/"
);


// park_city_sendai_itsutsubashi
createImageMarker(
    [38.253856, 140.882909],
    "images/park_city_sendai_itsutsubashi.jpg",
    "https://www.jma.co.jp/en/works/park-city-sendai-itsutsubashi/"
);


// aoyama_park_tower
createImageMarker(
    [35.6624618, 139.7052285],
    "images/aoyama_park_tower.jpg",
    "https://www.jma.co.jp/en/works/aoyama-park-tower/"
);


// kawada_cho_confo_garden
createImageMarker(
    [35.6962042, 139.7194891],
    "images/kawada_cho_confo_garden.jpg",
    "https://www.jma.co.jp/en/works/kawada-cho-confo-garden/"
);


// makuhari_park_tower
createImageMarker(
    [35.6434903, 140.0459888],
    "images/makuhari_park_tower.jpg",
    "https://www.jma.co.jp/en/works/makuhari-park-tower/"
);


// nakanoshima_mitsui_building
createImageMarker(
    [34.6932404, 135.4941686],
    "images/nakanoshima_mitsui_building.jpg",
    "https://www.jma.co.jp/en/works/nakanoshima-mitsui-building/"
);


// oval_court_osaki
createImageMarker(
    [35.623349, 139.7294749],
    "images/oval_court_osaki.jpg",
    "https://www.jma.co.jp/en/works/oval-court-osaki/"
);


// nhk_osaka_broadcasting_station_and_osaka_museum_of_history
createImageMarker(
    [34.6827419, 135.5200888],
    "images/nhk_osaka_broadcasting_station_and_osaka_museum_of_history.jpg",
    "https://www.jma.co.jp/en/works/nhk-osaka-broadcasting-station-and-osaka-museum-of-history/"
);


// kyushu_university_new_campus_master_planning_the_department_of_technology_area
createImageMarker(
    [33.6266584, 130.4250445],
    "images/kyushu_university_new_campus_master_planning_the_department_of_technology_area.jpg",
    "https://www.jma.co.jp/en/works/kyushu-university-new-campus-master-planning-the-department-of-technology-area/"
);


// kurayoshi_park_square
createImageMarker(
    [35.4318017, 133.8362322],
    "images/kurayoshi_park_square.jpg",
    "https://www.jma.co.jp/en/works/kurayoshi-park-square/"
);


// park_court_ebisu_hill_top_residence
createImageMarker(
    [35.642894, 139.710646],
    "images/park_court_ebisu_hill_top_residence.jpg",
    "https://www.jma.co.jp/en/works/park-court-ebisu-hill-top-residence/"
);


// atago_green_hills
createImageMarker(
    [35.6620544, 139.7490002],
    "images/atago_green_hills.jpg",
    "https://www.jma.co.jp/en/works/atago-green-hills/"
);


// biwako_hotel_hama_otsu_aqus
createImageMarker(
    [35.0103244, 135.8682009],
    "images/biwako_hotel_hama_otsu_aqus.jpg",
    "https://www.jma.co.jp/en/works/biwako-hotel-hama-otsu-aqus/"
);


// international_productivity_center
createImageMarker(
    [35.2585789, 139.6076724],
    "images/international_productivity_center.jpg",
    "https://www.jma.co.jp/en/works/international-productivity-center/"
);


// ntt_shinjuku_headquarters
createImageMarker(
    [35.6834992, 139.6880208],
    "images/ntt_shinjuku_headquarters.jpg",
    "https://www.jma.co.jp/en/works/ntt-shinjuku-headquarters/"
);


// seahawk_hotel_resort_former_name
createImageMarker(
    [33.5947537, 130.3596601],
    "images/seahawk_hotel_resort_former_name.jpg",
    "https://www.jma.co.jp/en/works/seahawk-hotel-resort-former-name/"
);

// kita urawa
createImageMarker(
    [35.8789954, 139.6396159],
    "images/oukas_kita_urawa.jpg",
    "https://www.jma.co.jp/en/works/oukas-urawa-harigaya/"
);

// wakaba sanchome park
createImageMarker(
    [35.6450988, 140.049184],
    "images/wakaba_sanchome_park.jpg",
    "https://www.jma.co.jp/en/works/wakaba-3-chome-park/"
);