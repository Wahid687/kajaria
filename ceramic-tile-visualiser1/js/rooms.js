var _0x2ff456 = _0x242c;
(function(_0x1722ae, _0x4dc0ad) {
    var _0x248f32 = _0x242c,
        _0x3bf470 = _0x1722ae();
    while (!![]) {
        try {
            var _0x166ec3 = parseInt(_0x248f32(0x18c)) / 0x1 * (parseInt(_0x248f32(0x1dd)) / 0x2) + parseInt(_0x248f32(0x1c4)) / 0x3 + -parseInt(_0x248f32(0x182)) / 0x4 * (parseInt(_0x248f32(0x205)) / 0x5) + parseInt(_0x248f32(0x20e)) / 0x6 * (-parseInt(_0x248f32(0x215)) / 0x7) + -parseInt(_0x248f32(0x218)) / 0x8 * (parseInt(_0x248f32(0x22b)) / 0x9) + parseInt(_0x248f32(0x194)) / 0xa + parseInt(_0x248f32(0x222)) / 0xb;
            if (_0x166ec3 === _0x4dc0ad) break;
            else _0x3bf470['push'](_0x3bf470['shift']());
        } catch (_0x3d67ea) {
            _0x3bf470['push'](_0x3bf470['shift']());
        }
    }
}(_0x1522, 0x514b0));
var pdfdetails = [];
document[_0x2ff456(0x189)]('sideBar')[_0x2ff456(0x200)][_0x2ff456(0x221)] = _0x2ff456(0x1db);
var defaultpdfinfo, pdfobject, flagforloader = 0x0,
    doc, dcanvas, defaultmeshes, defaultmaterials = [],
    downloadisclicked = 0x0,
    linkofimg = null,
    layoutno = 0x0,
    applyDefaultTexture = function(_0x27ce7e) {};
url = new URL(window[_0x2ff456(0x180)][_0x2ff456(0x1c1)]), openModel = '', openLocation = '', openTile = '';
var openlayout = '';
url['searchParams'][_0x2ff456(0x19f)]('m') && (openModel = url[_0x2ff456(0x191)]['get']('m'), document[_0x2ff456(0x189)](_0x2ff456(0x1ae))[_0x2ff456(0x200)][_0x2ff456(0x221)] = _0x2ff456(0x1db));
url[_0x2ff456(0x191)][_0x2ff456(0x19f)]('l') && (openlayout = url[_0x2ff456(0x191)][_0x2ff456(0x198)]('l'), document[_0x2ff456(0x189)](_0x2ff456(0x1ae))[_0x2ff456(0x200)]['display'] = 'none');
url[_0x2ff456(0x191)][_0x2ff456(0x19f)]('uid') && (openTile = url['searchParams'][_0x2ff456(0x198)]('uid'), document[_0x2ff456(0x189)]('selectRoom')[_0x2ff456(0x200)]['display'] = _0x2ff456(0x1db));

function _0x242c(_0x2e92a2, _0x520ca9) {
    var _0x15221c = _0x1522();
    return _0x242c = function(_0x242c77, _0x136c67) {
        _0x242c77 = _0x242c77 - 0x180;
        var _0x4affd7 = _0x15221c[_0x242c77];
        return _0x4affd7;
    }, _0x242c(_0x2e92a2, _0x520ca9);
}
document[_0x2ff456(0x189)](_0x2ff456(0x192))['style'][_0x2ff456(0x221)] = _0x2ff456(0x1db), document[_0x2ff456(0x189)](_0x2ff456(0x1c9))[_0x2ff456(0x200)][_0x2ff456(0x221)] = _0x2ff456(0x1db), document[_0x2ff456(0x189)]('fab')[_0x2ff456(0x200)]['display'] = 'none', document[_0x2ff456(0x189)](_0x2ff456(0x203))['style'][_0x2ff456(0x221)] = _0x2ff456(0x1db), document[_0x2ff456(0x189)](_0x2ff456(0x1d5))[_0x2ff456(0x200)][_0x2ff456(0x221)] = _0x2ff456(0x1db), document[_0x2ff456(0x189)]('help')[_0x2ff456(0x200)][_0x2ff456(0x221)] = _0x2ff456(0x1db), document[_0x2ff456(0x189)](_0x2ff456(0x1e3))[_0x2ff456(0x200)][_0x2ff456(0x221)] = _0x2ff456(0x1db), document[_0x2ff456(0x189)]('sideBlock')['style'][_0x2ff456(0x1a1)]('display'), document[_0x2ff456(0x189)]('openSelectRooms')['onclick'] = function() {
    var _0x3fd0c4 = _0x2ff456,
        _0x1ba68a = document[_0x3fd0c4(0x189)]('visualizer')[_0x3fd0c4(0x200)][_0x3fd0c4(0x221)];
    _0x1ba68a == _0x3fd0c4(0x193) || _0x1ba68a == '' ? (document[_0x3fd0c4(0x189)](_0x3fd0c4(0x192))[_0x3fd0c4(0x200)]['display'] = _0x3fd0c4(0x1db), document[_0x3fd0c4(0x189)]('sideBar')[_0x3fd0c4(0x200)][_0x3fd0c4(0x221)] = _0x3fd0c4(0x1db), document['getElementById']('fab')['style'][_0x3fd0c4(0x221)] = _0x3fd0c4(0x1db), document[_0x3fd0c4(0x189)](_0x3fd0c4(0x19e))[_0x3fd0c4(0x200)]['display'] = _0x3fd0c4(0x1db), document[_0x3fd0c4(0x189)](_0x3fd0c4(0x1e3))[_0x3fd0c4(0x200)][_0x3fd0c4(0x221)] = 'none') : (document['getElementById']('visualizer')['style'][_0x3fd0c4(0x221)] = 'block', document[_0x3fd0c4(0x189)](_0x3fd0c4(0x1e3))['style']['display'] = 'none');
};

function opencarousel() {}

function openaddcart() {}

function openVis() {
    var _0x37b380 = _0x2ff456;
    document[_0x37b380(0x189)](_0x37b380(0x192))[_0x37b380(0x200)][_0x37b380(0x221)] = _0x37b380(0x193), document['getElementById'](_0x37b380(0x1ae))[_0x37b380(0x200)][_0x37b380(0x221)] = _0x37b380(0x1db);
}

function showimage(_0x9e3967) {
    var _0x1304ef = _0x2ff456;
    console['log'](_0x9e3967), document[_0x1304ef(0x189)](_0x1304ef(0x22e))[_0x1304ef(0x213)] = _0x1304ef(0x1dc) + _0x9e3967 + _0x1304ef(0x1e0);
}

