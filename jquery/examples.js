export const methodExamples = {
    hide: {
        html: '<button id="hideButton">要素を隠す</button><div id="hideTarget" style="margin-top:1rem; border:1px solid #e2e8f0; background:#dbeafe; padding:1rem; border-radius:0.375rem; color:#1e40af;">👁️ この要素が隠れます</div>',
        js: `$('#hideButton').on('click', function() {
    $('#hideTarget').hide();
    $(this).text('隠しました！').prop('disabled', true);
});`
    },
    show: {
        html: '<button id="showButton">要素を表示</button><div id="showTarget" style="display:none; margin-top:1rem; border:1px solid #e2e8f0; background:#dcfce7; padding:1rem; border-radius:0.375rem; color:#166534;">✅ 表示されました！</div>',
        js: `$('#showButton').on('click', function() {
    $('#showTarget').show();
    $(this).text('表示しました！').prop('disabled', true);
});`
    },
    toggle: {
        html: '<button id="toggleButton">表示/非表示を切り替え</button><div id="toggleTarget" style="margin-top:1rem; border:1px solid #e2e8f0; background:#fef3c7; padding:1rem; border-radius:0.375rem; color:#92400e;">🔄 何度でも表示/非表示が切り替わります</div>',
        js: `$('#toggleButton').on('click', function() {
    $('#toggleTarget').toggle();
});`
    },
    addClass: {
        html: '<button id="addClassButton">ハイライトを追加</button><div id="addClassTarget">この要素にハイライトクラスを追加します</div>',
        js: `$('#addClassButton').on('click', function() {
    $('#addClassTarget').addClass('highlight');
    $(this).text('追加しました！').prop('disabled', true);
});`
    },
    removeClass: {
        html: '<button id="removeClassButton">ハイライトを削除</button><div id="removeClassTarget" class="highlight">ハイライトが消えます</div>',
        js: `$('#removeClassButton').on('click', function() {
    $('#removeClassTarget').removeClass('highlight');
    $(this).text('削除しました！').prop('disabled', true);
});`
    },
    toggleClass: {
        html: '<button id="toggleClassButton">ハイライトを切り替え</button><div id="toggleClassTarget">何度もクリックしてみてください！</div>',
        js: `$('#toggleClassButton').on('click', function() {
    $('#toggleClassTarget').toggleClass('highlight');
});`
    },
    attr: {
        html: '<button id="attrButton">属性を変更</button><img id="attrTarget" src="/api/placeholder/100/100" alt="元の画像">',
        js: `$('#attrButton').on('click', function() {
    $('#attrTarget').attr('src', '/api/placeholder/200/200');
    $('#attrTarget').attr('alt', '新しい画像');
});`
    },
    removeAttr: {
        html: '<button id="removeAttrButton">属性を削除</button><img id="removeAttrTarget" src="/api/placeholder/100/100" alt="削除される属性" title="これも削除されます">',
        js: `$('#removeAttrButton').on('click', function() {
    $('#removeAttrTarget').removeAttr('alt').removeAttr('title');
});`
    },
    css: {
        html: '<button id="cssButton">CSSを変更</button><div id="cssTarget" style="width:100px;height:100px;background-color:#ef4444;color:white;display:flex;align-items:center;justify-content:center;border-radius:0.375rem;margin-top:1rem;transition:all 0.3s;">赤い箱</div>',
        js: `$('#cssButton').on('click', function() {
    $('#cssTarget').css({
        'width': '200px',
        'height': '120px',
        'background-color': '#3b82f6',
        'color': 'white',
        'font-size': '1.2rem',
        'font-weight': 'bold'
    }).text('青い箱に変更！');
    $(this).text('変更しました！').prop('disabled', true);
});`
    },
    html: {
        html: '<button id="htmlButton">HTMLを変更</button><div id="htmlTarget"><p>元のHTML</p></div>',
        js: `$('#htmlButton').on('click', function() {
    $('#htmlTarget').html('<div><strong>新しく挿入されたHTML</strong><p>divタグ、strongタグ、pタグがすべて追加されました！</p></div>');
});`
    },
    text: {
        html: '<button id="textButton">テキストを変更</button><div id="textTarget">元のテキスト</div>',
        js: `$('#textButton').on('click', function() {
    $('#textTarget').text('新しいテキストに変更されました！');
});`
    },
    val: {
        html: '<input type="text" id="valInput" value="元の値"><button id="valButton">値を変更</button><div id="valDisplay">現在の値: 元の値</div>',
        js: `$('#valButton').on('click', function() {
    const newValue = 'jQueryで変更した値！';
    $('#valInput').val(newValue);
    $('#valDisplay').text('現在の値: ' + newValue);
});`
    },
    append: {
        html: '<button id="appendButton">リストに追加</button><ul id="appendTarget"><li>項目1</li><li>項目2</li></ul>',
        js: `let count = 3;
$('#appendButton').on('click', function() {
    $('#appendTarget').append('<li>項目' + count + '</li>');
    count++;
});`
    },
    prepend: {
        html: '<button id="prependButton">先頭に追加</button><ul id="prependTarget"><li>項目1</li><li>項目2</li></ul>',
        js: `let count = 0;
$('#prependButton').on('click', function() {
    $('#prependTarget').prepend('<li>先頭項目' + count + '</li>');
    count++;
});`
    },
    after: {
        html: '<button id="afterButton">要素の後に追加</button><p id="afterTarget">この要素の後に追加されます</p>',
        js: `let count = 1;
$('#afterButton').on('click', function() {
    $('#afterTarget').after('<p>後に追加された要素 ' + count + '</p>');
    count++;
});`
    },
    before: {
        html: '<button id="beforeButton">要素の前に追加</button><p id="beforeTarget">この要素の前に追加されます</p>',
        js: `let count = 1;
$('#beforeButton').on('click', function() {
    $('#beforeTarget').before('<p>前に追加された要素 ' + count + '</p>');
    count++;
});`
    },
    remove: {
        html: '<button id="removeButton">要素を削除</button><div id="removeTarget">この要素が削除されます</div>',
        js: `$('#removeButton').on('click', function() {
    $('#removeTarget').remove();
    $(this).prop('disabled', true).text('削除しました！');
});`
    },
    empty: {
        html: '<button id="emptyButton">中身を空にする</button><div id="emptyTarget"><p>内容1</p><p>内容2</p><p>内容3</p></div>',
        js: `$('#emptyButton').on('click', function() {
    $('#emptyTarget').empty();
    $(this).prop('disabled', true);
});`
    },
    fadeIn: {
        html: '<button id="fadeInButton">フェードイン</button><div id="fadeInTarget" style="display:none; margin-top:1rem; border:1px solid #e2e8f0; background:#dcfce7; padding:1rem; border-radius:0.375rem; color:#166534;">✨ ゆっくり表示されます（1秒かけてフェードイン）</div>',
        js: `$('#fadeInButton').on('click', function() {
    $('#fadeInTarget').fadeIn(1000);
    $(this).prop('disabled', true);
});`
    },
    fadeOut: {
        html: '<button id="fadeOutButton">フェードアウト</button><div id="fadeOutTarget" style="margin-top:1rem; border:1px solid #e2e8f0; background:#fee2e2; padding:1rem; border-radius:0.375rem; color:#991b1b;">👋 ゆっくり消えます（1秒かけてフェードアウト）</div>',
        js: `$('#fadeOutButton').on('click', function() {
    $('#fadeOutTarget').fadeOut(1000);
    $(this).prop('disabled', true);
});`
    },
    slideDown: {
        html: '<button id="slideDownButton">スライドダウン</button><div id="slideDownTarget" style="display:none; margin-top:1rem; border:1px solid #e2e8f0; background:#e0e7ff; padding:1rem; border-radius:0.375rem; color:#3730a3;">⬇️ 上から下にスライドして表示されます</div>',
        js: `$('#slideDownButton').on('click', function() {
    $('#slideDownTarget').slideDown(1000);
    $(this).prop('disabled', true);
});`
    },
    slideUp: {
        html: '<button id="slideUpButton">スライドアップ</button><div id="slideUpTarget" style="margin-top:1rem; border:1px solid #e2e8f0; background:#fef3c7; padding:1rem; border-radius:0.375rem; color:#92400e;">⬆️ 下から上にスライドして消えます</div>',
        js: `$('#slideUpButton').on('click', function() {
    $('#slideUpTarget').slideUp(1000);
    $(this).prop('disabled', true);
});`
    }
};

