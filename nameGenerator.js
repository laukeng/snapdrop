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
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈',
        '丁', '贾', '蒋', '沈', '韩', '杨', '朱', '秦', '宋', '许',
        '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏',
        '陶', '姜', '戴', '谢', '邹', '庞', '董', '梁', '窦', '章',
        '祝', '苏', '潘', '葛', '项', '范', '彭', '屈', '鲁', '韦',
        '林', '马', '苗', '舒', '花', '方', '钟', '任', '袁', '柳',
        '纪', '鲍', '史', '唐', '成', '邓', '曾', '薛', '雷', '贺',
        '倪', '汤', '滕', '殷', '罗', '叶', '郝', '毛', '杜', '常',
        '姚', '于', '汪', '傅', '邵', '尹', '徐', '蔡', '伍', '余',
        '崔', '郭', '顾', '孟', '刘', '黄', '熊', '穆', '萧', ''
    );
    var midNames = new Array(
        '大', '二', '三', '四', '五', '六', '七', ''
    );
    var givenNames = new Array(
        '爷', '郎', '娘', '哥', '姐', '娃', '妹', ''
    );
    Math.seed = seed.hashCode();
    var familyName = familyNames[Math.seededRandom(100, 0)];
    var midName = midNames[Math.seededRandom(8, 0)];
    var givenName = givenNames[Math.seededRandom(8, 0)];
    var fullName = familyName + midName + givenName;
    if (fullName && fullName.length < 2) fullName = '武大郎';

    return fullName;
}

exports.getName = getName;