function loader() {
    var _0x135176 = _0x2ff456;
    console[_0x135176(0x1ec)](_0x135176(0x1d2)), document['getElementById']('loadimg')['style'][_0x135176(0x221)] = _0x135176(0x193);
    let _0x306cd5 = 0x0;
    setTimeout(function() {
        var _0x4beb50 = _0x135176;
        showimage(_0x4beb50(0x21c));
    }, _0x306cd5), _0x306cd5 = _0x306cd5 + 0x7d0, setTimeout(function() {
        var _0x5244ba = _0x135176;
        showimage(_0x5244ba(0x1bd));
    }, _0x306cd5), _0x306cd5 = _0x306cd5 + 0x7d0, setTimeout(function() {
        var _0x4a73c8 = _0x135176;
        showimage(_0x4a73c8(0x1ff));
    }, _0x306cd5), _0x306cd5 = _0x306cd5 + 0x7d0, setTimeout(function() {
        var _0x43637a = _0x135176;
        showimage(_0x43637a(0x1b2));
    }, _0x306cd5), _0x306cd5 = _0x306cd5 + 0x7d0;
    var _0x117c75 = setInterval(function() {
        var _0x551c57 = _0x135176;
        flagforloader == 0x1 && (document[_0x551c57(0x189)](_0x551c57(0x22e))[_0x551c57(0x200)][_0x551c57(0x221)] = 'none', document[_0x551c57(0x189)](_0x551c57(0x206))['style'][_0x551c57(0x221)] = _0x551c57(0x1db), clearInterval(_0x117c75));
    }, _0x306cd5);
}
var changeTileAngle = function(_0x1aee65) {},
    changeGroutWidth = function(_0x15ca3b) {},
    changeGroutColor = function(_0x43806d) {},
    changeTileLayout = function(_0xdb4ad9) {},
    ChangeTexture = function(_0x15fd89) {},
    setDecal = function() {},
    setDecall = function() {},
    moveDecal = function() {},
    clearDecals = function() {},
    downloadInit = function() {},
    gizmoScaled = function() {},
    decreaseDecalTilingHorizontal = function() {},
    increaseDecalTilingHorizontal = function() {},
    decreaseDecalTilingVertical = function() {},
    increaseDecalTilingVertical = function() {},
    moveuplus = function() {},
    moveuminus = function() {},
    movevplus = function() {},
    movevminus = function() {},
    conceptDecal = function() {},
    buttonchanges = function() {},
    buttonchange = function() {},
    buttonchanges1 = function() {},
    searchimage11 = function() {},
    filterByType = function(_0x296855) {},
    filterByCatalogue = function(_0x59f20c) {},
    filterBySize = function(_0x486f7f, _0x1e9ea4) {},
    filterByFinish = function(_0x5094cd) {},
    sortBy = function(_0x393221) {},
    searchTile = function(_0x1c2b00) {},
    roombyfilter = function(_0x185cbd) {},
    searchRoom = function(_0x2546a4) {},
    areaByType = function(_0x3f40ed) {},
    typeFilter = null,
    roomFilter = null,
    CatalogueFilter = null,
    sizeXFilter = null,
    sizeYFilter = null,
    finishFilter = null,
    areaFilter = null,
    sortByType = null,
    searchByText = null,
    searchbyroom = null;

function updateDetailSection(_0x539e81, _0x8f2b0e, _0x13cdd4, _0x19e779, _0x345619) {
    var _0x24d526 = _0x2ff456;
    document['getElementById'](_0x24d526(0x1eb))['innerHTML'] = _0x539e81, document['getElementById'](_0x24d526(0x1fd))[_0x24d526(0x213)] = _0x8f2b0e, document[_0x24d526(0x189)]('indettype')[_0x24d526(0x213)] = _0x13cdd4, document[_0x24d526(0x189)](_0x24d526(0x196))['innerHTML'] = _0x19e779, document[_0x24d526(0x189)]('indetsrc')[_0x24d526(0x1a3)] = _0x345619, document[_0x24d526(0x189)](_0x24d526(0x207))[_0x24d526(0x1b6)](_0x24d526(0x226), _0x24d526(0x1f1) + _0x539e81 + ')');
}

function buttonnchanges1() {
    var _0x18b508 = _0x2ff456,
        _0x48a0c2 = document[_0x18b508(0x189)](_0x18b508(0x1e3))[_0x18b508(0x200)][_0x18b508(0x221)];
    _0x48a0c2 == _0x18b508(0x193) || _0x48a0c2 == '' ? document[_0x18b508(0x189)]('myCarousel')[_0x18b508(0x200)][_0x18b508(0x221)] = 'none' : document[_0x18b508(0x189)](_0x18b508(0x1e3))[_0x18b508(0x200)][_0x18b508(0x221)] = _0x18b508(0x193);
}
var viewFrames = [],
    viewSeats = [],
    viewRooms = [],
    index = 0x0,
    isSettingDecal = ![],
    isMovingDecal = ![];

