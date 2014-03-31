var a = {
    ac: {
        key: 'AC',
        zipex: 'ASCN 1ZZ',
        id: 'data/AC',
        zip: 'ASCN 1ZZ',
        name: 'ASCENSION ISLAND'
    },
    ad: {
        lang: 'ca',
        upper: 'S',
        sub_zipexs: 'AD500~AD100~AD200~AD700~AD400~AD300~AD600',
        zipex: 'AD100,AD501,AD700',
        name: 'ANDORRA',
        zip: 'AD[1-7]0\\d',
        require: 'AS',
        fmt: '%N%n%O%n%A%n%Z %S',
        state_name_type: 'parish',
        languages: 'ca',
        sub_keys: 'ANDORRA LA VELLA~CANILLO~ENCAMP~ESCALDES ENGORDANY~LAMASSANA~ORDINO~SANT JULIA DE LORIA',
        key: 'AD',
        sub_isoids: '07~02~03~08~04~05~06',
        posturl: 'http://www.correos.es/comun/CodigosPostales/1010_s-CodPostal.asp?Provincia=',
        id: 'data/AD',
        sub_names: 'Andorra la Vella~Canillo~Encamp~Escaldes Engordany~Lamassana~Ordino~Sant Julia de Loria',
        sub_zips: 'AD50[01]~AD10[01]~AD20[01]~AD70[01]~AD40[01]~AD30[01]~AD60[01]'
    },
    ae: {
        fmt: '%N%n%O%n%A%n%C',
        require: 'AC',
        id: 'data/AE',
        key: 'AE',
        name: 'UNITED ARAB EMIRATES'
    },
    af: {
        zipex: '1001,2601,3801',
        posturl: 'http://afghanpost.gov.af/Postal%20Code/',
        zip: '\\d{4}',
        key: 'AF',
        id: 'data/AF',
        name: 'AFGHANISTAN'
    },
    ag: {
        require: 'A',
        id: 'data/AG',
        key: 'AG',
        name: 'ANTIGUA AND BARBUDA'
    },
    ai: {
        key: 'AI',
        zipex: '2640',
        id: 'data/AI',
        zip: '2640',
        name: 'ANGUILLA'
    },
    al: {
        key: 'AL',
        zipex: '1001,1017,3501',
        id: 'data/AL',
        zip: '\\d{4}',
        name: 'ALBANIA'
    },
    am: {
        lang: 'hy',
        sub_zipexs: '0201,0514~0601,0823~0901,1149~1201,1626~0000,0099~1701,2117~2201,2506~2601,3126~3201,3519~3601,3810~3901,4216',
        zipex: '375010,0002,0010',
        name: 'ARMENIA',
        zip: '(37)?\\d{4}',
        fmt: '%N%n%O%n%A%n%Z%n%C%n%S',
        languages: 'hy',
        lfmt: '%N%n%O%n%A%n%Z%n%C%n%S',
        sub_lnames: 'Aragatsotn~Ararat~Armavir~Gegharkunik~Yerevan~Lori~Kotayk~Shirak~Syunik~Vayots Dzor~Tavush',
        sub_keys: 'Արագածոտն~Արարատ~Արմավիր~Գեղարքունիք~Երևան~Լոռի~Կոտայք~Շիրակ~Սյունիք~Վայոց ձոր~Տավուշ',
        key: 'AM',
        sub_isoids: 'AG~AR~AV~GR~ER~LO~KT~SH~SU~VD~TV',
        id: 'data/AM',
        sub_zips: '0[2-5]~0[6-8]~09|1[01]~1[2-6]~00~1[7-9]|2[01]~2[2-5]~2[6-9]|3[01]~3[2-5]~3[6-8]~39|4[0-2]'
    },
    an: {
        id: 'data/AN',
        key: 'AN',
        name: 'NETHERLANDS ANTILLES'
    },
    ao: {
        id: 'data/AO',
        key: 'AO',
        name: 'ANGOLA'
    },
    aq: {
        id: 'data/AQ',
        key: 'AQ',
        name: 'ANTARCTICA'
    },
    ar: {
        lang: 'es',
        upper: 'ACZ',
        zipex: 'C1070AAM,C1000WAM,B1000TBU,X5187XAB',
        name: 'ARGENTINA',
        zip: '([A-HJ-NP-Z])?\\d{4}([A-Z]{3})?',
        fmt: '%N%n%O%n%A%n%Z %C%n%S',
        state_name_type: 'state',
        languages: 'es',
        sub_keys: 'Buenos Aires~Capital Federal~Catamarca~Chaco~Chubut~Córdoba~Corrientes~Entre Ríos~Formosa~Jujuy~La Pampa~La Rioja~Mendoza~Misiones~Neuquén~Río Negro~Salta~San Juan~San Luis~Santa Cruz~Santa Fe~Santiago del Estero~Tierra del Fuego~Tucumán',
        key: 'AR',
        sub_isoids: 'B~C~K~H~U~X~W~E~P~Y~L~F~M~N~Q~R~A~J~D~Z~S~G~V~T',
        posturl: 'http://www.correoargentino.com.ar/cpa',
        id: 'data/AR',
        sub_names: 'Buenos Aires~Capital Federal~Catamarca~Chaco~Chubut~Córdoba~Corrientes~Entre Ríos~Formosa~Jujuy~La Pampa~La Rioja~Mendoza~Misiones~Neuquén~Río Negro~Salta~San Juan~San Luis~Santa Cruz~Santa Fe~Santiago del Estero~Tierra del Fuego~Tucumán',
        sub_zips: 'B?[1-36-8]~C?1~K?[45]~H?3~U?[89]~X?[235-8]~W?3~E?[1-3]~P?[37]~Y?4~L?[3568]~F?5~M?[56]~N?3~Q?[38]~R?[89]~A?[34]~J?5~D?[4-6]~Z?[89]~S?[2368]~G?[2-5]~V?9~T?[45]'
    },
    as: {
        upper: 'ACNOS',
        zipex: '96799',
        name: 'AMERICAN SAMOA',
        zip: '96799',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'AS',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/AS'
    },
    at: {
        zipex: '1010,3741',
        name: 'AUSTRIA',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/AT',
        key: 'AT',
        posturl: 'http://www.post.at/post_subsite_postleitzahlfinder.php',
        fmt: '%O%n%N%n%A%n%Z %C'
    },
    au: {
        lang: 'en',
        upper: 'CS',
        sub_zipexs: '0200,0299:2540:2600,2618:2620:2900,2999~1000,1999:2000,2999:3500:3585:3586:3644:3707~0800,0999~4000,4999:9000,9999~5000,5999:0872~7000,7999~3000,3999:8000,8999~6000,6999:0872',
        zipex: '2060,3171,6430,4000,4006,3001',
        name: 'AUSTRALIA',
        zip: '\\d{4}',
        require: 'ACSZ',
        fmt: '%O%n%N%n%A%n%C %S %Z',
        state_name_type: 'state',
        languages: 'en',
        sub_keys: 'ACT~NSW~NT~QLD~SA~TAS~VIC~WA',
        key: 'AU',
        posturl: 'http://www1.auspost.com.au/postcodes/',
        id: 'data/AU',
        sub_names: 'Australian Capital Territory~New South Wales~Northern Territory~Queensland~South Australia~Tasmania~Victoria~Western Australia',
        sub_zips: '29|2540|260|261[0-8]|02|2620~1|2[0-57-8]|26[2-9]|261[189]|3500|3585|3586|3644|3707~0[89]~[49]~5|0872~7~[38]~6|0872'
    },
    aw: {
        id: 'data/AW',
        key: 'AW',
        name: 'ARUBA'
    },
    ax: {
        postprefix: 'AX-',
        zipex: '22150,22550,22240,22710,22270,22730,22430',
        name: 'FINLAND',
        zip: '22\\d{3}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%nAX-%Z %C%nÅLAND',
        key: 'AX',
        posturl: 'http://www.posten.ax/department.con?iPage=123',
        id: 'data/AX'
    },
    az: {
        postprefix: 'AZ ',
        zipex: '1000',
        name: 'AZERBAIJAN',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%nAZ %Z %C',
        key: 'AZ',
        id: 'data/AZ'
    },
    ba: {
        zipex: '71000',
        posturl: 'http://www.post.ba/postanski_brojevi.php',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'BA',
        id: 'data/BA',
        name: 'BOSNIA AND HERZEGOVINA'
    },
    bb: {
        zipex: 'BB23026,BB22025',
        posturl: 'http://barbadospostal.com/zipcodes.html',
        zip: '(BB\\d{5})?',
        state_name_type: 'parish',
        key: 'BB',
        id: 'data/BB',
        name: 'BARBADOS'
    },
    bd: {
        zipex: '1340,1000',
        posturl: 'http://www.bangladeshpost.gov.bd/PostCode.asp',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%C - %Z',
        key: 'BD',
        id: 'data/BD',
        name: 'BANGLADESH'
    },
    be: {
        zipex: '4000,1000',
        name: 'BELGIUM',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/BE',
        key: 'BE',
        posturl: 'http://www.post.be/site/nl/residential/customerservice/search/postal_codes.html',
        fmt: '%O%n%N%n%A%n%Z %C'
    },
    bf: {
        fmt: '%N%n%O%n%A%n%C %X',
        id: 'data/BF',
        key: 'BF',
        name: 'BURKINA FASO'
    },
    bg: {
        zipex: '1000,1700',
        posturl: 'http://www.bgpost.bg/?cid=5',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'BG',
        id: 'data/BG',
        name: 'BULGARIA (REP.)'
    },
    bh: {
        zipex: '317',
        name: 'BAHRAIN',
        zip: '((\\d|1[0-2])\\d{2})?',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'BH',
        id: 'data/BH'
    },
    bi: {
        id: 'data/BI',
        key: 'BI',
        name: 'BURUNDI'
    },
    bj: {
        upper: 'AC',
        id: 'data/BJ',
        key: 'BJ',
        name: 'BENIN'
    },
    bl: {
        upper: 'ACX',
        zipex: '97100',
        name: 'SAINT BARTHELEMY',
        zip: '9[78][01]\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'BL',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/BL'
    },
    bm: {
        zipex: 'FL 07,HM GX,HM 12',
        posturl: 'http://www.landvaluation.bm/',
        zip: '[A-Z]{2}[ ]?[A-Z0-9]{2}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'BM',
        id: 'data/BM',
        name: 'BERMUDA'
    },
    bn: {
        zipex: 'BT2328,KA1131,BA1511',
        posturl: 'http://www.post.gov.bn/index.php/extensions/postcode-guide',
        zip: '[A-Z]{2}[ ]?\\d{4}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'BN',
        id: 'data/BN',
        name: 'BRUNEI DARUSSALAM'
    },
    bo: {
        upper: 'AC',
        id: 'data/BO',
        key: 'BO',
        name: 'BOLIVIA'
    },
    br: {
        lang: 'pt',
        upper: 'CS',
        sub_zipexs: '69900-000,69999-999~57000-000,57999-999~68900-000,68999-999~69000-000,69299-999:69400-000,69899-999~40000-000,48999-999~60000-000,63999-999~70000-000,72799-999:73000-000,73699-999~29000-000,29999-999~72800-000,72999-999:73700-000,76999-999~65000-000,65999-999~78000-000,78899-999~79000-000,79999-999~30000-000,39999-999~66000-000,68899-999~58000-000,58999-999~80000-000,87999-999~50000-000,56999-999~64000-000,64999-999~20000-000,28999-999~59000-000,59999-999~90000-000,99999-999~76800-000,78900-000,78999-999~69300-000,69399-999~88000-000,89999-999~01000-000,09999-999:11000-000,19999-999~49000-000,49999-999~77000-000,77999-999',
        zipex: '40301-110,70002-900',
        name: 'BRAZIL',
        zip: '\\d{5}[\\-]?\\d{3}',
        sub_mores: 'true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true',
        require: 'ASCZ',
        fmt: '%O%n%N%n%A%n%C-%S%n%Z',
        state_name_type: 'state',
        languages: 'pt',
        sub_keys: 'AC~AL~AP~AM~BA~CE~DF~ES~GO~MA~MT~MS~MG~PA~PB~PR~PE~PI~RJ~RN~RS~RO~RR~SC~SP~SE~TO',
        key: 'BR',
        posturl: 'http://www.correios.com.br/servicos/cep/cep_default.cfm',
        id: 'data/BR',
        sub_names: 'Acre~Alagoas~Amapá~Amazonas~Bahia~Ceará~Distrito Federal~Espírito Santo~Goiás~Maranhão~Mato Grosso~Mato Grosso do Sul~Minas Gerais~Pará~Paraíba~Paraná~Pernambuco~Piauí~Rio de Janeiro~Rio Grande do Norte~Rio Grande do Sul~Rondônia~Roraima~Santa Catarina~São Paulo~Sergipe~Tocantins',
        sub_zips: '699~57~689~69[0-24-8]~4[0-8]~6[0-3]~7[0-1]|72[0-7]|73[0-6]~29~72[89]|73[7-9]|7[4-6]~65~78[0-8]~79~3~6[6-7]|68[0-8]~58~8[0-7]~5[0-6]~64~2[0-8]~59~9~76[89]|789~693~8[89]~[01][1-9]~49~77'
    },
    bs: {
        lang: 'en',
        name: 'BAHAMAS',
        fmt: '%N%n%O%n%A%n%C, %S',
        state_name_type: 'island',
        languages: 'en',
        sub_keys: 'ABACO~ACKLINS~ANDROS~BERRY ISLANDS~BIMINI~CAT ISLAND~CROOKED ISLAND~ELEUTHERA~EXUMA~GRAND BAHAMA~HARBOUR ISLAND~INAGUA~LONG ISLAND~MAYAGUANA~N.P.~RAGGED ISLAND~RUM CAY~SAN SALVADOR~SPANISH WELLS',
        key: 'BS',
        sub_isoids: '~AK~~BY~BI~CI~~~EX~~HI~IN~LI~MG~~RI~RC~SS~SW',
        id: 'data/BS',
        sub_names: 'Abaco Islands~Acklins~Andros Island~Berry Islands~Bimini~Cat Island~Crooked Island~Eleuthera~Exuma and Cays~Grand Bahama~Harbour Island~Inagua~Long Island~Mayaguana~New Providence~Ragged Island~Rum Cay~San Salvador~Spanish Wells'
    },
    bt: {
        zipex: '11001,31101,35003',
        posturl: 'http://www.bhutanpost.com.bt/postcode/postcode.php',
        zip: '\\d{5}',
        key: 'BT',
        id: 'data/BT',
        name: 'BHUTAN'
    },
    bv: {
        id: 'data/BV',
        key: 'BV',
        name: 'BOUVET ISLAND'
    },
    bw: {
        id: 'data/BW',
        key: 'BW',
        name: 'BOTSWANA'
    },
    by: {
        zipex: '20050,223016,225860,220050',
        posturl: 'http://zip.belpost.by',
        zip: '\\d{6}',
        fmt: '%S%n%Z %C %X%n%A%n%O%n%N',
        key: 'BY',
        id: 'data/BY',
        name: 'BELARUS'
    },
    bz: {
        id: 'data/BZ',
        key: 'BZ',
        name: 'BELIZE'
    },
    ca: {
        lang: 'en',
        upper: 'ACNOSZ',
        zipex: 'H3Z 2Y7,V8X 3X4,T0L 1K0,T0H 1A0,K1A 0B1',
        name: 'CANADA',
        zip: '[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ ]?\\d[ABCEGHJ-NPRSTV-Z]\\d',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        languages: 'en~fr',
        sub_keys: 'AB~BC~MB~NB~NL~NT~NS~NU~ON~PE~QC~SK~YT',
        key: 'CA',
        posturl: 'http://www.canadapost.ca/cpotools/apps/fpc/personal/findByCity?execution=e2s1',
        id: 'data/CA',
        sub_names: 'Alberta~British Columbia~Manitoba~New Brunswick~Newfoundland and Labrador~Northwest Territories~Nova Scotia~Nunavut~Ontario~Prince Edward Island~Quebec~Saskatchewan~Yukon',
        sub_zips: 'T~V~R~E~A~X0E|X0G|X1A~B~X0A|X0B|X0C~K|L|M|N|P~C~G|H|J|K1A~S|R8A~Y'
    },
    cc: {
        upper: 'CS',
        name: 'COCOS (KEELING) ISLANDS',
        zip: '6799',
        fmt: '%O%n%N%n%A%n%C %S %Z',
        key: 'CC',
        id: 'data/CC'
    },
    cd: {
        fmt: '%N%n%O%n%A%n%C %X',
        id: 'data/CD',
        key: 'CD',
        name: 'CONGO (DEM. REP.)'
    },
    cf: {
        id: 'data/CF',
        key: 'CF',
        name: 'CENTRAL AFRICAN REPUBLIC'
    },
    cg: {
        id: 'data/CG',
        key: 'CG',
        name: 'CONGO (REP.)'
    },
    ch: {
        lang: 'de',
        upper: '',
        zipex: '2544,1211,1556,3030',
        name: 'SWITZERLAND',
        zip: '\\d{4}',
        require: 'ACZ',
        postprefix: 'CH-',
        languages: 'de~fr~it',
        sub_keys: 'AG~AR~AI~BL~BS~BE~FR~GE~GL~GR~JU~LU~NE~NW~OW~SH~SZ~SO~SG~TI~TG~UR~VD~VS~ZG~ZH',
        key: 'CH',
        fmt: '%O%n%N%n%A%nCH-%Z %C',
        posturl: 'http://www.post.ch/db/owa/pv_plz_pack/pr_main',
        id: 'data/CH',
        sub_names: 'Aargau~Appenzell Ausserrhoden~Appenzell Innerrhoden~Basel-Landschaft~Basel-Stadt~Bern~Freiburg~Genf~Glarus~Graubünden~Jura~Luzern~Neuenburg~Nidwalden~Obwalden~Schaffhausen~Schwyz~Solothurn~St. Gallen~Tessin~Thurgau~Uri~Waadt~Wallis~Zug~Zürich'
    },
    ci: {
        fmt: '%N%n%O%n%X %A %C %X',
        id: 'data/CI',
        key: 'CI',
        name: 'COTE D\'IVOIRE'
    },
    ck: {
        key: 'CK',
        fmt: '%N%n%O%n%A%n%C %Z',
        id: 'data/CK',
        zip: '\\d{4}',
        name: 'COOK ISLANDS'
    },
    cl: {
        lang: 'es',
        zipex: '8340457,8720019,1230000,8329100,8720019',
        name: 'CHILE',
        zip: '\\d{7}',
        sub_mores: 'true~true~true~true~true~true~true~true~true~true~true~true~true~true~true',
        fmt: '%N%n%O%n%A%n%Z %C%n%S',
        state_name_type: 'state',
        languages: 'es',
        sub_keys: 'II Región de Antofagasta~IX Región de la Araucanía~XV Región de Arica y Parinacota~III Región de Atacama~XI Región Aysén del General Carlos Ibáñez del Campo~VIII Región del Biobío~IV Región de Coquimbo~VI Región del Libertador General Bernardo O\'Higgins~X Región de Los Lagos~XIV Región de Los Ríos~XII Región de Magallanes y de la Antártica Chilena~VII Región del Maule~Región Metropolitana de Santiago~I Región de Tarapacá~V Región de Valparaíso',
        key: 'CL',
        sub_isoids: 'AN~AR~AP~AT~AI~BI~CO~LI~LL~LR~MA~ML~RM~TA~VS',
        posturl: 'http://www.correos.cl/SitePages/home.aspx',
        id: 'data/CL',
        sub_names: 'Antofagasta~Araucanía~Arica y Parinacota~Atacama~Aysén del General Carlos Ibáñez del Campo~Biobío~Coquimbo~Libertador General Bernardo O\'Higgins~Los Lagos~Los Ríos~Magallanes y de la Antártica Chilena~Maule~Metropolitana de Santiago~Tarapacá~Valparaíso'
    },
    cm: {
        id: 'data/CM',
        key: 'CM',
        name: 'CAMEROON'
    },
    cn: {
        lang: 'zh-hans',
        upper: 'S',
        sub_xrequires: '~A~~~~~~~~~~~~~~~~~~~~~~~~~~~~ACS~~~~',
        zipex: '266033,317204,100096,100808',
        name: 'P.R. CHINA',
        zip: '\\d{6}',
        key: 'CN',
        sub_mores: 'true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true',
        fmtCharsets: 'GB2312',
        require: 'ACSZ',
        fmt: '%Z%n%S%C%D%n%A%n%O%n%N',
        languages: 'zh-hans',
        lfmt: '%N%n%O%n%A, %D%n%C%n%S, %Z',
        sub_lnames: 'Anhui Sheng~Macau~Beijing Shi~Fujian Sheng~Gansu Sheng~Guangdong Sheng~Guangxi~Guizhou Sheng~Hainan Sheng~Hebei Sheng~Henan Sheng~Heilongjiang Sheng~Hubei Sheng~Hunan Sheng~Jilin Sheng~Jiangsu Sheng~Jiangxi Sheng~Liaoning Sheng~Nei Mongol~Ningxia~Qinghai Sheng~Shandong Sheng~Shanxi Sheng~Shaanxi Sheng~Shanghai Shi~Sichuan Sheng~Taiwan~Tianjin Shi~Xizang~Hong Kong~Xinjiang~Yunnan Sheng~Zhejiang Sheng~Chongqing Shi',
        sub_keys: '安徽省~澳门~北京市~福建省~甘肃省~广东省~广西~贵州省~海南省~河北省~河南省~黑龙江省~湖北省~湖南省~吉林省~江苏省~江西省~辽宁省~内蒙古~宁夏~青海省~山东省~山西省~陕西省~上海市~四川省~台湾~天津市~西藏~香港~新疆~云南省~浙江省~重庆市',
        sub_xzips: '~999078~~~~~~~~~~~~~~~~~~~~~~~~~\\d{3}(\\d{2})?~~~999077~~~~',
        sub_isoids: '34~92~11~35~62~44~45~52~46~13~41~23~42~43~22~32~36~21~15~64~63~37~14~61~31~51~71~12~54~91~65~53~33~50',
        sub_disputeds: '~~~~~~~~~~~~~~~~~~~~~~~~~~true~~~~~~~',
        posturl: 'http://www.cpdc.com.cn/postcdQueryAction.do?reqCode=gotoQueryPostAddr',
        id: 'data/CN',
        hasDisputed: 'true'
    },
    co: {
        zipex: '111221,130001,760011',
        posturl: 'http://www.codigopostal4-72.com.co/codigosPostales/',
        zip: '\\d{6}',
        fmt: '%N%n%O%n%A%n%C, %S',
        key: 'CO',
        id: 'data/CO',
        name: 'COLOMBIA'
    },
    cr: {
        zipex: '1000,2010,1001',
        posturl: 'https://www.correos.go.cr/nosotros/codigopostal/busqueda.html',
        zip: '\\d{4,5}|\\d{3}-\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'CR',
        id: 'data/CR',
        name: 'COSTA RICA'
    },
    cs: {
        zipex: '11001',
        name: 'SERBIA AND MONTENEGRO',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'CS',
        id: 'data/CS'
    },
    cv: {
        lang: 'pt',
        zipex: '7600',
        name: 'CAPE VERDE',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C%n%S',
        state_name_type: 'island',
        languages: 'pt',
        sub_keys: 'BOA VISTA~BRAVA~FOGO~MAIO~SAL~SANTIAGO~SANTO ANTÃO~SÃO NICOLAU~SÃO VICENTE',
        key: 'CV',
        sub_isoids: 'BV~BR~~MA~SL~~~SN~SV',
        id: 'data/CV'
    },
    cx: {
        upper: 'CS',
        name: 'CHRISTMAS ISLAND',
        zip: '6798',
        fmt: '%O%n%N%n%A%n%C %S %Z',
        key: 'CX',
        id: 'data/CX'
    },
    cy: {
        zipex: '2008,3304,1900',
        name: 'CYPRUS',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'CY',
        id: 'data/CY'
    },
    cz: {
        zipex: '100 00,251 66,530 87,110 00,225 99',
        posturl: 'http://psc.ceskaposta.cz/CleanForm.action',
        zip: '\\d{3}[ ]?\\d{2}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'CZ',
        id: 'data/CZ',
        name: 'CZECH REP.'
    },
    de: {
        zipex: '26133,53225',
        name: 'GERMANY',
        zip: '\\d{5}',
        require: 'ACZ',
        id: 'data/DE',
        key: 'DE',
        posturl: 'http://www.postdirekt.de/plzserver/',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    dj: {
        id: 'data/DJ',
        key: 'DJ',
        name: 'DJIBOUTI'
    },
    dk: {
        zipex: '8660,1566',
        name: 'DENMARK',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/DK',
        key: 'DK',
        posturl: 'http://www.postdanmark.dk/da/Privat/Kundeservice/postnummerkort/Sider/Find-postnummer.aspx',
        fmt: '%O%n%N%n%A%n%Z %C'
    },
    dm: {
        id: 'data/DM',
        key: 'DM',
        name: 'DOMINICA'
    },
    do: {
        zipex: '11903,10101',
        posturl: 'http://inposdom.gob.do/servicios/codigo-postal.html#buscar_codigo',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'DO',
        id: 'data/DO',
        name: 'DOMINICAN REP.'
    },
    dz: {
        zipex: '40304,16027',
        name: 'ALGERIA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'DZ',
        id: 'data/DZ'
    },
    ec: {
        upper: 'CZ',
        zipex: 'EC090112,090105,H0103C,P0133B,P0133A,P0133V',
        name: 'ECUADOR',
        zip: '([A-Z]\\d{4}[A-Z]|(?:[A-Z]{2})?\\d{6})?',
        fmt: '%N%n%O%n%A%n%Z%n%C',
        key: 'EC',
        id: 'data/EC'
    },
    ee: {
        zipex: '69501,11212,1001',
        posturl: 'http://www.post.ee/?op=sihtnumbriotsing',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'EE',
        id: 'data/EE',
        name: 'ESTONIA'
    },
    eg: {
        lang: 'ar',
        sub_zipexs: '81000~71000~83000~21000,23000~41000~84000~22000~12000~44000~43000~35000~31000~63000~11000~13000~32000~61000~72000~62000~42000~46000~34000~82000~45000~83000~33000~51000',
        zipex: '12411,11599',
        name: 'EGYPT',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C%n%S%n%Z',
        languages: 'ar',
        lfmt: '%N%n%O%n%A%n%C%n%S%n%Z',
        sub_lnames: 'Aswan~Asyut~Luxor~Alexandria~Ismailia~Red Sea~Beheira~Giza~Dakahlia~Suez~Al Sharqia~Gharbia~Faiyum~Cairo~Qalyubia~Monufia~Minya~New Valley~Beni Suef~Port Said~South Sinai~Damietta~Sohag~North Sinai~Qena~Kafr el-Sheikh~Matruh',
        sub_keys: 'أسوان~أسيوط~الأقصر~الإسكندرية~الإسماعيلية~البحر الأحمر~البحيرة~الجيزة~الدقهلية~السويس~الشرقية~الغربية~الفيوم~القاهرة~القليوبية~المنوفية~المنيا~الوادي الجديد~بني سويف~بورسعيد~جنوب سيناء~دمياط~سوهاج~شمال سيناء~قنا~كفر الشيخ~مطروح',
        key: 'EG',
        sub_isoids: 'ASN~AST~LX~ALX~IS~BA~BH~GZ~DK~SUZ~SHR~GH~FYM~C~KB~MNF~MN~WAD~BNS~PTS~JS~DT~SHG~SIN~KN~KFS~MT',
        id: 'data/EG',
        dir: 'rtl',
        sub_zips: '81~71~83~2[13]~41~84~22~12~44~43~35~31~63~11~13~32~61~72~62~42~46~34~82~45~83~33~51'
    },
    eh: {
        id: 'data/EH',
        key: 'EH',
        name: 'WESTERN SAHARA'
    },
    er: {
        id: 'data/ER',
        key: 'ER',
        name: 'ERITREA'
    },
    es: {
        lang: 'es',
        upper: 'CS',
        zipex: '28039,28300,28070',
        name: 'SPAIN',
        zip: '\\d{5}',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%Z %C %S',
        languages: 'es',
        sub_keys: 'ÁLAVA~ALBACETE~ALICANTE~ALMERIA~ASTURIAS~ÁVILA~BADAJOZ~BARCELONA~BURGOS~CÁCERES~CÁDIZ~CANTABRIA~CASTELLÓN~CEUTA~CIUDAD REAL~CÓRDOBA~CORUÑA, A~CUENCA~GIRONA~GRANADA~GUADALAJARA~GUIPÚZCOA~HUELVA~HUESCA~ISLAS BALEARES~JAÉN~LEÓN~LLEIDA~LUGO~MADRID~MÁLAGA~MELILLA~MURCIA~NAVARRA~OURENSE~PALENCIA~PALMAS, LAS~PONTEVEDRA~RIOJA, LA~SALAMANCA~SANTA CRUZ DE TENERIFE~SEGOVIA~SEVILLA~SORIA~TARRAGONA~TERUEL~TOLEDO~VALENCIA~VALLADOLID~VIZCAYA~ZAMORA~ZARAGOZA',
        key: 'ES',
        sub_isoids: 'VI~AB~A~AL~O~AV~BA~B~BU~CC~CA~S~CS~CE~CR~CO~C~CU~GI~GR~GU~SS~H~HU~PM~J~LE~L~LU~M~MA~ML~MU~NA~OR~P~GC~PO~LO~SA~TF~SG~SE~SO~T~TE~TO~V~VA~BI~ZA~Z',
        posturl: 'http://www.correos.es/contenido/13-MenuRec2/04-MenuRec24/1010_s-CodPostal.asp',
        id: 'data/ES',
        sub_zips: '01~02~03~04~33~05~06~08~09~10~11~39~12~51~13~14~15~16~17~18~19~20~21~22~07~23~24~25~27~28~29~52~30~31~32~34~35~36~26~37~38~40~41~42~43~44~45~46~47~48~49~50'
    },
    et: {
        zipex: '1000',
        name: 'ETHIOPIA',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'ET',
        id: 'data/ET'
    },
    fi: {
        postprefix: 'FI-',
        zipex: '00550,00011',
        name: 'FINLAND',
        zip: '\\d{5}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%nFI-%Z %C',
        key: 'FI',
        posturl: 'http://www.verkkoposti.com/e3/postinumeroluettelo',
        id: 'data/FI'
    },
    fj: {
        id: 'data/FJ',
        key: 'FJ',
        name: 'FIJI'
    },
    fk: {
        upper: 'CZ',
        zipex: 'FIQQ 1ZZ',
        name: 'FALKLAND ISLANDS (MALVINAS)',
        zip: 'FIQQ 1ZZ',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'FK',
        id: 'data/FK'
    },
    fm: {
        upper: 'ACNOS',
        zipex: '96941,96944',
        name: 'MICRONESIA (Federated State of)',
        zip: '(9694[1-4])([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'FM',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/FM'
    },
    fo: {
        postprefix: 'FO',
        zipex: '100',
        name: 'FAROE ISLANDS',
        zip: '\\d{3}',
        fmt: '%N%n%O%n%A%nFO%Z %C',
        key: 'FO',
        posturl: 'http://www.postur.fo/',
        id: 'data/FO'
    },
    fr: {
        upper: 'CX',
        zipex: '33380,34092,33506',
        name: 'FRANCE',
        zip: '\\d{2}[ ]?\\d{3}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'FR',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/FR'
    },
    ga: {
        id: 'data/GA', 
        key: 'GA', 
        name: 'GABON'
    },
    gb: {
        upper: 'CZ',
        zipex: 'EC1Y 8SY,GIR 0AA,M2 5BQ,M34 4AB,CR0 2YR,DN16 9AA,W1A 4ZZ,EC1A 1HQ,OX14 4PG,BS18 8HF,NR25 7HG,RH6 OHP,BH23 6AA,B6 5BA,RH6 0HP,SO23 9AP,PO1 3AX,BFPO 61',
        name: 'UNITED KINGDOM',
        zip: 'GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\\d{1,4}',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%C%n%S%n%Z',
        state_name_type: 'county',
        key: 'GB',
        posturl: 'http://www.royalmail.com/postcode-finder',
        id: 'data/GB'
    },
    gd: {
        id: 'data/GD',
        key: 'GD',
        name: 'GRENADA (WEST INDIES)'
    },
    ge: {
        zipex: '0101',
        posturl: 'http://www.georgianpost.ge/index.php?page=10',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'GE',
        id: 'data/GE',
        name: 'GEORGIA'
    },
    gf: {
        upper: 'ACX',
        zipex: '97300',
        name: 'FRENCH GUIANA',
        zip: '9[78]3\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'GF',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/GF'
    },
    gg: {
        upper: 'CZ',
        zipex: 'GY1 1AA,GY2 2BT',
        name: 'CHANNEL ISLANDS',
        zip: 'GY\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%nGUERNSEY%n%Z',
        key: 'GG',
        posturl: 'http://www.guernseypost.com/postcode_finder/',
        id: 'data/GG'
    },
    gh: {
        id: 'data/GH',
        key: 'GH',
        name: 'GHANA'
    },
    gi: {
        zipex: 'GX11 1AA',
        name: 'GIBRALTAR',
        zip: 'GX11 1AA',
        require: 'A',
        id: 'data/GI',
        key: 'GI',
        fmt: '%N%n%O%n%A'
    },
    gl: {
        zipex: '3900,3950,3911',
        name: 'GREENLAND',
        zip: '39\\d{2}',
        require: 'ACZ',
        id: 'data/GL',
        key: 'GL',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    gm: {
        id: 'data/GM',
        key: 'GM',
        name: 'GAMBIA'
    },
    gn: {
        zipex: '001,200,100',
        name: 'GUINEA',
        zip: '\\d{3}',
        fmt: '%N%n%O%n%Z %A %C',
        key: 'GN',
        id: 'data/GN'
    },
    gp: {
        upper: 'ACX',
        zipex: '97100',
        name: 'GUADELOUPE',
        zip: '9[78][01]\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'GP',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/GP'
    },
    gq: {
        id: 'data/GQ',
        key: 'GQ',
        name: 'EQUATORIAL GUINEA'
    },
    gr: {
        zipex: '151 24,151 10,101 88',
        name: 'GREECE',
        zip: '\\d{3} ?\\d{2}',
        require: 'ACZ',
        id: 'data/GR',
        key: 'GR',
        posturl: 'http://www.elta.gr/findapostcode.aspx',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    gs: {
        upper: 'CZ',
        zipex: 'SIQQ 1ZZ',
        name: 'SOUTH GEORGIA',
        zip: 'SIQQ 1ZZ',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'GS',
        id: 'data/GS'
    },
    gt: {
        zipex: '09001,01501',
        name: 'GUATEMALA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z- %C',
        key: 'GT',
        id: 'data/GT'
    },
    gu: {
        upper: 'ACNOS',
        zipex: '96910,96931',
        name: 'GUAM',
        zip: '969([12]\\d|3[12])([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'GU',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/GU'
    },
    gw: {
        zipex: '1000,1011',
        name: 'GUINEA-BISSAU',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'GW',
        id: 'data/GW'
    },
    gy: {
        id: 'data/GY',
        key: 'GY',
        name: 'GUYANA'
    },
    hk: {
        lang: 'zh-hant',
        upper: 'S',
        sub_lnames: 'Kowloon~Hong Kong Island~New Territories',
        name: 'HONG KONG',
        fmtCharsets: 'Big5',
        require: 'AS',
        fmt: '%S%n%A%n%O%n%N',
        state_name_type: 'area',
        languages: 'zh-hant~en',
        lfmt: '%N%n%O%n%A%n%S',
        sub_keys: '九龍~香港島~新界',
        key: 'HK',
        id: 'data/HK'
    },
    hm: {
        upper: 'CS',
        name: 'HEARD AND MCDONALD ISLANDS',
        zip: '\\d{4}',
        fmt: '%O%n%N%n%A%n%C %S %Z',
        key: 'HM',
        id: 'data/HM'
    },
    hn: {
        name: 'HONDURAS',
        zip: '(?:\\d{5})?',
        require: 'ACS',
        id: 'data/HN',
        key: 'HN',
        fmt: '%N%n%O%n%A%n%C, %S%n%Z'
    },
    hr: {
        postprefix: 'HR-',
        zipex: '10000,21001,10002',
        name: 'CROATIA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%nHR-%Z %C',
        key: 'HR',
        posturl: 'http://www.posta.hr/default.aspx?pretpum',
        id: 'data/HR'
    },
    ht: {
        postprefix: 'HT',
        zipex: '6120,5310,6110,8510',
        name: 'HAITI',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%nHT%Z %C %X',
        key: 'HT',
        id: 'data/HT'
    },
    hu: {
        upper: 'ACNO',
        zipex: '1037,2380,1540',
        name: 'HUNGARY (Rep.)',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%C%n%A%n%Z',
        key: 'HU',
        posturl: 'http://posta.hu/ugyfelszolgalat/iranyitoszam_kereso',
        id: 'data/HU'
    },
    id: {
        lang: 'id',
        zipex: '40115',
        name: 'INDONESIA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C %Z%n%S',
        languages: 'id',
        sub_keys: 'Aceh~Bali~Banten~Bengkulu~Daerah Istimewa Yogyakarta~Daerah Khusus Ibukota Jakarta~Gorontalo~Jambi~Jawa Barat~Jawa Tengah~Jawa Timur~Kalimantan Barat~Kalimantan Selatan~Kalimantan Tengah~Kalimantan Timur~Kepulauan Bangka Belitung~Kepulauan Riau~Lampung~Maluku~Maluku Utara~Nusa Tenggara Barat~Nusa Tenggara Timur~Papua~Papua Barat~Riau~Sulawesi Barat~Sulawesi Selatan~Sulawesi Tengah~Sulawesi Tenggara~Sulawesi Utara~Sumatera Barat~Sumatera Selatan~Sumatera Utara',
        key: 'ID',
        sub_isoids: 'AC~BA~BT~BE~YO~JK~GO~JA~JB~JT~JI~KB~KS~KT~KI~BB~KR~LA~MA~MU~NB~NT~PA~PB~RI~SR~SN~ST~SG~SA~SB~SS~SU',
        id: 'data/ID'
    },
    ie: {
        lang: 'en',
        name: 'IRELAND',
        fmt: '%N%n%O%n%A%n%C%n%S',
        state_name_type: 'county',
        languages: 'en',
        sub_keys: 'Co. Carlow~Co. Cavan~Co. Clare~Co. Cork~Co. Donegal~Co. Dublin~Co. Galway~Co. Kerry~Co. Kildare~Co. Kilkenny~Co. Laois~Co. Leitrim~Co. Limerick~Co. Longford~Co. Louth~Co. Mayo~Co. Meath~Co. Monaghan~Co. Offaly~Co. Roscommon~Co. Sligo~Co. Tipperary~Co. Waterford~Co. Westmeath~Co. Wexford~Co. Wicklow',
        key: 'IE',
        sub_isoids: 'CW~CN~CE~C~DL~D~G~KY~KE~KK~LS~LM~LK~LD~LH~MO~MH~MN~OY~RN~SO~TA~WD~WH~WX~WW',
        id: 'data/IE'
    },
    il: {
        zipex: '96143,9614303',
        name: 'ISRAEL',
        zip: '\\d{5}(?:\\d{2})?',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'IL',
        posturl: 'http://www.israelpost.co.il/zipcode.nsf/demozip?openform',
        id: 'data/IL',
        dir: 'rtl'
    },
    im: {
        upper: 'CZ',
        zipex: 'IM2 1AA,IM99 1PS',
        name: 'ISLE OF MAN',
        zip: 'IM\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'IM',
        posturl: 'http://www.gov.im/post/postal/fr_main.asp',
        id: 'data/IM'
    },
    in: {
        lang: 'en',
        zipex: '110034,110001',
        name: 'INDIA',
        zip: '\\d{6}',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %Z%n%S',
        state_name_type: 'state',
        languages: 'en',
        sub_keys: 'Andaman & Nicobar~Andhra Pradesh~Arunachal Pradesh~Assam~Bihar~Chandigarh~Chhattisgarh~Dadra & Nagar Haveli~Daman & Diu~Delhi~Goa~Gujarat~Haryana~Himachal Pradesh~Jammu & Kashmir~Jharkhand~Karnataka~Kerala~Lakshadweep~Madhya Pradesh~Maharashtra~Manipur~Meghalaya~Mizoram~Nagaland~Orissa~Puducherry~Punjab~Rajasthan~Sikkim~Tamil Nadu~Tripura~Uttar Pradesh~Uttarakhand~West Bengal',
        key: 'IN',
        sub_isoids: 'AN~AP~AR~AS~BR~CH~CT~DN~DD~DL~GA~GJ~HR~HP~JK~JH~KA~KL~LD~MP~MH~MN~ML~MZ~NL~OR~PY~PB~RJ~SK~TN~TR~UP~UL~WB',
        posturl: 'http://www.indiapost.gov.in/pin/pinsearch.aspx',
        id: 'data/IN',
        sub_zips: '744~5[0-3]~79[0-2]~78~8[0-5]~16|1440[3-9]~49~396~396~11~403~3[6-9]~1[23]~17~1[89]~81[4-9]|82|83[0-5]~5[4-9]|53[7-9]~6[7-9]|6010|607008|777~673~4[5-8]|490~4[0-4]~79[56]~79[34]~796~79[78]~7[5-7]~605~1[45]~3[0-4]~737|750~6[0-6]|536~799~2[0-35-8]|24[0-7]|26[12]~24[46-9]|254|26[23]~7[0-4]'
    },
    io: {
        upper: 'CZ',
        zipex: 'BBND 1ZZ',
        name: 'BRITISH INDIAN OCEAN TERRITORY',
        zip: 'BBND 1ZZ',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'IO',
        id: 'data/IO'
    },
    iq: {
        upper: 'CS',
        name: 'IRAQ',
        zip: '\\d{5}',
        require: 'ACS',
        fmt: '%O%n%N%n%A%n%C, %S%n%Z',
        key: 'IQ',
        id: 'data/IQ'
    },
    is: {
        zipex: '320,121,220,110',
        posturl: 'http://www.postur.is/cgi-bin/hsrun.exe/Distributed/vefur/vefur.htx;start=HS_landakort_postnumer',
        zip: '\\d{3}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'IS',
        id: 'data/IS',
        name: 'ICELAND'
    },
    it: {
        lang: 'it',
        upper: 'CS',
        zipex: '00144,47037,39049',
        name: 'ITALY',
        zip: '\\d{5}',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%Z %C %S',
        languages: 'it',
        sub_keys: 'AG~AL~AN~AR~AP~AT~AV~BA~BT~BL~BN~BG~BI~BO~BZ~BS~BR~CA~CL~CB~CI~CE~CT~CZ~CH~CO~CS~CR~KR~CN~EN~FM~FE~FI~FG~FC~FR~GE~GO~GR~IM~IS~AQ~SP~LT~LE~LC~LI~LO~LU~MC~MN~MS~MT~VS~ME~MI~MO~MB~NA~NO~NU~OG~OT~OR~PD~PA~PR~PV~PG~PU~PE~PC~PI~PT~PN~PZ~PO~RG~RA~RC~RE~RI~RN~RM~RO~SA~SS~SV~SI~SR~SO~TA~TE~TR~TO~TP~TN~TV~TS~UD~AO~VA~VE~VB~VC~VR~VV~VI~VT',
        key: 'IT',
        posturl: 'http://www.poste.it/online/cercacap/',
        id: 'data/IT',
        sub_names: 'Agrigento~Alessandria~Ancona~Arezzo~Ascoli Piceno~Asti~Avellino~Bari~Barletta-Andria-Trani~Belluno~Benevento~Bergamo~Biella~Bologna~Bolzano~Brescia~Brindisi~Cagliari~Caltanissetta~Campobasso~Carbonia-Iglesias~Caserta~Catania~Catanzaro~Chieti~Como~Cosenza~Cremona~Crotone~Cuneo~Enna~Fermo~Ferrara~Firenze~Foggia~Forlì-Cesena~Frosinone~Genova~Gorizia~Grosseto~Imperia~Isernia~L\'Aquila~La Spezia~Latina~Lecce~Lecco~Livorno~Lodi~Lucca~Macerata~Mantova~Massa-Carrara~Matera~Medio Campidano~Messina~Milano~Modena~Monza e della Brianza~Napoli~Novara~Nuoro~Ogliastra~Olbia-Tempio~Oristano~Padova~Palermo~Parma~Pavia~Perugia~Pesaro e Urbino~Pescara~Piacenza~Pisa~Pistoia~Pordenone~Potenza~Prato~Ragusa~Ravenna~Reggio Calabria~Reggio nell\'Emilia~Rieti~Rimini~Roma~Rovigo~Salerno~Sassari~Savona~Siena~Siracusa~Sondrio~Taranto~Teramo~Terni~Torino~Trapani~Trento~Treviso~Trieste~Udine~Valle d\'Aosta~Varese~Venezia~Verbano-Cusio-Ossola~Vercelli~Verona~Vibo Valentia~Vicenza~Viterbo',
        sub_zips: '92~15~60~52~63~14~83~70~76[01]~32~82~24~13[89]~40~39~25~72~0912[1-9]|0913[0-4]|0901[0289]|0902[03468]|0903[0234]|0904|0803[035]|08043~93~860[1-4]|86100~0901[013-7]~81~95~88[01]~66~22~87~26[01]~88[89]~12|18025~94~638|63900~44~50~71~47[015]~03~16~34[01]7~58~18~860[7-9]|86170~67~19~04~73~23[89]~57~26[89]~55~62~46~54~75~0902[012579]|0903[015-9]|09040~98~20~41~208|20900~80~28[01]~080[1-3]|08100~08037|0804[024-9]~08020|0702|0703[08]~090[7-9]|09170|0801[039]|0803[04]~35~90~43~27~06~61~65~29~56~51~330[7-9]|33170~85~59~97~48~89[01]~42~02~47[89]~00~45~84~070[14]|0703[0-79]|07100~17|12071~53~96~23[01]~74~64~05~10~91~38~31~3401|341[0-689]|34062~330[1-5]|33100~11~21~30~28[89]~13[01]~37~89[89]~36~01'
    },
    je: {
        upper: 'CZ',
        zipex: 'JE1 1AA,JE2 2BT',
        name: 'CHANNEL ISLANDS',
        zip: 'JE\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%nJERSEY%n%Z',
        key: 'JE',
        posturl: 'http://www.jerseypost.com/tools/postcode-address-finder/',
        id: 'data/JE'
    },
    jm: {
        lang: 'en',
        name: 'JAMAICA',
        require: 'ACS',
        fmt: '%N%n%O%n%A%n%C%n%S %X',
        state_name_type: 'parish',
        languages: 'en',
        sub_keys: 'CLARENDON~HANOVER~KINGSTON~MANCHESTER~PORTLAND~ST. ANDREW~ST. ANN~ST. CATHERINE~ST. ELIZABETH~ST. JAMES~ST. MARY~ST. THOMAS~TRELAWNY~WESTMORELAND',
        key: 'JM',
        sub_isoids: '13~09~01~12~04~02~06~14~11~08~05~03~07~10',
        id: 'data/JM',
        sub_names: 'Clarendon~Hanover~Kingston~Manchester~Portland~St. Andrew~St. Ann~St. Catherine~St. Elizabeth~St. James~St. Mary~St. Thomas~Trelawny~Westmoreland'
    },
    jo: {
        zipex: '11937,11190',
        name: 'JORDAN',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'JO',
        id: 'data/JO'
    },
    jp: {
        lang: 'ja',
        upper: 'S',
        zipex: '154-0023,350-1106,951-8073,112-0001,208-0032,231-0012,951-8073',
        name: 'JAPAN',
        zip: '\\d{3}-?\\d{4}',
        fmtCharsets: 'ISO-2022-JP',
        require: 'ACSZ',
        fmt: '〒%Z%n%S%C%n%A%n%O%n%N',
        state_name_type: 'prefecture',
        languages: 'ja',
        lfmt: '%N%n%O%n%A%n%C, %S%n%Z',
        sub_lnames: 'HOKKAIDO~AOMORI~IWATE~MIYAGI~AKITA~YAMAGATA~FUKUSHIMA~IBARAKI~TOCHIGI~GUNMA~SAITAMA~CHIBA~TOKYO~KANAGAWA~NIIGATA~TOYAMA~ISHIKAWA~FUKUI~YAMANASHI~NAGANO~GIFU~SHIZUOKA~AICHI~MIE~SHIGA~KYOTO~OSAKA~HYOGO~NARA~WAKAYAMA~TOTTORI~SHIMANE~OKAYAMA~HIROSHIMA~YAMAGUCHI~TOKUSHIMA~KAGAWA~EHIME~KOCHI~FUKUOKA~SAGA~NAGASAKI~KUMAMOTO~OITA~MIYAZAKI~KAGOSHIMA~OKINAWA',
        sub_keys: '北海道~青森県~岩手県~宮城県~秋田県~山形県~福島県~茨城県~栃木県~群馬県~埼玉県~千葉県~東京都~神奈川県~新潟県~富山県~石川県~福井県~山梨県~長野県~岐阜県~静岡県~愛知県~三重県~滋賀県~京都府~大阪府~兵庫県~奈良県~和歌山県~鳥取県~島根県~岡山県~広島県~山口県~徳島県~香川県~愛媛県~高知県~福岡県~佐賀県~長崎県~熊本県~大分県~宮崎県~鹿児島県~沖縄県',
        key: 'JP',
        sub_isoids: '01~02~03~04~05~06~07~08~09~10~11~12~13~14~15~16~17~18~19~20~21~22~23~24~25~26~27~28~29~30~31~32~33~34~35~36~37~38~39~40~41~42~43~44~45~46~47',
        posturl: 'http://search.post.japanpost.jp/zipcode/',
        id: 'data/JP',
        sub_zips: '0[4-9]|00[1-7]~03|018~02~98~01~99~9[67]~3[01]~32|311|349~37|38[49]~3[3-6]~2[6-9]~1[0-8]|19[0-8]|20~2[1-5]|199~9[45]|389~93~92|939~91|922~40~3[89]|949~50~4[1-9]~4[4-9]|431~51|498|647~52~6[0-2]|520~5[3-9]|618|630~6[5-7]|563~63|64[78]~64|519~68~69|68[45]~7[01]~7[23]~7[45]~77~76~79~78~8[0-3]|871~84~85|81[17]|848~86~87|839~88~89~90'
    },
    ke: {
        zipex: '20100,00100',
        name: 'KENYA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C%n%Z',
        key: 'KE',
        id: 'data/KE'
    },
    kg: {
        zipex: '720001',
        name: 'KYRGYZSTAN',
        zip: '\\d{6}',
        fmt: '%Z %C %X%n%A%n%O%n%N',
        key: 'KG',
        id: 'data/KG'
    },
    kh: {
        zipex: '12203,14206,12000',
        name: 'CAMBODIA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'KH',
        id: 'data/KH'
    },
    ki: {
        upper: 'ACNOS',
        name: 'KIRIBATI',
        fmt: '%N%n%O%n%A%n%S%n%C',
        state_name_type: 'island',
        key: 'KI',
        id: 'data/KI'
    },
    km: {
        upper: 'AC',
        id: 'data/KM',
        key: 'KM',
        name: 'COMOROS'
    },
    kn: {
        lang: 'en',
        name: 'SAINT KITTS AND NEVIS',
        require: 'ACS',
        fmt: '%N%n%O%n%A%n%C, %S',
        state_name_type: 'island',
        languages: 'en',
        sub_keys: 'NEVIS~ST. KITTS',
        key: 'KN',
        sub_isoids: 'N~K',
        id: 'data/KN'
    },
    kr: {
        lang: 'ko',
        upper: 'Z',
        sub_zipexs: '255-815:210-923~427-080:431-088~621-759:668-863~712-861:770-841~501-805:506-358~700-441:711-865~300-091:350-504~609-311:619-872~100-620:151-832~339-014~683-480:689-832~406-131:417-921~516-931:556-891~568-803:595-871~690-808:697-370~314-831:355-770~367-861:395-813',
        zipex: '110-110,699-800',
        name: 'KOREA (REP.)',
        zip: '\\d{3}[\\-]\\d{3}',
        fmtCharsets: 'EUC-KR',
        require: 'ACSZ',
        fmt: '%S %C%D%n%A%n%O%n%N%nSEOUL %Z',
        state_name_type: 'do_si',
        languages: 'ko',
        lfmt: '%N%n%O%n%A%n%D%n%C%n%S%nSEOUL %Z',
        sub_lnames: 'Gangwon~Gyeonggi~Gyeongnam~Gyeongbuk~Gwangju~Daegu~Daejeon~Busan~Seoul~Sejong~Ulsan~Incheon~Jeonnam~Jeonbuk~Jeju~Chungnam~Chungbuk',
        sub_keys: '강원도~경기도~경상남도~경상북도~광주광역시~대구광역시~대전광역시~부산광역시~서울특별시~세종특별자치시~울산광역시~인천광역시~전라남도~전라북도~제주특별자치도~충청남도~충청북도',
        key: 'KR',
        sub_isoids: '42~41~48~47~29~27~30~26~11~~31~28~46~45~49~44~43',
        posturl: 'http://www.epost.go.kr/search/zipcode/search5.jsp',
        id: 'data/KR',
        sub_names: '강원~경기~경남~경북~광주~대구~대전~부산~서울~세종~울산~인천~전남~전북~제주~충남~충북',
        sub_zips: '2[0-6]|487-839~4(?:1[0-6]|[2-8])~6[2-7]~7(?:1[2-9]|[3-9])~50[0-36]~7(?:0[0-6]|11)~30[0-24-6]~6[0-1]~1[0-5]|412-799~339~68[0-39]~4(?:0[0-79]|17)~5[1-5]~5[6-9]~69~3(?:[1245]|3[0-8])~3[6-9]'
    },
    kw: {
        zipex: '54541,54551,54404,13009',
        name: 'KUWAIT',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'KW',
        id: 'data/KW'
    },
    ky: {
        lang: 'en',
        zipex: 'KY1-1100,KY1-1702,KY2-2101',
        name: 'CAYMAN ISLANDS',
        zip: 'KY\\d-\\d{4}',
        require: 'AS',
        fmt: '%N%n%O%n%A%n%S',
        state_name_type: 'island',
        languages: 'en',
        sub_keys: 'CAYMAN BRAC~GRAND CAYMAN~LITTLE CAYMAN',
        key: 'KY',
        posturl: 'http://www.caymanpost.gov.ky/portal/page?_pageid=3561,1&_dad=portal&_schema=PORTAL',
        id: 'data/KY'
    },
    kz: {
        zipex: '040900,050012',
        name: 'KAZAKHSTAN',
        zip: '\\d{6}',
        fmt: '%Z%n%S%n%C%n%A%n%O%n%N',
        key: 'KZ',
        id: 'data/KZ'
    },
    la: {
        zipex: '01160,01000',
        name: 'LAO (PEOPLE\'S DEM. REP.)',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'LA',
        id: 'data/LA'
    },
    lb: {
        zipex: '2038 3054,1107 2810,1000',
        name: 'LEBANON',
        zip: '(\\d{4}([ ]?\\d{4})?)?',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'LB',
        id: 'data/LB'
    },
    lc: {
        id: 'data/LC',
        key: 'LC',
        name: 'SAINT LUCIA'
    },
    li: {
        postprefix: 'FL-',
        zipex: '9496,9491,9490,9485',
        name: 'LIECHTENSTEIN',
        zip: '(948[5-9])|(949[0-7])',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%nFL-%Z %C',
        key: 'LI',
        posturl: 'http://www.post.ch/db/owa/pv_plz_pack/pr_main',
        id: 'data/LI'
    },
    lk: {
        zipex: '20000,00100',
        posturl: 'http://www.slpost.gov.lk/',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C%n%Z',
        key: 'LK',
        id: 'data/LK',
        name: 'SRI LANKA'
    },
    lr: {
        zipex: '1000',
        name: 'LIBERIA',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C %X',
        key: 'LR',
        id: 'data/LR'
    },
    ls: {
        zipex: '100',
        name: 'LESOTHO',
        zip: '\\d{3}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'LS',
        id: 'data/LS'
    },
    lt: {
        postprefix: 'LT-',
        zipex: '04340,03500',
        name: 'LITHUANIA',
        zip: '\\d{5}',
        fmt: '%O%n%N%n%A%nLT-%Z %C',
        key: 'LT',
        posturl: 'http://www.post.lt/lt/?id=316',
        id: 'data/LT'
    },
    lu: {
        postprefix: 'L-',
        zipex: '4750,2998',
        name: 'LUXEMBOURG',
        zip: '\\d{4}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%nL-%Z %C',
        key: 'LU',
        posturl: 'http://www.pt.lu/portal/services_en_ligne/recherche_codes_postaux',
        id: 'data/LU'
    },
    lv: {
        zipex: 'LV-1073,LV-1000',
        posturl: 'http://www.pasts.lv/lv/uzzinas/nodalas/',
        zip: 'LV-\\d{4}',
        fmt: '%N%n%O%n%A%n%C, %Z',
        key: 'LV',
        id: 'data/LV',
        name: 'LATVIA'
    },
    ly: {
        id: 'data/LY',
        key: 'LY',
        name: 'LIBYA'
    },
    ma: {
        zipex: '53000,10000,20050,16052',
        name: 'MOROCCO',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'MA',
        id: 'data/MA'
    },
    mc: {
        postprefix: 'MC-',
        zipex: '98000,98020,98011,98001',
        name: 'MONACO',
        zip: '980\\d{2}',
        fmt: '%N%n%O%n%A%nMC-%Z %C %X',
        key: 'MC',
        id: 'data/MC'
    },
    md: {
        postprefix: 'MD-',
        zipex: '2012,2019',
        name: 'Rep. MOLDOVA',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%nMD-%Z %C',
        key: 'MD',
        id: 'data/MD'
    },
    me: {
        zipex: '81257,81258,81258,81217,84314,85366',
        name: 'MONTENEGRO',
        zip: '8\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'ME',
        id: 'data/ME'
    },
    mf: {
        upper: 'ACX',
        zipex: '97100',
        name: 'SAINT MARTIN',
        zip: '9[78][01]\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'MF',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/MF'
    },
    mg: {
        zipex: '501,101',
        name: 'MADAGASCAR',
        zip: '\\d{3}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'MG',
        id: 'data/MG'
    },
    mh: {
        upper: 'ACNOS',
        zipex: '96960,96970',
        name: 'MARSHALL ISLANDS',
        zip: '969[67]\\d([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'MH',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/MH'
    },
    mk: {
        zipex: '1314,1321,1443,1062',
        name: 'MACEDONIA',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'MK',
        id: 'data/MK'
    },
    ml: {
        id: 'data/ML',
        key: 'ML',
        name: 'MALI'
    },
    mn: {
        zipex: '65030,65270',
        posturl: 'http://www.zipcode.mn/',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%S %C-%X%n%Z',
        key: 'MN',
        id: 'data/MN',
        name: 'MONGOLIA'
    },
    mo: {
        name: 'MACAO',
        require: 'A',
        id: 'data/MO',
        lfmt: '%N%n%O%n%A',
        key: 'MO',
        fmt: '%A%n%O%n%N'
    },
    mp: {
        upper: 'ACNOS',
        zipex: '96950,96951,96952',
        name: 'NORTHERN MARIANA ISLANDS',
        zip: '9695[012]([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'MP',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/MP'
    },
    mq: {
        upper: 'ACX',
        zipex: '97220',
        name: 'MARTINIQUE',
        zip: '9[78]2\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'MQ',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/MQ'
    },
    mr: { upper: 'AC', id: 'data/MR', key: 'MR', name: 'MAURITANIA'
    },
    ms: { id: 'data/MS', key: 'MS', name: 'MONTSERRAT'
    },
    mt: {
        upper: 'CZ',
        zipex: 'NXR 01,ZTN 05,GPO 01,BZN 1130,SPB 6031,VCT 1753',
        name: 'MALTA',
        zip: '[A-Z]{3}[ ]?\\d{2,4}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'MT',
        posturl: 'http://postcodes.maltapost.com/',
        id: 'data/MT'
    },
    mu: {
        upper: 'CZ',
        zipex: '742CU001',
        name: 'MAURITIUS',
        zip: '(\\d{3}[A-Z]{2}\\d{3})?',
        fmt: '%N%n%O%n%A%n%Z%n%C',
        key: 'MU',
        id: 'data/MU'
    },
    mv: {
        zipex: '20026',
        posturl: 'http://www.maldivespost.com/?lid=10',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'MV',
        id: 'data/MV',
        name: 'MALDIVES'
    },
    mw: {
        fmt: '%N%n%O%n%A%n%C %X',
        id: 'data/MW',
        key: 'MW',
        name: 'MALAWI'
    },
    mx: {
        lang: 'es',
        upper: 'CSZ',
        sub_zipexs: '20000,20999~21000,22999~23000,23999~24000,24999~29000,30999~31000,33999~25000,27999~28000,28999~00000,16999~34000,35999~50000,57999~36000,38999~39000,41999~42000,43999~44000,49999~58000,61999~62000,62999~63000,63999~64000,67999~68000,71999~72000,75999~76000,76999~77000,77999~78000,79999~80000,82999~83000,85999~86000,86999~87000,89999~90000,90999~91000,96999~97000,97999~98000,99999',
        zipex: '02860,77520,06082',
        name: 'MEXICO',
        zip: '\\d{5}',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%Z %C, %S',
        state_name_type: 'state',
        languages: 'es',
        sub_keys: 'AGS~BC~BCS~CAM~CHIS~CHIH~COAH~COL~DF~DGO~MEX~GTO~GRO~HGO~JAL~MICH~MOR~NAY~NL~OAX~PUE~QRO~QROO~SLP~SIN~SON~TAB~TAMPS~TLAX~VER~YUC~ZAC',
        key: 'MX',
        sub_isoids: 'AGU~BCN~BCS~CAM~CHP~CHH~COA~COL~DIF~DUR~MEX~GUA~GRO~HID~JAL~MIC~MOR~NAY~NLE~OAX~PUE~QUE~ROO~SLP~SIN~SON~TAB~TAM~TLA~VER~YUC~ZAC',
        posturl: 'http://www.correosdemexico.gob.mx/ServiciosLinea/Paginas/ccpostales.aspx',
        id: 'data/MX',
        sub_names: 'Aguascalientes~Baja California~Baja California Sur~Campeche~Chiapas~Chihuahua~Coahuila~Colima~Distrito Federal~Durango~Estado de México~Guanajuato~Guerrero~Hidalgo~Jalisco~Michoacán~Morelos~Nayarit~Nuevo León~Oaxaca~Puebla~Querétaro~Quintana Roo~San Luís Potosí~Sinalóa~Sonora~Tabasco~Tamaulipas~Tlaxcala~Veracruz~Yucatán~Zacatecas',
        sub_zips: '20~2[12]~23~24~29|30~3[1-3]~2[5-7]~28~0|1[0-6]~3[45]~5[0-7]~3[6-8]~39|4[01]~4[23]~4[4-9]~5[89]|6[01]~62~63~6[4-7]~6[89]|7[01]~7[2-5]~76~77~7[89]~8[0-2]~8[3-5]~86~8[7-9]~90~9[1-6]~97~9[89]'
    },
    my: {
        lang: 'ms',
        upper: 'CS',
        sub_zipexs: '80000,86999~05000,09999:34950~15000,18599~50000,60000~87000,87999~75000,78399~70000,73599~25000,28999:39000,39999:49000:69000~30000,36899:39000~01000,02799~10000,14999~62000,62999~88000,91999~93000,98999~40000,48999:63000,68199~20000,24999',
        zipex: '43000,50754,88990,50670',
        name: 'MALAYSIA',
        zip: '\\d{5}',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%Z %C, %S',
        state_name_type: 'state',
        languages: 'ms',
        sub_keys: 'JOHOR~KEDAH~KELANTAN~KUALA LUMPUR~LABUAN~MELAKA~NEGERI SEMBILAN~PAHANG~PERAK~PERLIS~PULAU PINANG~PUTRAJAYA~SABAH~SARAWAK~SELANGOR~TERENGGANU',
        key: 'MY',
        sub_isoids: '01~02~03~14~15~04~05~06~08~09~07~16~12~13~10~11',
        posturl: 'http://www.pos.com.my/pos/homepage.aspx',
        id: 'data/MY',
        sub_zips: '8[0-6]~0[5-9]|34950~1[5-9]~5|60~87~7[5-9]~7[0-4]~2[5-8]|39|49|69~3[0-6]|39000~0[12]~1[0-4]~62~8[89]|9[01]~9[3-8]~4[0-8]|6[3-8]~2[0-4]'
    },
    mz: {
        zipex: '1102,1119,3212',
        name: 'MOZAMBIQUE',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%C',
        key: 'MZ',
        id: 'data/MZ'
    },
    na: { id: 'data/NA', key: 'NA', name: 'NAMIBIA'
    },
    nc: {
        upper: 'ACX',
        zipex: '98814,98800,98810',
        name: 'NEW CALEDONIA',
        zip: '988\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'NC',
        posturl: 'http://poste.opt.nc/index.php?option=com_content&view=article&id=80&Itemid=131',
        id: 'data/NC'
    },
    ne: {
        zipex: '8001',
        name: 'NIGER',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'NE',
        id: 'data/NE'
    },
    nf: {
        upper: 'CS',
        name: 'NORFOLK ISLAND',
        zip: '2899',
        fmt: '%O%n%N%n%A%n%C %S %Z',
        key: 'NF',
        id: 'data/NF'
    },
    ng: {
        lang: 'en',
        upper: 'CS',
        zipex: '930283,300001,931104',
        name: 'NIGERIA',
        zip: '(\\d{6})?',
        fmt: '%N%n%O%n%A%n%C %Z%n%S',
        state_name_type: 'state',
        languages: 'en',
        sub_keys: 'ABIA~ADAMAWA~AKWA IBOM~ANAMBRA~BAUCHI~BAYELSA~BENUE~BORNO~CROSS RIVER~DELTA~EBONYI~EDO~EKITI~ENUGU~FCT-ABUJA~GOMBE~IMO~JIGAWA~KADUNA~KANO~KATSINA~KEBBI~KOGI~KWARA~LAGOS~NASSARAWA~NIGER~OGUN~ONDO~OSUN~OYO~PLATEAU~RIVERS~SOKOTO~TARABA~YOBE~ZAMFARA',
        key: 'NG',
        sub_isoids: 'AB~AD~AK~AN~BA~BY~BE~BO~CR~DE~EB~ED~EK~EN~FC~GO~IM~JI~KD~KN~KT~KE~KO~KW~LA~NA~NI~OG~ON~OS~OY~PL~RI~SO~TA~YO~ZA',
        posturl: 'http://www.nigeriapostcodes.com/views/',
        id: 'data/NG'
    },
    ni: {
        lang: 'es',
        upper: 'CS',
        zipex: '52000',
        name: 'NICARAGUA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z%n%C, %S',
        state_name_type: 'department',
        languages: 'es',
        sub_keys: 'BOACO~CARAZO~CHINANDEGA~CHONTALES~ESTELI~GRANADA~JINOTEGA~LEON~MADRIZ~MANAGUA~MASAYA~MATAGALPA~NUEVA SEGOVIA~RAAN~RAAS~RIO SAN JUAN~RIVAS',
        key: 'NI',
        sub_isoids: 'BO~CA~CI~CO~ES~GR~JI~LE~MD~MN~MS~MT~NS~AN~AS~SJ~RI',
        posturl: 'http://www.correos.gob.ni/index.php/codigo-postal-2',
        id: 'data/NI',
        sub_zips: '5[23]~4[45]~2[23]~51~3[01]~4[01]~6[23]~2[01]~3[23]~1[02-6]|99~4[23]~6[01]~3[45]~7[01]~8[01]~9[01]~4[67]'
    },
    nl: {
        zipex: '1234 AB,2490 AA',
        name: 'NETHERLANDS',
        zip: '\\d{4}[ ]?[A-Z]{2}',
        require: 'ACZ',
        id: 'data/NL',
        key: 'NL',
        posturl: 'http://www.tntpost.nl/voorthuis/',
        fmt: '%O%n%N%n%A%n%Z %C'
    },
    no: {
        zipex: '0025,0107,6631',
        name: 'NORWAY',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/NO',
        key: 'NO',
        posturl: 'http://adressesok.posten.no/nb/postal_codes/search',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    np: {
        zipex: '44601',
        posturl: 'http://www.gpo.gov.np/postalcode.aspx',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'NP',
        id: 'data/NP',
        name: 'NEPAL'
    },
    nr: {
        lang: 'en',
        name: 'NAURU CENTRAL PACIFIC',
        require: 'AS',
        fmt: '%N%n%O%n%A%n%S',
        state_name_type: 'district',
        languages: 'en',
        sub_keys: 'AIWO DISTRICT~ANABAR DISTRICT~ANETAN DISTRICT~ANIBARE DISTRICT~BAITI DISTRICT~BOE DISTRICT~BUADA DISTRICT~DENIGOMODU DISTRICT~EWA DISTRICT~IJUW DISTRICT~MENENG DISTRICT~NIBOK DISTRICT~UABOE DISTRICT~YAREN DISTRICT',
        key: 'NR',
        sub_isoids: '01~02~03~04~05~06~07~08~09~10~11~12~13~14',
        id: 'data/NR'
    },
    nu: {
        id: 'data/NU',
        key: 'NU',
        name: 'NIUE'
    },
    nz: {
        zipex: '6001,6015,6332,8252,1030',
        name: 'NEW ZEALAND',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/NZ',
        key: 'NZ',
        posturl: 'http://www.nzpost.co.nz/Cultures/en-NZ/OnlineTools/PostCodeFinder/',
        fmt: '%N%n%O%n%A%n%C %Z'
    },
    om: {
        zipex: '133,112,111',
        name: 'OMAN',
        zip: '(PC )?\\d{3}',
        fmt: '%N%n%O%n%A%n%Z%n%C',
        key: 'OM',
        id: 'data/OM'
    },
    pa: {
        upper: 'CS',
        fmt: '%N%n%O%n%A%n%C%n%S',
        id: 'data/PA',
        key: 'PA',
        name: 'PANAMA (REP.)'
    },
    pe: {
        zipex: 'LIMA 23,LIMA 42,CALLAO 2,02001',
        posturl: 'http://www.serpost.com.pe/cpostal/codigo',
        zip: '(?:LIMA \\d|CALLAO 0?)\\d|[0-2]\\d{4}',
        key: 'PE',
        id: 'data/PE',
        name: 'PERU'
    },
    pf: {
        upper: 'CS',
        name: 'FRENCH POLYNESIA',
        zip: '987\\d{2}',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%Z %C %S',
        state_name_type: 'island',
        key: 'PF',
        id: 'data/PF'
    },
    pg: {
        zipex: '111',
        name: 'PAPUA NEW GUINEA',
        zip: '\\d{3}',
        require: 'ACS',
        id: 'data/PG',
        key: 'PG',
        fmt: '%N%n%O%n%A%n%C %Z %S'
    },
    ph: {
        lang: 'en',
        sub_zipexs: '2800,2826~8600,8611~8500,8513~5600,5616~4500,4517~5700,5717~3800,3806:3808~3200,3207~7300,7306~2100,2114~3900,3905~4200,4234~2600,2615~6543,6550~6300,6347~8700,8723~3000,3024~3500,3528~4600,4612~4400,4436~9100,9104~5800,5816~4800,4810~4100,4126~6000,6053~8800,8810~9400,9417~8100,8120~8000,8015~8200,8210~~6800,6822~5044,5046~3600,3610~2900,2922~2700,2733~5000,5043~3300,3336~3807:3809,3814~2500,2520~4000,4033~9200,9223~9300,9321:9700,9716~6500,6542~9600,9619~4900,4905~5400,5421~~5100,5111~5200,5214~7200,7215~9000,9025~2616,2625~6100,6132~6200,6224~6400,6423~3100,3133~3700,3714~5300,5322~2000,2022~2400,2447~4300,4342~3400,3405~1850,1990~5500,5516~6700,6725~8015~6225,6230~4700,4715~9500,9513~~9800,9811~7400,7416~8400,8427~8300,8319~2300,2318~7500,7509~2200,2213~7100,7124~7000,7043~7000,7043',
        zipex: '1008,1050,1135,1207,2000,1000',
        name: 'PHILIPPINES',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C%n%S',
        languages: 'en',
        sub_keys: 'Abra~Agusan del Norte~Agusan del Sur~Aklan~Albay~Antique~Apayao~Aurora~Basilan~Bataan~Batanes~Batangas~Benguet~Biliran~Bohol~Bukidnon~Bulacan~Cagayan~Camarines Norte~Camarines Sur~Camiguin~Capiz~Catanduanes~Cavite~Cebu~Compostela Valley~Cotabato~Davao del Norte~Davao del Sur~Davao Oriental~Dinagat Islands~Eastern Samar~Guimaras~Ifugao~Ilocos Norte~Ilocos Sur~Iloilo~Isabela~Kalinga~La Union~Laguna~Lanao del Norte~Lanao del Sur~Leyte~Maguindanao~Marinduque~Masbate~Metro Manila~Mindoro Occidental~Mindoro Oriental~Misamis Occidental~Misamis Oriental~Mountain Province~Negros Occidental~Negros Oriental~Northern Samar~Nueva Ecija~Nueva Vizcaya~Palawan~Pampanga~Pangasinan~Quezon Province~Quirino~Rizal~Romblon~Samar~Sarangani~Siquijor~Sorsogon~South Cotabato~Southern Leyte~Sultan Kudarat~Sulu~Surigao del Norte~Surigao del Sur~Tarlac~Tawi-Tawi~Zambales~Zamboanga del Norte~Zamboanga del Sur~Zamboanga Sibuguey',
        key: 'PH',
        sub_isoids: 'ABR~AGN~AGS~AKL~ALB~ANT~APA~AUR~BAS~BAN~BTN~BTG~BEN~BIL~BOH~BUK~BUL~CAG~CAN~CAS~CAM~CAP~CAT~CAV~CEB~COM~NCO~DAV~DAS~DAO~DIN~EAS~GUI~IFU~ILN~ILS~ILI~ISA~KAL~LUN~LAG~LAN~LAS~LEY~MAG~MAD~MAS~00~MDC~MDR~MSC~MSR~MOU~NEC~NER~NSA~NUE~NUV~PLW~PAM~PAN~QUE~QUI~RIZ~ROM~WSA~SAR~SIG~SOR~SCO~SLE~SUK~SLU~SUN~SUR~TAR~TAW~ZMB~ZAN~ZAS~ZSI',
        posturl: 'http://www.philpost.gov.ph/',
        id: 'data/PH',
        sub_zips: '28[0-2]~86[01]~85[01]~56[01]~45[01]~57[01]~380[0-68]~320~730~21[01]~390~42[0-3]~26(0|1[0-5])~65(4[3-9]|5)~63[0-3]~87[0-2]~30[0-2]~35[0-2]~46[01]~44[0-3]~910~58[01]~48[01]~41[0-2]~60[0-5]~88[01]~94[01]~81[0-2]~80[01]~82[01]~~68[0-2]~504[4-6]~36[01]~29[0-2]~27[0-3]~50([0-3]|4[0-3])~33[0-3]~38(0[79]|1[0-4])~25[0-2]~40[0-3]~92[0-2]~9(3[0-2]|7[01])~65([0-3]|4[0-2])~96[01]~490~54[0-2]~~51[01]~52[01]~72[01]~90[0-2]~26(1[6-9]|2[0-5])~61[0-3]~62[0-2]~64[0-2]~31[0-3]~37[01]~53[0-2]~20[0-2]~24[0-4]~43[0-4]~340~1[89]~55[01]~67[0-2]~8015~62(2[5-9]|30)~47[01]~95[01]~~98[01]~74[01]~84[02]~83[01]~23[01]~750~22[01]~71[0-2]~70[0-4]~70[0-4]'
    },
    pk: {
        zipex: '44000',
        posturl: 'http://www.pakpost.gov.pk/postcode/postcode.html',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C-%Z',
        key: 'PK',
        id: 'data/PK',
        name: 'PAKISTAN'
    },
    pl: {
        zipex: '00-950,05-470,48-300,32-015,00-940',
        name: 'POLAND',
        zip: '\\d{2}-\\d{3}',
        require: 'ACZ',
        id: 'data/PL',
        key: 'PL',
        posturl: 'http://www.poczta-polska.pl/kody.php',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    pm: {
        upper: 'ACX',
        zipex: '97500',
        name: 'ST. PIERRE AND MIQUELON',
        zip: '9[78]5\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'PM',
        id: 'data/PM'
    },
    pn: {
        upper: 'CZ',
        zipex: 'PCRN 1ZZ',
        name: 'PITCAIRN',
        zip: 'PCRN 1ZZ',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'PN',
        id: 'data/PN'
    },
    pr: {
        postprefix: 'PR',
        upper: 'ACNO',
        zipex: '00930',
        name: 'PUERTO RICO',
        zip: '00[679]\\d{2}([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%C PR %Z',
        key: 'PR',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/PR'
    },
    ps: {
        id: 'data/PS',
        key: 'PS',
        name: 'PALESTINIAN TERRITORY'
    },
    pt: {
        zipex: '2725-079,1250-096,1201-950,2860-571,1208-148',
        name: 'PORTUGAL',
        zip: '\\d{4}-\\d{3}',
        require: 'ACZ',
        id: 'data/PT',
        key: 'PT',
        posturl: 'http://www.ctt.pt/feapl_2/app/open/tools.jspx?tool=1',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    pw: {
        upper: 'ACNOS',
        zipex: '96940',
        name: 'PALAU',
        zip: '969(39|40)',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'PW',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/PW'
    },
    py: {
        zipex: '1536,1538,1209',
        name: 'PARAGUAY',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'PY',
        id: 'data/PY'
    },
    qa: {
        upper: 'AC', i
        : 'data/QA
        , key: 'QA', name: 'QATAR'
    },
    re: {
        upper: 'ACX',
        zipex: '97400',
        name: 'REUNION',
        zip: '9[78]4\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'RE',
        posturl: 'http://www.laposte.fr/sna/rubrique.php3?id_rubrique=59',
        id: 'data/RE'
    },
    ro: {
        upper: 'AC',
        zipex: '060274,061357,200716',
        name: 'ROMANIA',
        zip: '\\d{6}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'RO',
        posturl: 'http://www.posta-romana.ro/zip_codes',
        id: 'data/RO'
    },
    rs: {
        zipex: '106314',
        posturl: 'http://www.posta.rs/struktura/lat/aplikacije/pronadji/nadji-postu.asp',
        zip: '\\d{6}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'RS',
        id: 'data/RS',
        name: 'REPUBLIC OF SERBIA'
    },
    ru: {
        upper: 'AC',
        zipex: '125075,247112,103375',
        name: 'RUSSIAN FEDERATION',
        zip: '\\d{6}',
        require: 'ACZ',
        fmt: '%Z %C  %n%A%n%O%n%N',
        key: 'RU',
        posturl: 'http://info.russianpost.ru/servlet/department',
        id: 'data/RU'
    },
    rw: {
        upper: 'AC', i
        : 'data/RW
        , key: 'RW', name: 'RWANDA'
    },
    sa: {
        zipex: '11564,11187,11142',
        name: 'SAUDI ARABIA',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%C %Z',
        key: 'SA',
        id: 'data/SA'
    },
    sb: {
        id: 'data/SB',
        key: 'SB',
        name: 'SOLOMON ISLANDS'
    },
    sc: {
        upper: 'S',
        name: 'SEYCHELLES',
        fmt: '%N%n%O%n%A%n%C%n%S',
        state_name_type: 'island',
        key: 'SC',
        id: 'data/SC'
    },
    se: {
        postprefix: 'SE-',
        zipex: '11455,12345,10500',
        name: 'SWEDEN',
        zip: '\\d{3}[ ]?\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%nSE-%Z %C',
        key: 'SE',
        posturl: 'http://www.posten.se/sv/Kundservice/Sidor/Sok-postnummer-resultat.aspx',
        id: 'data/SE'
    },
    sg: {
        zipex: '546080,308125,408600',
        name: 'REP. OF SINGAPORE',
        zip: '\\d{6}',
        require: 'AZ',
        id: 'data/SG',
        key: 'SG',
        posturl: 'http://www.singpost.com.sg/quick_services/index.htm',
        fmt: '%N%n%O%n%A%nSINGAPORE %Z'
    },
    sh: {
        upper: 'CZ',
        zipex: 'STHL 1ZZ',
        name: 'SAINT HELENA',
        zip: '(ASCN|STHL) 1ZZ',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'SH',
        id: 'data/SH'
    },
    si: {
        postprefix: 'SI-',
        zipex: '4000,1001,2500',
        name: 'SLOVENIA',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%nSI- %Z %C',
        key: 'SI',
        id: 'data/SI'
    },
    sj: {
        zipex: '9170',
        name: 'SVALBARD AND JAN MAYEN ISLANDS',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/SJ',
        key: 'SJ',
        posturl: 'http://epab.posten.no/',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    sk: {
        zipex: '010 01,023 14,972 48,921 01,975 99',
        posturl: 'http://psc.posta.sk',
        zip: '\\d{3}[ ]?\\d{2}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'SK',
        id: 'data/SK',
        name: 'SLOVAKIA'
    },
    sl: {
        id: 'data/SL',
        key: 'SL',
        name: 'SIERRA LEONE'
    },
    sm: {
        zipex: '47890,47891,47895,47899',
        name: 'SAN MARINO',
        zip: '4789\\d',
        require: 'AZ',
        id: 'data/SM',
        key: 'SM',
        posturl: 'http://www.poste.it/online/cercacap/',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    sn: {
        zipex: '12500,46024,16556,10000',
        name: 'SENEGAL',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'SN',
        id: 'data/SN'
    },
    so: {
        lang: 'so',
        upper: 'ACS',
        zipex: '09010,11010',
        name: 'SOMALIA',
        zip: '\\d{5}',
        require: 'ACS',
        fmt: '%N%n%O%n%A%n%C, %S %Z',
        languages: 'so',
        sub_keys: 'AD~BK~BN~BR~BY~GG~GD~HR~JD~JH~MD~NG~SG~SD~SH~SL~TG~WG',
        key: 'SO',
        sub_isoids: 'AW~BK~BN~BR~BY~GA~GE~HI~JD~JH~MU~NU~SA~SD~SH~SO~TO~WO',
        id: 'data/SO',
        sub_names: 'AWDAL~BAKOOL~BANAADIR~BARI~BAY~GALGUDUUD~GEDO~HIIRAAN~JUBBADA DHEXE~JUBBADA HOOSE~MUDUG~NUGAAL~SANAAG~SHABEELLAHA DHEXE~SHABEELLAHA HOOSE~SOOL~TOGDHEER~WOQOOYI GALBEED'
    },
    sr: {
        lang: 'nl',
        upper: 'AS',
        name: 'SURINAME',
        fmt: '%N%n%O%n%A%n%C %X%n%S',
        languages: 'nl',
        sub_keys: 'BROKOPONDO~COMMEWIJNE~CORONIE~MAROWIJNE~NICKERIE~PARA~PARAMARIBO~SARAMACCA~SIPALIWINI~WANICA',
        key: 'SR',
        sub_isoids: 'BR~CM~CR~MA~NI~PR~PM~SA~SI~WA',
        id: 'data/SR'
    },
    st: {
        fmt: '%N%n%O%n%A%n%C %X',
        id: 'data/ST',
        key: 'ST',
        name: 'SAO TOME AND PRINCIPE'
    },
    sv: {
        lang: 'es',
        upper: 'CSZ',
        sub_zipexs: 'CP 2101~CP 1201~CP 1301~CP 1401~CP 1501~CP 1601~CP 3101~CP 3201~CP 3301~CP 1101~CP 1701~CP 2201~CP 2301~CP 3401',
        zipex: 'CP 1101',
        name: 'EL SALVADOR',
        zip: 'CP [1-3][1-7][0-2]\\d',
        require: 'ACS',
        fmt: '%N%n%O%n%A%n%Z-%C%n%S',
        languages: 'es',
        sub_keys: 'AHUACHAPAN~CABANAS~CALATENANGO~CUSCATLAN~LA LIBERTAD~LA PAZ~LA UNION~MORAZAN~SAN MIGUEL~SAN SALVADOR~SAN VICENTE~SANTA ANA~SONSONATE~USULUTAN',
        key: 'SV',
        sub_isoids: 'AH~CA~CH~CU~LI~PA~UN~MO~SM~SS~SV~SA~SO~US',
        id: 'data/SV',
        sub_names: 'Ahuachapán~Cabañas~Chalatenango~Cuscatlán~La Libertad~La Paz~La Unión~Morazán~San Miguel~San Salvador~San Vicente~Santa Ana~Sonsonate~Usulután',
        sub_zips: 'CP 21~CP 12~CP 13~CP 14~CP 15~CP 16~CP 31~CP 32~CP 33~CP 11~CP 17~CP 22~CP 23~CP 34'
    },
    sz: {
        upper: 'ACZ',
        zipex: 'H100',
        name: 'SWAZILAND',
        zip: '[HLMS]\\d{3}',
        fmt: '%N%n%O%n%A%n%C%n%Z',
        key: 'SZ',
        posturl: 'http://www.sptc.co.sz/swazipost/codes.php',
        id: 'data/SZ'
    },
    ta: {
        key: 'TA',
        zipex: 'TDCU 1ZZ',
        id: 'data/TA',
        zip: 'TDCU 1ZZ',
        name: 'TRISTAN DA CUNHA'
    },
    tc: {
        upper: 'CZ',
        zipex: 'TKCA 1ZZ',
        name: 'TURKS AND CAICOS ISLANDS',
        zip: 'TKCA 1ZZ',
        require: 'ACZ',
        fmt: '%N%n%O%n%A%n%X%n%C%n%Z',
        key: 'TC',
        id: 'data/TC'
    },
    td: {
        id: 'data/TD',
        key: 'TD',
        name: 'CHAD'
    },
    tf: {
        id: 'data/TF',
        key: 'TF',
        name: 'FRENCH SOUTHERN TERRITORIES'
    },
    tg: {
        id: 'data/TG',
        key: 'TG',
        name: 'TOGO'
    },
    th: {
        lang: 'th',
        upper: 'S',
        zipex: '10150,10210',
        name: 'THAILAND',
        zip: '\\d{5}',
        fmtCharsets: 'TIS-620',
        fmt: '%N%n%O%n%A%n%C%n%S %Z',
        languages: 'th',
        lfmt: '%N%n%O%n%A%n%C%n%S %Z',
        sub_lnames: 'KRABI~BANGKOK~KANCHANABURI~KALASIN~KAMPHAENG PHET~KHON KAEN~CHANTHABURI~CHACHOENGSAO~CHON BURI~CHAI NAT~CHAIYAPHUM~CHUMPON~CHIANG RAI~CHIANG MAI~TRANG~TRAT~TAK~NAKHON NAYOK~NAKHON PATHOM~NAKHON PHANOM~NAKHON RATCHASIMA~NAKHON SI THAMMARAT~NAKHON SAWAN~NONTHABURI~NARATHIWAT~NAN~BURI RAM~PATHUM THANI~PRACHUAP KHIRI KHAN~PRACHIN BURI~PATTANI~PHRA NAKHON SI AYUTTHAYA~PHAYAO~PHANG NGA~PHATTALUNG~PHICHIT~PHITSANULOK~PHETCHABURI~PHETCHABUN~PHRAE~PHUKET~MAHA SARAKHAM~MUKDAHAN~MAE HONG SON~YASOTHON~YALA~ROI ET~RANONG~RAYONG~RATCHABURI~LOP BURI~LAMPANG~LAMPHUN~LOEI~SI SA KET~SAKON NAKHON~SONGKHLA~SATUN~SAMUT PRAKAN~SAMUT SONGKHRAM~SAMUT SAKHON~SA KAEO~SARABURI~SING BURI~SUKHOTHAI~SUPHANBURI~SURAT THANI~SURIN~NONG KHAI~NONG BUA LAM PHU~ANG THONG~AMNAT CHAROEN~UDON THANI~UTTARADIT~UTHAI THANI~UBON RATCHATHANI',
        sub_keys: 'กระบี่~กรุงเทพมหานคร~กาญจนบุรี~กาฬสินธุ์~กำแพงเพชร~ขอนแก่น~จันทบุรี~ฉะเชิงเทรา~ชลบุรี~ชัยนาท~ชัยภูมิ~ชุมพร~เชียงราย~เชียงใหม่~ตรัง~ตราด~ตาก~นครนายก~นครปฐม~นครพนม~นครราชสีมา~นครศรีธรรมราช~นครสวรรค์~นนทบุรี~นราธิวาส~น่าน~บุรีรัมย์~ปทุมธานี~ประจวบคีรีขันธ์~ปราจีนบุรี~ปัตตานี~พระนครศรีอยุธยา~พะเยา~พังงา~พัทลุง~พิจิตร~พิษณุโลก~เพชรบุรี~เพชรบูรณ์~แพร่~ภูเก็ต~มหาสารคาม~มุกดาหาร~แม่ฮ่องสอน~ยโสธร~ยะลา~ร้อยเอ็ด~ระนอง~ระยอง~ราชบุรี~ลพบุรี~ลำปาง~ลำพูน~เลย~ศรีสะเกษ~สกลนคร~สงขลา~สตูล~สมุทรปราการ~สมุทรสงคราม~สมุทรสาคร~สระแก้ว~สระบุรี~สิงห์บุรี~สุโขทัย~สุพรรณบุรี~สุราษฎร์ธานี~สุรินทร์~หนองคาย~หนองบัวลำภู~อ่างทอง~อำนาจเจริญ~อุดรธานี~อุตรดิตถ์~อุทัยธานี~อุบลราชธานี',
        key: 'TH',
        sub_isoids: '81~10~71~46~62~40~22~24~20~18~36~86~57~50~92~23~63~26~73~48~30~80~60~12~96~55~31~13~77~25~94~14~56~82~93~66~65~76~67~54~83~44~49~58~35~95~45~85~21~70~16~52~51~42~33~47~90~91~11~75~74~27~19~17~64~72~84~32~43~39~15~37~41~53~61~34',
        id: 'data/TH',
        sub_zips: '81~10~71~46~62~40~22~24~20~17~36~86~57~50~92~23~63~26~73~48~30~80~60~11~96~55~31~12~77~25~94~13~56~82~93~66~65~76~67~54~83~44~49~58~35~95~45~85~21~70~15~52~51~42~33~47~90~91~10~75~74~27~18~16~64~72~84~32~43~39~14~37~41~53~61~34'
    },
    tj: {
        zipex: '735450,734025',
        name: 'TAJIKISTAN',
        zip: '\\d{6}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'TJ',
        id: 'data/TJ'
    },
    tk: {
        id: 'data/TK',
        key: 'TK',
        name: 'TOKELAU'
    },
    tl: {
        id: 'data/TL',
        key: 'TL',
        name: 'TIMOR-LESTE'
    },
    tm: {
        zipex: '744000',
        name: 'TURKMENISTAN',
        zip: '\\d{6}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'TM',
        id: 'data/TM'
    },
    tn: {
        zipex: '1002,8129,3100,1030',
        posturl: 'http://www.poste.tn/codes.php',
        zip: '\\d{4}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'TN',
        id: 'data/TN',
        name: 'TUNISIA'
    },
    to: {
        id: 'data/TO',
        key: 'TO',
        name: 'TONGA'
    },
    tr: {
        zipex: '01960,06101',
        name: 'TURKEY',
        zip: '\\d{5}',
        require: 'ACZ',
        id: 'data/TR',
        key: 'TR',
        posturl: 'http://postakodu.ptt.gov.tr/',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    tt: {
        id: 'data/TT',
        key: 'TT',
        name: 'TRINIDAD AND TOBAGO'
    },
    tv: {
        lang: 'tyv',
        upper: 'ACS',
        name: 'TUVALU',
        fmt: '%N%n%O%n%A%n%X%n%C%n%S',
        state_name_type: 'island',
        languages: 'tyv',
        sub_keys: 'FUNAFUTI~NANUMANGA~NANUMEA~NIULAKITA~NIUTAO~NUI~NUKUFETAU~NUKULAELAE~VAITUPU',
        key: 'TV',
        sub_isoids: 'FUN~NMG~NMA~~NIT~NUI~NKF~NKL~VAI',
        id: 'data/TV'
    },
    tw: {
        lang: 'zh-hant',
        sub_zipexs: '400,408:411,439~100,119~950,966~700,745~260,272~970,983~890,896~540,558~900,947~350,369~320,338~800,815:817,852~200,206~209,212~630,655~207,208:220,253~~302,315~~602,625~500,530~880,885',
        zipex: '104,106,10603,40867',
        name: 'TAIWAN',
        zip: '\\d{3}(\\d{2})?',
        sub_mores: 'true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~true~false~true~false~true~true~true',
        fmtCharsets: 'Big5',
        require: 'ACSZ',
        fmt: '%Z%n%S%C%n%A%n%O%n%N',
        state_name_type: 'county',
        languages: 'zh-hant',
        lfmt: '%N%n%O%n%A%n%C, %S %Z',
        sub_lnames: 'Taichung City~Taipei City~Taitung County~Tainan City~Yilan County~Hualien County~Kinmen County~Nantou County~Pingtung County~Miaoli County~Taoyuan County~Kaohsiung City~Keelung City~Lienchiang County~Yunlin County~New Taipei City~Hsinchu City~Hsinchu County~Chiayi City~Chiayi County~Changhua County~Penghu County',
        sub_keys: '台中市~台北市~台東縣~台南市~宜蘭縣~花蓮縣~金門縣~南投縣~屏東縣~苗栗縣~桃園縣~高雄市~基隆市~連江縣~雲林縣~新北市~新竹市~新竹縣~嘉義市~嘉義縣~彰化縣~澎湖縣',
        key: 'TW',
        sub_isoids: 'TXG~TPE~TTT~TNN~ILA~HUA~~NAN~PIF~MIA~TAO~KHH~KEE~~YUN~TPQ~HSZ~HSQ~CYI~CYQ~CHA~PEN',
        posturl: 'http://www.post.gov.tw/post/internet/f_searchzone/index.jsp?ID=190102',
        id: 'data/TW',
        sub_zips: '4[0-3]~1[01]~9[56]~7[0-4]~2[67]~9[78]~89~5[45]~9[0-4]~3[56]~3[23]~8[02-5]|81[1-579]~20[0-6]~209|21[012]~6[3-5]~20[78]|2[2345]~300~30[2-8]|31~600~60[1-9]|6[12]~5[0123]~88'
    },
    tz: {
        key: 'TZ',
        zipex: '6090',
        id: 'data/TZ',
        zip: '\\d{4}',
        name: 'TANZANIA (UNITED REP.)'
    },
    ua: {
        zipex: '15432,01055,01001',
        posturl: 'http://services.ukrposhta.com/postindex_new/',
        zip: '\\d{5}',
        fmt: '%Z %C%n%A%n%O%n%N',
        key: 'UA',
        id: 'data/UA',
        name: 'UKRAINE'
    },
    ug: {
        id: 'data/UG',
        key: 'UG',
        name: 'UGANDA'
    },
    um: {
        upper: 'ACNOS',
        zipex: '96898',
        name: 'UNITED STATES MINOR OUTLYING ISLANDS',
        zip_name_type: 'zip',
        require: 'ACS',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'UM',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/UM'
    },
    us: {
        lang: 'en',
        upper: 'CS',
        sub_zipexs: '35000,36999~99500,99999~96799~85000,86999~71600,72999~34000,34099~09000,09999~96200,96699~90000,96199~80000,81999~06000,06999~19700,19999~20000,20099:20200,20599:56900,56999~32000,33999:34100,34999~30000,31999:39800,39899:39901~96910,96932~96700,96798:96800,96899~83200,83999~60000,62999~46000,47999~50000,52999~66000,67999~40000,42799~70000,71599~03900,04999~96960,96979~20600,21999~01000,02799:05501:05544~48000,49999~96941,96944~55000,56799~38600,39799~63000,65999~59000,59999~68000,69999~88900,89999~03000,03899~07000,08999~87000,88499~10000,14999:06390:00501:00544~27000,28999~58000,58999~96950,96952~43000,45999~73000,74999~97000,97999~96940~15000,19699~00600,00799:00900,00999~02800,02999~29000,29999~57000,57999~37000,38599~75000,79999:88500,88599:73301:73344~84000,84999~05000,05999~00800,00899~20100,20199:22000,24699~98000,99499~24700,26999~53000,54999~82000,83199:83414',
        zipex: '95014,22162-1010',
        name: 'UNITED STATES',
        zip: '\\d{5}([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        languages: 'en',
        sub_keys: 'AL~AK~AS~AZ~AR~AA~AE~AP~CA~CO~CT~DE~DC~FL~GA~GU~HI~ID~IL~IN~IA~KS~KY~LA~ME~MH~MD~MA~MI~FM~MN~MS~MO~MT~NE~NV~NH~NJ~NM~NY~NC~ND~MP~OH~OK~OR~PW~PA~PR~RI~SC~SD~TN~TX~UT~VT~VI~VA~WA~WV~WI~WY',
        key: 'US',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/US',
        sub_names: 'Alabama~Alaska~American Samoa~Arizona~Arkansas~Armed Forces (AA)~Armed Forces (AE)~Armed Forces (AP)~California~Colorado~Connecticut~Delaware~District of Columbia~Florida~Georgia~Guam~Hawaii~Idaho~Illinois~Indiana~Iowa~Kansas~Kentucky~Louisiana~Maine~Marshall Islands~Maryland~Massachusetts~Michigan~Micronesia~Minnesota~Mississippi~Missouri~Montana~Nebraska~Nevada~New Hampshire~New Jersey~New Mexico~New York~North Carolina~North Dakota~Northern Mariana Islands~Ohio~Oklahoma~Oregon~Palau~Pennsylvania~Puerto Rico~Rhode Island~South Carolina~South Dakota~Tennessee~Texas~Utah~Vermont~Virgin Islands~Virginia~Washington~West Virginia~Wisconsin~Wyoming',
        sub_zips: '3[56]~99[5-9]~96799~8[56]~71[6-9]|72~340~09~96[2-6]~9[0-5]|96[01]~8[01]~06~19[7-9]~20[02-5]|569~3[23]|34[1-9]~3[01]|398|39901~969([1-2]\\d|3[12])~967[0-8]|9679[0-8]|968~83[2-9]~6[0-2]~4[67]~5[0-2]~6[67]~4[01]|42[0-7]~70|71[0-5]~039|04~969[67]~20[6-9]|21~01|02[0-7]|05501|05544~4[89]~9694[1-4]~55|56[0-7]~38[6-9]|39[0-7]~6[3-5]~59~6[89]~889|89~03[0-8]~0[78]~87|88[0-4]~1[0-4]|06390|00501|00544~2[78]~58~9695[0-2]~4[3-5]~7[34]~97~969(39|40)~1[5-8]|19[0-6]~00[679]~02[89]~29~57~37|38[0-5]~7[5-9]|885|73301|73344~84~05~008~201|2[23]|24[0-6]~98|99[0-4]~24[7-9]|2[56]~5[34]~82|83[01]|83414'
    },
    uy: {
        lang: 'es',
        upper: 'CS',
        zipex: '11600',
        name: 'URUGUAY',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C %S',
        languages: 'es',
        sub_keys: 'ARTIGAS~CANELONES~CERRO LARGO~COLONIA~DURAZNO~FLORES~FLORIDA~LAVALLEJA~MALDONADO~MONTEVIDEO~PAYSANDÚ~RÍO NEGRO~RIVERA~ROCHA~SALTO~SAN JOSÉ~SORIANO~TACUAREMBÓ~TREINTA Y TRES',
        key: 'UY',
        sub_isoids: 'AR~CA~CL~CO~DU~FS~FD~LA~MA~MO~PA~RN~RV~RO~SA~SJ~SO~TA~TT',
        posturl: 'http://www.correo.com.uy/index.asp?codPag=codPost&switchMapa=codPost',
        id: 'data/UY',
        sub_zips: '55~9[01]|1[456]~37~70|75204~97~85~94|9060|97005~30~20~1|91600~60~65|60002~40~27~50~80~75|70003~45~33|30203|30204|30302|37007'
    },
    uz: {
        upper: 'CS',
        zipex: '702100,700000',
        name: 'UZBEKISTAN',
        zip: '\\d{6}',
        fmt: '%N%n%O%n%A%n%Z %C%n%S',
        key: 'UZ',
        posturl: 'http://www.pochta.uz/index.php/uz/pochta-indekslari/9',
        id: 'data/UZ'
    },
    va: {
        zipex: '00120',
        name: 'VATICAN',
        zip: '00120',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'VA',
        id: 'data/VA'
    },
    vc: {
        zipex: 'VC0100,VC0110,VC0400',
        posturl: 'http://www.svgpost.gov.vc/?option=com_content&view=article&id=3&Itemid=16',
        zip: 'VC\\d{4}',
        key: 'VC',
        id: 'data/VC',
        name: 'SAINT VINCENT AND THE GRENADINES (ANTILLES)'
    },
    ve: {
        lang: 'es',
        upper: 'CS',
        zipex: '1010,3001,8011,1020',
        name: 'VENEZUELA',
        zip: '\\d{4}',
        require: 'ACS',
        fmt: '%N%n%O%n%A%n%C %Z, %S',
        languages: 'es',
        sub_keys: 'Amazonas~Anzoátegui~Apure~Aragua~Barinas~Bolívar~Carabobo~Cojedes~Delta Amacuro~Dependencias Federales~Distrito Federal~Falcón~Guárico~Lara~Mérida~Miranda~Monagas~Nueva Esparta~Portuguesa~Sucre~Táchira~Trujillo~Vargas~Yaracuy~Zulia',
        key: 'VE',
        sub_isoids: 'Z~B~C~D~E~F~G~H~Y~W~A~I~J~K~L~M~N~O~P~R~S~T~X~U~V',
        posturl: 'http://www.ipostel.gob.ve/nlinea/codigo_postal.php',
        id: 'data/VE'
    },
    vg: {
        zipex: 'VG1110,VG1150,VG1160',
        name: 'VIRGIN ISLANDS (BRITISH)',
        zip: 'VG\\d{4}',
        require: 'A',
        key: 'VG',
        id: 'data/VG'
    },
    vi: {
        upper: 'ACNOS',
        zipex: '00802-1222,00850-9802',
        name: 'VIRGIN ISLANDS (U.S.)',
        zip: '008(([0-4]\\d)|(5[01]))([ \\-]\\d{4})?',
        zip_name_type: 'zip',
        require: 'ACSZ',
        fmt: '%N%n%O%n%A%n%C %S %Z',
        state_name_type: 'state',
        key: 'VI',
        posturl: 'http://zip4.usps.com/zip4/welcome.jsp',
        id: 'data/VI'
    },
    vn: {
        lang: 'vi',
        zipex: '119415,136065,720344',
        name: 'VIET NAM',
        zip: '\\d{6}',
        require: 'AC',
        fmt: '%N%n%O%n%A%n%C%n%S',
        languages: 'vi',
        lfmt: '%N%n%O%n%A%n%C%n%S',
        sub_lnames: 'AN GIANG PROVINCE~BA RIA-VUNG TAU PROVINCE~BAC GIANG PROVINCE~BAC KAN PROVINCE~BAC LIEU PROVINCE~BAC NINH PROVINCE~BEN TRE PROVINCE~BINH DUONG PROVINCE~BINH DINH PROVINCE~BINH PHUOC PROVINCE~BINH THUAN PROVINCE~CA MAU PROVINCE~CAO BANG PROVINCE~CAN THO CITY~DA NANG CITY~DAK LAK PROVINCE~DAK NONG PROVINCE~DIEN BIEN PROVINCE~DONG NAI PROVINCE~DONG THAP PROVINCE~GIA LAI PROVINCE~HA GIANG PROVINCE~HA NAM PROVINCE~HANOI CITY~HA TAY PROVINCE~HA TINH PROVINCE~HAI DUONG PROVINCE~HAIPHONG CITY~HAU GIANG PROVINCE~HOA BINH PROVINCE~HUNG YEN PROVINCE~KHANH HOA PROVINCE~KIEN GIANG PROVINCE~KON TUM PROVINCE~LAI CHAU PROVINCE~LANG SONG PROVINCE~LAO CAI PROVINCE~LAM DONG PROVINCE~LONG AN PROVINCE~NAM DINH PROVINCE~NGHE AN PROVINCE~NINH BINH PROVINCE~NINH THUAN PROVINCE~PHU THO PROVINCE~PHU YEN PROVINCE~QUANG BINH PROVINCE~QUANG NAM PROVINCE~QUANG NGAI PROVINCE~QUANG NINH PROVINCE~QUANG TRI PROVINCE~SOC TRANG PROVINCE~SON LA PROVINCE~TAY NINH PROVINCE~THAI BINH PROVINCE~THAI NGUYEN PROVINCE~THANH HOA PROVINCE~HO CHI MINH CITY~THUA THIEN-HUE PROVINCE~TIEN GIANG PROVINCE~TRA VINH PROVINCE~TUYEN QUANG PROVINCE~VINH LONG PROVINCE~VINH PHUC PROVINCE~YEN BAI PROVINCE',
        sub_keys: 'An Giang~Bà Rịa–Vũng Tàu~Bắc Giang~Bắc Kạn~Bắc Lieu~Bắc Ninh~Bến Tre~Bình Dương~Bình Định~Bình Phước~Bình Thuận~Cà Mau~Cao Bằng~Cần Thơ~Đà Nẵng~Đắk Lắk~Đăk Nông~Điện Biên~Đồng Nai~Đồng Tháp~Gia Lai~Hà Giang~Hà Nam~Hà Nội~Hà Tây~Hà Tĩnh~Hải Dương~Hải Phòng~Hậu Giang~Hòa Bình~Hưng Yên~Khánh Hòa~Kiên Giang~Kon Tum~Lai Châu~Lạng Sơn~Lào Cai~Lâm Đồng~Long An~Nam Định~Nghệ An~Ninh Bình~Ninh Thuận~Phú Thọ~Phú Yên~Quảng Bình~Quảng Nam~Quảng Ngãi~Quảng Ninh~Quảng Trị~Sóc Trăng~Sơn La~Tây Ninh~Thái Bình~Thái Nguyên~Thanh Hóa~Thành phố Hồ Chí Minh~Thừa Thiên–Huế~Tiền Giang~Trà Vinh~Tuyên Quang~Vĩnh Long~Vĩnh Phúc~Yên Bái',
        key: 'VN',
        sub_isoids: '44~43~54~53~55~56~50~57~31~58~40~59~04~48~60~33~72~71~39~45~30~03~63~64~15~23~61~62~73~14~66~34~47~28~01~09~02~35~41~67~22~18~36~68~32~24~27~29~13~25~52~05~37~20~69~21~65~26~46~51~07~49~70~06',
        posturl: 'http://postcode.vnpost.vn/services/search.aspx',
        id: 'data/VN'
    },
    vu: {
        id: 'data/VU',
        key: 'VU',
        name: 'VANUATU'
    },
    wf: {
        upper: 'ACX',
        zipex: '98600',
        name: 'WALLIS AND FUTUNA ISLANDS',
        zip: '986\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'WF',
        id: 'data/WF'
    },
    ws: {
        id: 'data/WS',
        key: 'WS',
        name: 'SAMOA'
    },
    ye: {
        require: 'AC',
        id: 'data/YE',
        key: 'YE',
        name: 'YEMEN'
    },
    yt: {
        upper: 'ACX',
        zipex: '97600',
        name: 'MAYOTTE',
        zip: '976\\d{2}',
        require: 'ACZ',
        fmt: '%O%n%N%n%A%n%Z %C %X',
        key: 'YT',
        id: 'data/YT'
    },
    yu: {
        zipex: '11001',
        name: 'SERBIA AND MONTENEGRO',
        zip: '\\d{5}',
        fmt: '%N%n%O%n%A%n%Z %C',
        key: 'YU',
        id: 'data/YU'
    },
    za: {
        zipex: '0083,1451,0001',
        name: 'SOUTH AFRICA',
        zip: '\\d{4}',
        require: 'ACZ',
        id: 'data/ZA',
        key: 'ZA',
        posturl: 'http://www.postoffice.co.za/tools/postalcode.html',
        fmt: '%N%n%O%n%A%n%C%n%Z'
    },
    zm: {
        zipex: '50100,50101',
        name: 'ZAMBIA',
        zip: '\\d{5}',
        require: 'AC',
        id: 'data/ZM',
        key: 'ZM',
        fmt: '%N%n%O%n%A%n%Z %C'
    },
    zw: {
        id: 'data/ZW',
        key: 'ZW',
        name: 'ZIMBABWE'
    }
};