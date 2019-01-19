function picture(cocktail){
    if (document.getElementById('bigpic').style.display === 'none') {
        document.getElementById('bigpic').style.display='block';
        document.getElementById('grey').style.display='block';
    } else {
        document.getElementById('bigpic').style.display='none';
        document.getElementById('grey').style.display='none';
        document.getElementById('red').style.display='none';
    }
}

function getLastPart(str) {
    res = str.split('/');
    return res[res.length-1]
}

function like(){
    if(document.getElementById('grey').style.display === 'none' && document.getElementById('red').style.display==='block'){
        document.getElementById('grey').style.display='block';
        document.getElementById('red').style.display='none';
    } else if(document.getElementById('grey').style.display === 'block' && document.getElementById('red').style.display==='none'){
        document.getElementById('grey').style.display='none';
        document.getElementById('red').style.display='block';
    }
}