function _0x1522() {
    var _0x1a551f = ['ChangeTextureToID(', 'Finish', 'Image', 'assets/images/model/bath1/', 'attr', 'series1', '(11ft\x20X\x209ft)', 'Name', 'split', 'Cartttype', '##dettype##', 'meshname', 'indetname', 'Type', 'joystic', 'style', 'Xscale', 'Carttsrc', 'cartbox', 'title', '3855LxnCxM', 'customLoadingScreenDiv', 'indetopentile', 'assets/images/model/Thumbnail/Living\x20room2.png', 'Thumbnail', 'Yscale', '#rooms-template2', 'FRAME\x20FINISH\x20OPTIONS', 'materials', '1230AzRtQy', 'html', 'empty', 'rooms', 'last', 'innerHTML', 'windows_os', '10822zKFOAB', '##startend##-->', 'Catalogue', '2096sxKVpg', 'includes', 'mac_os', 'tooltip', 'arrow', '.frame.selected', '##carttpid##', 'Ccode', 'Carttname', 'display', '4011392BIteQr', 'slice', 'sort', '.furniture-options', 'onclick', '##id##', 'RandomTiles', 'blind/model_low_graphics/', '##Randvis##', '513TcoeYe', '##carturl##', 'assets/images/model/bath2/', 'loadimg', 'first', 'Carttsize', 'location', 'data-id', '1304uuedaN', '#canvas', 'mobile\x20device', 'dimension', '(17ft\x20X\x2020ft)', 'length', '##thumb##', 'getElementById', 'Carttid', 'Diffsrc', '1OYyvIM', 'assets/images/model/500px/living/', 'splice', 'bed_.gltf', 'Size', 'searchParams', 'visualizer', 'block', '3160170hHssWw', 'thumb', 'indetsize', 'ceil', 'get', 'disabled', 'Url', 'Product_ID', '##carttsrc##', 'options', 'help', 'has', '##carttname##', 'removeProperty', 'ready!', 'src', 'a[data-toggle=\x22tooltip\x22]', 'assets/images/model/Thumbnail/kitchen.png', '#furniture-template', 'filter', 'bath_.gltf', 'ttjgjgkgl', 'Mac\x20OS\x20X', 'push', 'frames3', '##stopend##-->', 'selectRoom', 'indexOf', 'pdfdetails', '##ccode##', 'change', '<!--##stop##', 'type', 'join', 'setAttribute', 'assets/images/model/Bedroom_1/', '##cname##', 'createElement', '#rooms-template', '##dimension##', 'replace', 'click', 'living.gltf', 'Circle021', 'fade', 'href', 'frames4', 'Bedroom', '249645RgytNt', 'Bathroom', 'frames2', 'preventDefault', '##title##', 'lay2', 'cartframes', 'toLowerCase', 'assets/images/model/Thumbnail/bathroom_1.png', 'Living\x20Room', 'option', '##detsrc##', 'appendChild', '(41ft\x20X\x2021ft)', 'Hello', 'userAgent', 'Procode', 'roombox', 'value', 'frames', 'deviceMemory', 'append', 'fhhh', 'none', '<img\x20class=\x27loaderimgs\x27\x20src=\x27assets/images/Blue/', '304564NXhvhS', 'parse', '.seat.selected', '.jpg\x27\x20style=\x27width:\x2070%;\x20height:\x2080%;\x20margin-left:15%;\x20margin-top:1%;\x20\x27>', '.card-image\x20img', '##type##', 'myCarousel', 'kitchen_.gltf', 'Chexnum', 'assets/images/model/Kitchen/', '##carttsize##', 'mirror_', '##cartid##', '<!--##start##', 'indetid', 'log', '##finish##', 'not\x20mobile\x20device', 'error', 'assets/images/model/Thumbnail/bedroom.png'];
    _0x1522 = function() {
        return _0x1a551f;
    };
    return _0x1522();
}
const canvas = $(_0x2ff456(0x183)),
    roomControls = $('.room-options'),
    roomControls2 = $('.room-options2'),
    cartControls = $('.cart-control'),
    furnitureControls = $(_0x2ff456(0x225)),
    selectedFrame = $(_0x2ff456(0x21d)),
    selectedSeat = $(_0x2ff456(0x1df));
var allRooms;
console[_0x2ff456(0x1ec)](_0x2ff456(0x1a2));
const rooms = {
        'title': _0x2ff456(0x20c),
        'id': _0x2ff456(0x211),
        'materials': [{
            'title': _0x2ff456(0x1c5),
            'thumb': _0x2ff456(0x1cc),
            'dimension': _0x2ff456(0x1f7),
            'src': _0x2ff456(0x1a8),
            'path': _0x2ff456(0x1f4),
            'boundBox': {
                'x': [0.3, 0.86],
                'y': [0x0, 0.5],
                'z': [-0x1, 0x1]
            },
            'defaultCamera': {
                'position': {
                    'x': 0.86,
                    'y': 0.5,
                    'z': 0.3
                },
                'rotation': {
                    'x': 0x0,
                    'y': -2.5,
                    'z': 0x0
                }
            },
            'type': _0x2ff456(0x1c5),
            'mirrorMesh': [_0x2ff456(0x1e8)],
            'ref': {
                'x': 0x0,
                'y': 0x0,
                'z': -0x1,
                'ref': -1.55
            },
            'rf': 0.9,
            'gf': 0x5
        }, {
            'title': 'Bedroom',
            'thumb': _0x2ff456(0x1f0),
            'dimension': '(14ft\x20X\x2019ft)',
            'src': _0x2ff456(0x18f),
            'path': _0x2ff456(0x1b7),
            'boundBox': {
                'x': [-0x1, 0x1],
                'y': [1.09, 1.18],
                'z': [0x0, 2.5]
            },
            'defaultCamera': {
                'position': {
                    'x': -0x1,
                    'y': 1.1,
                    'z': 0x0
                },
                'rotation': {
                    'x': 0.2,
                    'y': 2.3,
                    'z': 0x0
                }
            },
            'type': _0x2ff456(0x1c3),
            'rf': 0x1,
            'gf': 0x1
        }, {
            'title': _0x2ff456(0x1c5),
            'thumb': 'assets/images/model/Thumbnail/bathroom2.png',
            'dimension': _0x2ff456(0x186),
            'src': _0x2ff456(0x1a8),
            'path': _0x2ff456(0x22d),
            'boundBox': {
                'x': [-0.8, 1.5],
                'y': [1.3, 1.9],
                'z': [-1.1, 0.8]
            },
            'defaultCamera': {
                'position': {
                    'x': 0.86,
                    'y': 1.5,
                    'z': 0.3
                },
                'rotation': {
                    'x': 0x0,
                    'y': -2.5,
                    'z': 0x0
                }
            },
            'type': 'Bathroom',
            'mirrorMesh': [_0x2ff456(0x1bf)],
            'ref': {
                'x': -0x1,
                'y': 0x0,
                'z': 0x0,
                'ref': -2.72
            },
            'rf': 0.9,
            'gf': 0x5
        }, {
            'title': 'Kitchen',
            'thumb': _0x2ff456(0x1a5),
            'dimension': '(12ft\x20X\x2012ft)',
            'src': _0x2ff456(0x1e4),
            'path': _0x2ff456(0x1e6),
            'boundBox': {
                'x': [-0.5, 0.7],
                'y': [0.8, 1.1],
                'z': [-0.8, 0.9]
            },
            'defaultCamera': {
                'position': {
                    'x': 0.6,
                    'y': 0.8,
                    'z': 0.3
                },
                'rotation': {
                    'x': 0x0,
                    'y': -2.5,
                    'z': 0x0
                }
            },
            'type': 'Kitchen',
            'rf': 0.9,
            'gf': 0x5
        }]
    },
    roomslow = {
        'title': _0x2ff456(0x20c),
        'id': _0x2ff456(0x211),
        'materials': [{
            'title': _0x2ff456(0x1cd),
            'thumb': _0x2ff456(0x208),
            'dimension': _0x2ff456(0x1d1),
            'src': _0x2ff456(0x1be),
            'path': _0x2ff456(0x18d),
            'boundBox': {
                'x': [-0x1, 2.4],
                'y': [-0.4, -0.2],
                'z': [-2.6, 2.5]
            },
            'defaultCamera': {
                'position': {
                    'x': 0.68,
                    'y': -0.3,
                    'z': 0x1
                },
                'rotation': {
                    'x': 0x0,
                    'y': -2.5,
                    'z': 0x0
                }
            },
            'type': 'Living\x20room',
            'rf': 0x1,
            'gf': 0x5
        }]
    };
