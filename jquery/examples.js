export const methodExamples = {
    hide: {
        html: '<button id="hideButton">ボタンを隠す</button><div id="hideTarget">これが隠れます</div>',
        js: `
$('#hideButton').on('click', function() {
$('#hideTarget').hide();
});`
    },
    show: {
        html: '<button id="showButton">ボタンを表示</button><div id="showTarget" style="display:none;">こんにちは！</div>',
        js: `
$('#showButton').on('click', function() {
$('#showTarget').show();
});`
    },
    toggle: {
        html: '<button id="toggleButton">トグル</button><div id="toggleTarget">トグルされる要素</div>',
        js: `
$('#toggleButton').on('click', function() {
$('#toggleTarget').toggle();
});`
    },
    addClass: {
        html: '<button id="addClassButton">クラスを追加</button><div id="addClassTarget">スタイルが変わります</div>',
        js: `
// 注意: このメソッドは'highlight'クラスがCSSで事前に定義されていることを前提としています
$('#addClassButton').on('click', function() {
    $('#addClassTarget').addClass('highlight');
});`
    },
    removeClass: {
        html: '<button id="removeClassButton">クラスを削除</button><div id="removeClassTarget" class="highlight">ハイライトが消えます</div>',
        js: `
// 注意: このメソッドは'highlight'クラスがCSSで事前に定義されていることを前提としています
$('#removeClassButton').on('click', function() {
    $('#removeClassTarget').removeClass('highlight');
});`
    },
    toggleClass: {
        html: '<button id="toggleClassButton">クラスをトグル</button><div id="toggleClassTarget">クラスがトグルされます</div>',
        js: `
// 注意: このメソッドは'highlight'クラスがCSSで事前に定義されていることを前提としています
$('#toggleClassButton').on('click', function() {
    $('#toggleClassTarget').toggleClass('highlight');
});`
    },
    attr: {
        html: '<button id="attrButton">属性を変更</button><img id="attrTarget" src="/api/placeholder/100/100" alt="元の画像">',
        js: `
$('#attrButton').on('click', function() {
$('#attrTarget').attr('src', '/api/placeholder/200/200');
$('#attrTarget').attr('alt', '新しい画像');
});`
    },
    removeAttr: {
        html: '<button id="removeAttrButton">属性を削除</button><img id="removeAttrTarget" src="/api/placeholder/100/100" alt="削除される属性" title="これも削除されます">',
        js: `
$('#removeAttrButton').on('click', function() {
$('#removeAttrTarget').removeAttr('alt').removeAttr('title');
});`
    },
    css: {
        html: '<button id="cssButton">CSSを変更</button><div id="cssTarget" style="width:100px;height:100px;background-color:red;">スタイル変更</div>',
        js: `
$('#cssButton').on('click', function() {
$('#cssTarget').css({
'width': '150px',
'height': '150px',
'background-color': 'blue',
'color': 'white'
});
});`
    },
    html: {
        html: '<button id="htmlButton">HTMLを変更</button><div id="htmlTarget"><p>元のHTML</p></div>',
        js: `
$('#htmlButton').on('click', function() {
$('#htmlTarget').html('<h3>新しいHTML</h3><p>内容が変���されました</p>');
});`
    },
    text: {
        html: '<button id="textButton">テキストを変更</button><div id="textTarget">元のテキスト</div>',
        js: `
$('#textButton').on('click', function() {
$('#textTarget').text('新しいテキスト');
});`
    },
    val: {
        html: '<input type="text" id="valInput" value="元の値"><button id="valButton">値を変更</button>',
        js: `
$('#valButton').on('click', function() {
$('#valInput').val('新しい値');
});`
    },
    append: {
        html: '<button id="appendButton">要素を追加</button><ul id="appendTarget"><li>項目1</li></ul>',
        js: `
$('#appendButton').on('click', function() {
$('#appendTarget').append('<li>新しい項目</li>');
});`
    },
    prepend: {
        html: '<button id="prependButton">要素を先頭に追加</button><ul id="prependTarget"><li>項目1</li></ul>',
        js: `
$('#prependButton').on('click', function() {
$('#prependTarget').prepend('<li>新しい先頭項目</li>');
});`
    },
    after: {
        html: '<button id="afterButton">要素の後に追加</button><p id="afterTarget">この段落の後に追加されます</p>',
        js: `
$('#afterButton').on('click', function() {
$('#afterTarget').after('<p>新しく追加された段落</p>');
});`
    },
    before: {
        html: '<button id="beforeButton">要素の前に追加</button><p id="beforeTarget">この段落の前に追加されます</p>',
        js: `
$('#beforeButton').on('click', function() {
$('#beforeTarget').before('<p>新しく追加された段落</p>');
});`
    },
    remove: {
        html: '<button id="removeButton">要素を削除</button><div id="removeTarget">この要素が削除されます</div>',
        js: `
$('#removeButton').on('click', function() {
$('#removeTarget').remove();
});`
    },
    empty: {
        html: '<button id="emptyButton">要素を空にする</button><div id="emptyTarget"><p>この内容が空になります</p><p>これも消えます</p></div>',
        js: `
$('#emptyButton').on('click', function() {
$('#emptyTarget').empty();
});`
    },
    fadeIn: {
        html: '<button id="fadeInButton">フェードイン</button><div id="fadeInTarget" style="display:none;">フェードインします</div>',
        js: `
$('#fadeInButton').on('click', function() {
    $('#fadeInTarget').fadeIn(1000);
});`
    },
    fadeOut: {
        html: '<button id="fadeOutButton">フェードアウト</button><div id="fadeOutTarget">フェードアウトします</div>',
        js: `
$('#fadeOutButton').on('click', function() {
    $('#fadeOutTarget').fadeOut(1000);
});`
    },
    slideDown: {
        html: '<button id="slideDownButton">スライドダウン</button><div id="slideDownTarget" style="display:none;">スライドダウンします</div>',
        js: `
$('#slideDownButton').on('click', function() {
    $('#slideDownTarget').slideDown(1000);
});`
    },
    slideUp: {
        html: '<button id="slideUpButton">スライドアップ</button><div id="slideUpTarget">スライドアップします</div>',
        js: `
$('#slideUpButton').on('click', function() {
    $('#slideUpTarget').slideUp(1000);
});`
    }
};

export const eventExamples = {
    click: {
        html: '<button id="clickButton">クリックしてください</button><div id="clickResult"></div>',
        js: `
$('#clickButton').on('click', function() {
$('#clickResult').text('ボタンがクリックされました！');
});`
    },
    hover: {
        html: '<div id="hoverTarget">ここにマウスを乗せてください</div>',
        js: `
$('#hoverTarget').hover(
function() {
$(this).css('background-color', 'lightblue');
},
function() {
$(this).css('background-color', '');
}
);`
    },
    submit: {
        html: '<form id="submitForm"><input type="text" required><button type="submit">送信</button></form><div id="submitResult"></div>',
        js: `
$('#submitForm').on('submit', function(e) {
e.preventDefault();
$('#submitResult').text('フォームが送信されました！');
});`
    },
    keyup: {
        html: '<input type="text" id="keyupInput"><div id="keyupResult"></div>',
        js: `
$('#keyupInput').on('keyup', function() {
$('#keyupResult').text('入力値: ' + $(this).val());
});`
    },
    dblclick: {
        html: '<div id="dblclickTarget">ここをダブルクリックしてください</div><div id="dblclickResult"></div>',
        js: `
$('#dblclickTarget').on('dblclick', function() {
    $('#dblclickResult').text('ダブルクリックされました！');
});`
    }
};