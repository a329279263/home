function generateRandomGroupId() {
    return Math.floor(Math.random() * 100000) + 1;
}

function generateAndRedirect(username) {
    var groupId = generateRandomGroupId();
    var hrefValue = `https://lzh329279263.cn/chatAi/?groupId=${groupId}&username=${username}`;
    window.open(hrefValue); 
}