console['log'](allRooms);
var pccheck, iphone;
let ram = navigator[_0x2ff456(0x1d8)];
console[_0x2ff456(0x1ec)](ram);
navigator[_0x2ff456(0x1d3)][_0x2ff456(0x1af)](_0x2ff456(0x1aa)) != -0x1 ? (console[_0x2ff456(0x1ec)](_0x2ff456(0x21a)), allRooms = roomslow[_0x2ff456(0x20d)], os_path = _0x2ff456(0x229)) : (console[_0x2ff456(0x1ec)](_0x2ff456(0x214)), allRooms = rooms[_0x2ff456(0x20d)], os_path = 'blind/model/');
/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator[_0x2ff456(0x1d3)]) ? (pccheck = 0x0, console['log'](_0x2ff456(0x184)), iphone = 0x1, allRooms = roomslow[_0x2ff456(0x20d)]) : (pccheck = 0x1, console['log'](_0x2ff456(0x1ee)), allRooms = rooms[_0x2ff456(0x20d)]);
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator[_0x2ff456(0x1d3)]) && (pccheck = 0x0);
generateNestedHTML(roomControls, allRooms, $(_0x2ff456(0x1ba))[_0x2ff456(0x20f)]()), generateNestedHTML2(roomControls2, allRooms, $(_0x2ff456(0x20b))[_0x2ff456(0x20f)]()), $(_0x2ff456(0x1a4))[_0x2ff456(0x21b)]({
    'animated': _0x2ff456(0x1c0),
    'placement': 'bottom',
    'html': !![]
}), roomControls['on']('click', _0x2ff456(0x1e1), function() {
    var _0x4d3cd8 = _0x2ff456,
        _0x3e39c7 = $(this)[_0x4d3cd8(0x1f5)]('data-src'),
        _0x52594d = $(this)[_0x4d3cd8(0x1f5)](_0x4d3cd8(0x181));
    updateRoom(viewRooms[_0x52594d]);
});

function generateNestedHTML(_0x50a57b, _0x5906f2, _0xd4a30b) {
    var _0x4d962a = _0x2ff456;
    try {
        _0x5906f2 = JSON[_0x4d962a(0x1de)](_0x5906f2);
    } catch (_0x1cc829) {}
    _0x50a57b != null && _0x50a57b['empty']();
    for (var _0x10928d = 0x0; _0x10928d < _0x5906f2['length']; _0x10928d++) {
        try {
            var _0x1ce768 = _0xd4a30b,
                _0x5d8026 = _0x5906f2[_0x10928d],
                _0x145dee = viewRooms['length'];
            viewRooms[_0x4d962a(0x1ab)](_0x5906f2[_0x10928d]), _0x1ce768 = _0x1ce768[_0x4d962a(0x1bc)]('##thumb##', _0x5906f2[_0x10928d][_0x4d962a(0x195)]), _0x1ce768 = _0x1ce768[_0x4d962a(0x1bc)]('##src##', _0x5906f2[_0x10928d][_0x4d962a(0x1a3)]), _0x1ce768 = _0x1ce768['replace'](_0x4d962a(0x227), _0x145dee), _0x1ce768 = _0x1ce768['replace']('##title##', _0x5906f2[_0x10928d][_0x4d962a(0x204)]), _0x1ce768 = _0x1ce768[_0x4d962a(0x1bc)](_0x4d962a(0x1bb), _0x5906f2[_0x10928d]['dimension']), _0x50a57b['append'](_0x1ce768);
        } catch (_0x3e717c) {
            console[_0x4d962a(0x1ef)](_0x3e717c);
        }
    }
}

function generateNestedHTML2(_0x2d61dc, _0x34f7c5, _0x37da02) {
    var _0x2b82b8 = _0x2ff456;
    try {
        _0x34f7c5 = JSON[_0x2b82b8(0x1de)](_0x34f7c5);
    } catch (_0x1d52b0) {}
    _0x2d61dc != null && _0x2d61dc[_0x2b82b8(0x210)]();
    viewRooms[_0x2b82b8(0x187)] = 0x0;
    for (var _0x4fd962 = 0x0; _0x4fd962 < _0x34f7c5[_0x2b82b8(0x187)]; _0x4fd962++) {
        try {
            var _0x5bd649 = _0x37da02,
                _0x50395a = _0x34f7c5[_0x4fd962],
                _0x2206cd = viewRooms[_0x2b82b8(0x187)];
            viewRooms[_0x2b82b8(0x1ab)](_0x34f7c5[_0x4fd962]), _0x5bd649 = _0x5bd649[_0x2b82b8(0x1bc)](_0x2b82b8(0x188), _0x34f7c5[_0x4fd962]['thumb']), _0x5bd649 = _0x5bd649['replace']('##src##', _0x34f7c5[_0x4fd962]['src']), _0x5bd649 = _0x5bd649[_0x2b82b8(0x1bc)](_0x2b82b8(0x227), _0x2206cd), _0x5bd649 = _0x5bd649['replace'](_0x2b82b8(0x1c8), _0x34f7c5[_0x4fd962][_0x2b82b8(0x204)]), _0x5bd649 = _0x5bd649[_0x2b82b8(0x1bc)](_0x2b82b8(0x1bb), _0x34f7c5[_0x4fd962][_0x2b82b8(0x185)]), _0x2d61dc[_0x2b82b8(0x1d9)](_0x5bd649);
        } catch (_0x144d64) {
            console[_0x2b82b8(0x1ef)](_0x144d64);
        }
    }
}
var roombyfilter = function(_0x36fa16) {
        var _0x56545a = _0x2ff456;
        roomFilter = _0x36fa16, console[_0x56545a(0x1ec)](_0x56545a(0x1da)), updateRoomContainer();
    },
    filterByType = function(_0xc83a15) {
        typeFilter = _0xc83a15, updateFurnitureContainer();
    },
    areaByType = function(_0x361cb3) {
        var _0x56d350 = _0x2ff456;
        areaFilter = _0x361cb3, console[_0x56d350(0x1ec)](_0x56d350(0x1a9)), updatesizeseries(), updateFurnitureContainer();
    },
    filterByCatalogue = function(_0x3011aa) {
        CatalogueFilter = _0x3011aa, updatefinsishsize(), updateFurnitureContainer();
    },
    filterBySize = function(_0x2a648b) {
        var _0x5505c2 = _0x2ff456;
        x = _0x2a648b['split']('x')[0x0], y = _0x2a648b[_0x5505c2(0x1f9)]('x')[0x1], sizeXFilter = x, sizeYFilter = y, updateFurnitureContainer();
    },
    filterByFinish = function(_0x43e0a1) {
        finishFilter = _0x43e0a1, updateFurnitureContainer();
    },
    sortBy = function(_0x57f235) {
        sortByType = _0x57f235, updateFurnitureContainer();
    },
    searchTile = function(_0x42a5cc) {
        searchByText = _0x42a5cc, updateFurnitureContainer();
    },
    searchRoom = function(_0x373ea0) {
        searchbyroom = _0x373ea0, updateRoomContainer();
    };