export const eventExamples = {
    click: {
        html: '<button id="clickButton">クリックしてください</button><div id="clickResult" style="margin-top:1rem; padding:1rem; border-radius:0.375rem; min-height:40px;"></div>',
        js: `let clickCount = 0;
$('#clickButton').on('click', function() {
    clickCount++;
    $('#clickResult').html('<div>✅ ' + clickCount + '回クリックされました！</div>');
});`
    },
    hover: {
        html: '<div id="hoverTarget" style="border:1px solid #e2e8f0; padding:2rem; border-radius:0.375rem; text-align:center; transition:all 0.3s; cursor:pointer; background:white;">ここにマウスを乗せてください 🖱️</div>',
        js: `$('#hoverTarget').hover(
    function() {
        $(this).css({
            'background-color': '#dbeafe',
            'color': '#1e40af',
            'transform': 'scale(1.05)'
        }).text('マウスが乗っています！ 👆');
    },
    function() {
        $(this).css({
            'background-color': 'white',
            'color': '#0f172a',
            'transform': 'scale(1)'
        }).text('ここにマウスを乗せてください 🖱️');
    }
);`
    },
    submit: {
        html: '<form id="submitForm" style="border:1px solid #e2e8f0; padding:1rem; border-radius:0.375rem;"><label style="display:block; margin-bottom:0.5rem; font-size:0.875rem; color:#64748b;">名前を入力してください:</label><input type="text" required style="margin-bottom:0.5rem; display:block; width:100%;"><button type="submit">送信</button></form><div id="submitResult" style="margin-top:1rem;"></div>',
        js: `$('#submitForm').on('submit', function(e) {
    e.preventDefault();
    const name = $(this).find('input').val();
    $('#submitResult').html('<div>✅ フォームが送信されました！<br>入力された名前: <strong>' + name + '</strong></div>');
});`
    },
    keyup: {
        html: '<div style="border:1px solid #e2e8f0; padding:1rem; border-radius:0.375rem;"><label style="display:block; margin-bottom:0.5rem; font-size:0.875rem; color:#64748b;">文字を入力してください:</label><input type="text" id="keyupInput" placeholder="リアルタイムで下に表示されます" style="width:100%;"></div><div id="keyupResult" style="margin-top:1rem; padding:1rem; background:#f8fafc; border-radius:0.375rem; min-height:60px; border:1px solid #e2e8f0;"><span style="color:#94a3b8;">ここに入力内容が表示されます...</span></div>',
        js: `$('#keyupInput').on('keyup', function() {
    const value = $(this).val();
    if (value) {
        $('#keyupResult').html('<div><strong>入力値:</strong> ' + value + '<br><small>文字数: ' + value.length + '</small></div>');
    } else {
        $('#keyupResult').html('<span>ここに入力内容が表示されます...</span>');
    }
});`
    },
    dblclick: {
        html: '<div id="dblclickTarget" style="border:2px dashed #e2e8f0; padding:2rem; border-radius:0.375rem; text-align:center; cursor:pointer; background:#fef3c7; color:#92400e; transition:all 0.3s;">ここをダブルクリックしてください 🖱️🖱️</div><div id="dblclickResult" style="margin-top:1rem;"></div>',
        js: `let dblclickCount = 0;
$('#dblclickTarget').on('dblclick', function() {
    dblclickCount++;
    $(this).css({
        'background': '#dcfce7',
        'color': '#166534',
        'border-color': '#86efac'
    });
    $('#dblclickResult').html('<div>✅ ダブルクリックされました！（' + dblclickCount + '回目）</div>');
});`
    }
};