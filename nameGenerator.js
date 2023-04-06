String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        //hash |= 0; //转换为32位整数
        hash &= 0x7FFFFFFF; //转换为正整数
    }
    return hash;
};

Math.seededRandom = function (max, min) {
    max = max || 1;
    min = min || 0;
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
};

function getName(seed) {
    var familyNames = new Array(
        '勇敢的', '聪明的', '好动的', '好学的', '敏捷的', '开心的', '可爱的', '睿智的', '强大的', '冷静的', '幸运的', '优雅的', '幽默的'
    );
    var midNames = new Array(
        '色', '的'
    );
    var givenNames = new Array(
        '钢铁侠', '雷神', '绿巨人', '鹰眼', '黑寡妇', '蜘蛛侠', '蝙蝠侠', '神奇博士', '蚁人', '星爵', '美国队长', '惊奇队长', '佩奇', '威廉', '麒麟'
    );
    Math.seed = seed.hashCode();
    var familyName = familyNames[Math.seededRandom(14, 0)];
    var midName = midNames[Math.seededRandom(2, 0)];
    var givenName = givenNames[Math.seededRandom(15, 0)];
    var fullName = familyName + givenName;
    if (fullName && fullName.length < 2) fullName = '幸福的威廉与佩奇';

    return fullName;
}

exports.getName = getName;