function checkTileSort(_0xb8e12b) {
    var _0x44e51f = _0x2ff456;
    sortByType == 'az' && _0xb8e12b[_0x44e51f(0x224)]((_0x2e0bdf, _0x945097) => _0x2e0bdf[_0x44e51f(0x1f8)] > _0x945097[_0x44e51f(0x1f8)] ? 0x1 : _0x945097['Name'] > _0x2e0bdf[_0x44e51f(0x1f8)] ? -0x1 : 0x0), sortByType == 'za' && _0xb8e12b[_0x44e51f(0x224)]((_0x1e1877, _0x38c017) => _0x1e1877[_0x44e51f(0x1f8)] < _0x38c017[_0x44e51f(0x1f8)] ? 0x1 : _0x38c017[_0x44e51f(0x1f8)] < _0x1e1877[_0x44e51f(0x1f8)] ? -0x1 : 0x0);
}

function checkroom(_0x2bcbc9) {
    var _0x144216 = _0x2ff456;
    if (roomFilter != null && roomFilter != '') {
        if (_0x2bcbc9['type'][_0x144216(0x1cb)]() != roomFilter['toLowerCase']()) return ![];
    }
    if (searchbyroom != null && searchbyroom != '') {
        if (!_0x2bcbc9[_0x144216(0x1b4)]['toLowerCase']()['includes'](searchbyroom['toLowerCase']())) return ![];
    }
    return !![];
}

function checkareaFilter(_0x300d3c) {
    var _0x2dfd44 = _0x2ff456;
    if (areaFilter != null && areaFilter != '') {
        if (_0x300d3c[_0x2dfd44(0x1fe)]['toLowerCase']() != areaFilter['toLowerCase']()) return ![];
    }
    return !![];
}

function checkcatafilter(_0x72b08c) {
    var _0x43e816 = _0x2ff456;
    if (CatalogueFilter != null && CatalogueFilter != '') {
        if (_0x72b08c[_0x43e816(0x217)] != CatalogueFilter) return ![];
    }
    if (areaFilter != null && areaFilter != '') {
        if (_0x72b08c[_0x43e816(0x1fe)][_0x43e816(0x1cb)]() != areaFilter['toLowerCase']()) return ![];
    }
    return !![];
}

function checkTileFilter(_0x4f6535) {
    var _0x4a69af = _0x2ff456;
    if (areaFilter != null && areaFilter != '') {
        if (_0x4f6535[_0x4a69af(0x1fe)][_0x4a69af(0x1cb)]() != areaFilter[_0x4a69af(0x1cb)]()) return ![];
    }
    if (typeFilter != null && typeFilter != '') {
        if (_0x4f6535[_0x4a69af(0x1fe)][_0x4a69af(0x1cb)]() != typeFilter[_0x4a69af(0x1cb)]()) return ![];
    }
    if (CatalogueFilter != null && CatalogueFilter != '') {
        if (_0x4f6535['Catalogue'] != CatalogueFilter) return ![];
    }
    if (sizeXFilter != null && sizeXFilter != 0x0) {
        if (sizeXFilter != _0x4f6535[_0x4a69af(0x201)]) return ![];
    }
    if (sizeYFilter != null && sizeYFilter != 0x0) {
        if (sizeYFilter != _0x4f6535[_0x4a69af(0x20a)]) return ![];
    }
    if (finishFilter != null && finishFilter != '') {
        if (_0x4f6535['Finish'] != finishFilter) return ![];
    }
    if (searchByText != null && searchByText != '') {
        if (!_0x4f6535['Name'][_0x4a69af(0x1cb)]()[_0x4a69af(0x219)](searchByText[_0x4a69af(0x1cb)]())) return ![];
    }
    return !![];
}

function updatefinsishsize() {
    var _0x370a9e = _0x2ff456,
        _0x10d00c = document[_0x370a9e(0x189)]('finish1'),
        _0x2a444b = _0x10d00c[_0x370a9e(0x19d)][_0x370a9e(0x187)];
    for (_0x2f3613 = _0x2a444b - 0x1; _0x2f3613 > 0x0; _0x2f3613--) {
        _0x10d00c['options'][_0x2f3613] = null;
    }

    function _0xece670(_0x3cc8a6, _0x3332a0) {
        return _0x3cc8a6['reduce']((_0x5d2b13, _0x25ef0e) => {
            var _0x44ea88 = _0x242c;
            return !_0x5d2b13[_0x44ea88(0x219)](_0x25ef0e[_0x3332a0]) && _0x5d2b13['push'](_0x25ef0e[_0x3332a0]), _0x5d2b13;
        }, []);
    };
    if (m3pnotp == 0x1) {
        var _0x418f37 = allFrames2[_0x370a9e(0x1a7)](function(_0x662b2c, _0x141c12, _0x47fa2b) {
                return checkcatafilter(_0x662b2c);
            }),
            _0x3e203c = _0xece670(_0x418f37, _0x370a9e(0x1f2));
        for (var _0x2f3613 = 0x0; _0x2f3613 < _0x3e203c[_0x370a9e(0x187)]; _0x2f3613++) {
            var _0x43d5bd = document[_0x370a9e(0x1b9)](_0x370a9e(0x1ce));
            _0x43d5bd[_0x370a9e(0x1d6)] = _0x3e203c[_0x2f3613], _0x43d5bd['innerHTML'] = _0x3e203c[_0x2f3613], _0x10d00c[_0x370a9e(0x1d0)](_0x43d5bd);
        }
    } else {
        if (m3pnotp == 0x2) {
            var _0x5b2ee0 = allFrames[_0x370a9e(0x1a7)](function(_0x49d47d, _0x139471, _0x515db3) {
                    return checkcatafilter(_0x49d47d);
                }),
                _0x317cde = _0xece670(_0x5b2ee0, 'Finish');
            for (var _0x2f3613 = 0x0; _0x2f3613 < _0x317cde[_0x370a9e(0x187)]; _0x2f3613++) {
                var _0x43d5bd = document[_0x370a9e(0x1b9)](_0x370a9e(0x1ce));
                _0x43d5bd['value'] = _0x317cde[_0x2f3613], _0x43d5bd[_0x370a9e(0x213)] = _0x317cde[_0x2f3613], _0x10d00c[_0x370a9e(0x1d0)](_0x43d5bd);
            }
        }
    }
    filterByFinish('');
}

function updatesizeseries() {
    var _0x4af7ec = _0x2ff456,
        _0x41d350 = document[_0x4af7ec(0x189)]('series1'),
        _0x15e1d5 = _0x41d350[_0x4af7ec(0x19d)]['length'];
    for (_0x490500 = _0x15e1d5 - 0x1; _0x490500 >= 0x0; _0x490500--) {
        _0x41d350['options'][_0x490500] = null;
    }

    function _0x116fcc(_0x518008, _0x462ea1) {
        return _0x518008['reduce']((_0x34dd91, _0x2237b5) => {
            var _0x1e4912 = _0x242c;
            return !_0x34dd91['includes'](_0x2237b5[_0x462ea1]) && _0x34dd91[_0x1e4912(0x1ab)](_0x2237b5[_0x462ea1]), _0x34dd91;
        }, []);
    };
    if (m3pnotp == 0x1) {
        var _0x12b91c = allFrames2[_0x4af7ec(0x1a7)](function(_0x579b5a, _0x19bbe6, _0x5caecc) {
                return checkareaFilter(_0x579b5a);
            }),
            _0x48f8ce = _0x116fcc(_0x12b91c, 'Catalogue');
        console[_0x4af7ec(0x1ec)](_0x48f8ce);
        for (var _0x490500 = 0x0; _0x490500 < _0x48f8ce[_0x4af7ec(0x187)]; _0x490500++) {
            var _0x54f283 = document['createElement']('option');
            _0x54f283[_0x4af7ec(0x1d6)] = _0x48f8ce[_0x490500], _0x54f283[_0x4af7ec(0x213)] = _0x48f8ce[_0x490500], _0x41d350[_0x4af7ec(0x1d0)](_0x54f283);
        }
    } else {
        if (m3pnotp == 0x2) {
            var _0x3488f9 = allFrames[_0x4af7ec(0x1a7)](function(_0x9d0429, _0x5b3ca9, _0x54aac1) {
                    return checkareaFilter(_0x9d0429);
                }),
                _0x59e929 = _0x116fcc(_0x3488f9, _0x4af7ec(0x217));
            console[_0x4af7ec(0x1ec)](_0x59e929);
            for (var _0x490500 = 0x0; _0x490500 < _0x59e929[_0x4af7ec(0x187)]; _0x490500++) {
                var _0x408676 = document[_0x4af7ec(0x1b9)]('option');
                _0x408676[_0x4af7ec(0x1d6)] = _0x59e929[_0x490500], _0x408676[_0x4af7ec(0x213)] = _0x59e929[_0x490500], _0x41d350[_0x4af7ec(0x1d0)](_0x408676);
            }
        }
    }
    filterByCatalogue(document[_0x4af7ec(0x189)](_0x4af7ec(0x1f6))[_0x4af7ec(0x1d6)]);
}

function updateFurnitureContainer() {
    var _0xf93b9 = _0x2ff456;
    if (m3pnotp == 0x1) {
        var _0x4c8d5a = allFrames2[_0xf93b9(0x1a7)](function(_0x251a4f, _0x3064ad, _0x333023) {
            return checkTileFilter(_0x251a4f);
        });
        loadMyPagination(furnitureControls, _0x4c8d5a, $(_0xf93b9(0x1a6))[_0xf93b9(0x20f)]());
    } else {
        if (m3pnotp == 0x2) {
            var _0x581a85 = allFrames[_0xf93b9(0x1a7)](function(_0x422969, _0x18508f, _0x51cd69) {
                return checkTileFilter(_0x422969);
            });
            loadMyPagination(furnitureControls, _0x581a85, $('#furniture-template')[_0xf93b9(0x20f)]());
        } else {
            if (m3pnotp == 0x3) loadMyPagination(furnitureControls, allFrames3, $(_0xf93b9(0x1a6))[_0xf93b9(0x20f)]());
            else m3pnotp == 0x4 && loadMyPagination(furnitureControls, allFrames3, $(_0xf93b9(0x1a6))[_0xf93b9(0x20f)]());
        }
    }
}

function updateRoomContainer() {
    var _0x271766 = _0x2ff456,
        _0x139c84 = allRooms['filter'](function(_0x40815e, _0x119860, _0x2430c9) {
            return checkroom(_0x40815e);
        });
    generateNestedHTML(roomControls, _0x139c84, $('#rooms-template')[_0x271766(0x20f)]());
}
var m3pnotp = 0x0,
    mesh3 = null,
    mesh4 = null,
    mesh5 = null,
    cartframes = {
        'title': _0x2ff456(0x20c),
        'id': _0x2ff456(0x1ca),
        'materials': []
    },
    cartcounts = 0x0,
    allcheckerframes, tilingLayoutOptions = {
        0x0: [0x0],
        0x1: [0x0, 0x1, 0x2, 0x3],
        0x2: [0x0, 0x1, 0x2, 0x3],
        0x3: [0x0],
        0x4: []
    },
    tilingLayoutAngles = {
        0x0: [],
        0x1: [],
        0x2: [],
        0x3: [0x0, 0x5a, 0xb4],
        0x4: [0x0, 0x5a, 0xb4]
    },
    tilingGroutSizes = {
        0x0: [],
        0x1: [],
        0x2: [],
        0x3: [0x0],
        0x4: [0x0]
    },
    decals = [],
    selectedDecal = -0x1,
    mmesh = [],
    RF, GF, linkofroom;

function ChangeTextureToID(_0x5ea8cc) {
    ChangeTexture(viewFrames[_0x5ea8cc]);
}
var groutColorTimeout = null,
    groutColorPickerChanged = function() {
        groutColorTimeout == null ? groutColorTimeout = setTimeout(changeGroutColorCalled, 0x3e8) : (clearTimeout(groutColorTimeout), groutColorTimeout = setTimeout(changeGroutColorCalled, 0x3e8));
    },
    changeGroutColorCalled = function(_0x1f4713) {
        var _0x51d932 = _0x2ff456;
        clearTimeout(groutColorTimeout), groutColorTimeout = null, changeGroutColor(document[_0x51d932(0x189)]('groutColorPicker')[_0x51d932(0x1d6)]);
    },
    cartframes = {
        'title': 'FRAME\x20FINISH\x20OPTIONS',
        'id': _0x2ff456(0x1ca),
        'materials': []
    },
    cartcounts = 0x0;

function updatecartSection(_0x987967) {
    var _0x359589 = _0x2ff456;
    for (temp in cartframes[_0x359589(0x20d)]) {
        cartframes[_0x359589(0x20d)][_0x359589(0x18e)](0x0, cartframes['materials'][_0x359589(0x187)]);
    }
    console[_0x359589(0x1ec)](cartframes[_0x359589(0x20d)]);
    for (i in _0x987967) {
        if (_0x987967[i][_0x359589(0x1b0)] != null) {
            if (cartframes[_0x359589(0x20d)][_0x359589(0x187)] != 0x0) {
                var _0x371718 = 0x0;
                for (var _0x37ea87 in cartframes[_0x359589(0x20d)]) {
                    _0x987967[i][_0x359589(0x1b0)]['Id'] == cartframes[_0x359589(0x20d)][_0x37ea87][_0x359589(0x18a)] && (_0x371718 = 0x1);
                }
                _0x371718 == 0x0 && (materialappend5 = {
                    'placename': _0x987967[i][_0x359589(0x1fc)],
                    'Carttid': _0x987967[i][_0x359589(0x1b0)]['Id'],
                    'Carttname': _0x987967[i]['pdfdetails'][_0x359589(0x1f8)],
                    'Cartttype': _0x987967[i][_0x359589(0x1b0)]['Urlimg'],
                    'Carttsize': _0x987967[i][_0x359589(0x1b0)][_0x359589(0x190)],
                    'Carttsrc': _0x987967[i]['pdfdetails']['Image'],
                    'Carttpid': _0x987967[i][_0x359589(0x1b0)][_0x359589(0x19b)]
                }, cartframes[_0x359589(0x20d)][_0x359589(0x1ab)](materialappend5));
            } else materialappend5 = {
                'placename': _0x987967[i][_0x359589(0x1fc)],
                'Carttid': _0x987967[i][_0x359589(0x1b0)]['Id'],
                'Carttname': _0x987967[i][_0x359589(0x1b0)][_0x359589(0x1f8)],
                'Cartttype': _0x987967[i][_0x359589(0x1b0)]['Urlimg'],
                'Carttsize': _0x987967[i][_0x359589(0x1b0)]['Size'],
                'Carttsrc': _0x987967[i][_0x359589(0x1b0)][_0x359589(0x1f3)],
                'Carttpid': _0x987967[i][_0x359589(0x1b0)][_0x359589(0x19b)]
            }, cartframes['materials']['push'](materialappend5);
        }
    }
    console[_0x359589(0x1ec)](cartframes['materials']);
}

function updatedcart(_0x433f5d) {
    var _0x44463b = _0x2ff456;
    event[_0x44463b(0x1c7)]();
    for (var _0x8a705c in cartframes[_0x44463b(0x20d)]) {
        if (_0x433f5d == cartframes[_0x44463b(0x20d)][_0x8a705c][_0x44463b(0x18a)]) {
            cartframes['materials'][_0x44463b(0x18e)](_0x8a705c, 0x1), console[_0x44463b(0x1ec)](cartframes['materials']), generateNestedcart(cartControls, allcart, $('#cartt-template')[_0x44463b(0x20f)]());
            break;
        }
    }
}
var allcart = cartframes[_0x2ff456(0x20d)];

function generateNestedcart(_0x3d6301, _0x9be856, _0xe91e6b) {
    var _0x4d84ea = _0x2ff456;
    _0x3d6301['empty']();
    try {
        _0x9be856 = JSON[_0x4d84ea(0x1de)](_0x9be856);
    } catch (_0x247ba1) {}
    console['log'](_0x9be856[_0x4d84ea(0x187)]);
    for (var _0x6b229f = 0x0; _0x6b229f < _0x9be856[_0x4d84ea(0x187)]; _0x6b229f++) {
        console[_0x4d84ea(0x1ec)]('ehgdsj');
        try {
            var _0x3e93ed = _0xe91e6b,
                _0x3a5f0e = _0x9be856[_0x6b229f],
                _0x3050fd = _0x9be856[_0x6b229f][_0x4d84ea(0x18a)];
            _0x3e93ed = _0x3e93ed['replace'](_0x4d84ea(0x1a0), _0x9be856[_0x6b229f][_0x4d84ea(0x220)]), _0x3e93ed = _0x3e93ed[_0x4d84ea(0x1bc)](_0x4d84ea(0x19c), _0x9be856[_0x6b229f][_0x4d84ea(0x202)]), _0x3e93ed = _0x3e93ed['replace'](_0x4d84ea(0x22c), _0x9be856[_0x6b229f][_0x4d84ea(0x1fa)]), _0x3e93ed = _0x3e93ed['replace'](_0x4d84ea(0x1e7), _0x9be856[_0x6b229f][_0x4d84ea(0x230)]), _0x3e93ed = _0x3e93ed['replace'](_0x4d84ea(0x21e), _0x9be856[_0x6b229f]['Carttpid']), _0x3e93ed = _0x3e93ed[_0x4d84ea(0x1bc)](_0x4d84ea(0x1e9), _0x3050fd), _0x3d6301[_0x4d84ea(0x1d9)](_0x3e93ed);
        } catch (_0x1608a9) {
            console[_0x4d84ea(0x1ef)](_0x1608a9);
        }
    }
}
var countList = new Array(),
    addPageList = new Array(),
    presentPage = 0x1,
    countPerEachPage = 0x14,
    countOfPages = 0x0,
    objlength = 0x0,
    container1, objectArr1, template1;

function loadMyPagination(_0x383658, _0x1629e7, _0x382818) {
    presentPage = 0x1, countOfPages = 0x0, countList = [], addPageList = [], container1 = _0x383658, objectArr1 = _0x1629e7, template1 = _0x382818, prepareList(container1, objectArr1, template1), loadMyPaginationList();
}

function generateNestedHTMLFurniture(_0xa7f48c, _0x4729f1, _0x8701f4, _0x4d55e2, _0x5ba0aa) {
    var _0x16bcc6 = _0x2ff456;
    try {
        _0x4729f1 = JSON[_0x16bcc6(0x1de)](_0x4729f1);
    } catch (_0x1d9cac) {}
    _0xa7f48c['empty'](), checkTileSort(_0x4729f1);
    var _0x41148d = [];
    let _0x55d49d = 0x0;
    for (var _0x318b9a = _0x4d55e2; _0x318b9a < _0x4d55e2 + addPageList[_0x16bcc6(0x187)]; _0x318b9a++) {
        var _0x6a099f = _0x318b9a;
        try {
            var _0x14b564 = _0x8701f4,
                _0x25b99b = _0x4729f1[_0x6a099f],
                _0x50deed = viewFrames[_0x16bcc6(0x187)];
            viewFrames[_0x16bcc6(0x1ab)](_0x4729f1[_0x6a099f]), _0x55d49d % 0x4 == 0x0 && (_0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1ea), ''), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x216), '')), (_0x55d49d % 0x4 == 0x3 || _0x55d49d == _0x4729f1['length'] - 0x1) && (_0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1b3), ''), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1ad), '')), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x227), _0x50deed), index = _0x4729f1[_0x6a099f]['Id'], _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1c8), _0x4729f1[_0x6a099f][_0x16bcc6(0x1f8)]), _0x4729f1[_0x6a099f][_0x16bcc6(0x209)] != '' ? _0x14b564 = _0x14b564['replace']('##thumb##', _0x4729f1[_0x6a099f][_0x16bcc6(0x209)]) : _0x14b564 = _0x14b564['replace']('##thumb##', _0x4729f1[_0x6a099f][_0x16bcc6(0x18b)]), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)]('##size##', _0x4729f1[_0x6a099f][_0x16bcc6(0x190)]), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1e2), _0x4729f1[_0x6a099f][_0x16bcc6(0x1d4)]), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1ed), _0x4729f1[_0x6a099f][_0x16bcc6(0x1f2)]), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)]('##detid##', _0x50deed), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)]('##detname##', _0x4729f1[_0x6a099f][_0x16bcc6(0x1f8)]), _0x4729f1[_0x6a099f][_0x16bcc6(0x228)] == '' ? _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)]('##Randvis##', 'none') : _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x22a), _0x16bcc6(0x193)), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1fb), _0x4729f1[_0x6a099f][_0x16bcc6(0x1fe)]), _0x14b564 = _0x14b564['replace']('##detsize##', _0x4729f1[_0x6a099f][_0x16bcc6(0x190)]), _0x14b564 = _0x14b564['replace'](_0x16bcc6(0x1cf), _0x4729f1[_0x6a099f]['Diffsrc']), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)]('##hexnum##', _0x4729f1[_0x6a099f][_0x16bcc6(0x1e5)]), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1b1), _0x4729f1[_0x6a099f][_0x16bcc6(0x21f)]), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)](_0x16bcc6(0x1b8), _0x4729f1[_0x6a099f]['Cname']), _0x14b564 = _0x14b564[_0x16bcc6(0x1bc)]('##directsrc##', _0x4729f1[_0x6a099f][_0x16bcc6(0x19a)]), _0x41148d[_0x16bcc6(0x1ab)](_0x14b564), _0x55d49d++;
        } catch (_0x521997) {
            console[_0x16bcc6(0x1ef)](_0x521997);
        }
    }
    _0xa7f48c[_0x16bcc6(0x1d9)](_0x41148d[_0x16bcc6(0x1b5)](''));
}

function prepareList(_0xd600d0, _0x564a65, _0x35f31d) {
    var _0x3f7bfe = _0x2ff456;
    for (count1 = 0x0; count1 < _0x564a65[_0x3f7bfe(0x187)]; count1++) countList[_0x3f7bfe(0x1ab)](count1);
    countOfPages = getCountOfPages();
}

function getCountOfPages() {
    var _0x15c418 = _0x2ff456;
    return Math[_0x15c418(0x197)](countList[_0x15c418(0x187)] / countPerEachPage);
}

function getNextPage() {
    presentPage += 0x1, loadMyPaginationList();
}

function getPreviousPage() {
    presentPage -= 0x1, loadMyPaginationList();
}

function getFirstPage() {
    presentPage = 0x1, loadMyPaginationList();
}

function getLastPage() {
    presentPage = countOfPages, loadMyPaginationList();
}

function loadMyPaginationList() {
    var _0x5bfcc4 = _0x2ff456,
        _0x58ec2b = (presentPage - 0x1) * countPerEachPage,
        _0x20f3a5 = _0x58ec2b + countPerEachPage;
    addPageList = countList[_0x5bfcc4(0x223)](_0x58ec2b, _0x20f3a5), console[_0x5bfcc4(0x1ec)](addPageList[_0x5bfcc4(0x187)]), generateNestedHTMLFurniture(container1, objectArr1, template1, _0x58ec2b, _0x20f3a5), validatePageCount();
}

function validatePageCount() {
    var _0x3c8559 = _0x2ff456;
    document['getElementById']('next')['disabled'] = presentPage == countOfPages ? !![] : ![], document[_0x3c8559(0x189)]('previous')[_0x3c8559(0x199)] = presentPage == 0x1 ? !![] : ![], document[_0x3c8559(0x189)](_0x3c8559(0x22f))[_0x3c8559(0x199)] = presentPage == 0x1 ? !![] : ![], document[_0x3c8559(0x189)](_0x3c8559(0x212))[_0x3c8559(0x199)] = presentPage == countOfPages ? !![] : ![];
}
var cname, cId, chexnum, crgbnum, ccode, bookmatch;
cname = cId = chexnuum = crgbnum = ccode = '';
const frames4 = {
    'title': _0x2ff456(0x20c),
    'id': _0x2ff456(0x1c2),
    'materials': []
};
var name, Id, design, size, type, finish, mcode, pcode, place, diffsrc, specsrc, bumpsrc, xscale, yscale, uid, description, normintensity, specintensity, url;
name = design = size = type = finish = mcode = pcode = place = '';
var allsizes = [];
const frames = {
        'title': _0x2ff456(0x20c),
        'id': _0x2ff456(0x1d7),
        'materials': []
    },
    frames2 = {
        'title': 'FRAME\x20FINISH\x20OPTIONS',
        'id': _0x2ff456(0x1c6),
        'materials': []
    },
    frames3 = {
        'title': 'FRAME\x20FINISH\x20OPTIONS',
        'id': _0x2ff456(0x1ac),
        'materials': []
    },
    checkerframes = {
        'title': _0x2ff456(0x20c),
        'id': 'checkerframes',
        'materials': []
    };
var allFrames, allFrames2, allFrames3, allFrames4;