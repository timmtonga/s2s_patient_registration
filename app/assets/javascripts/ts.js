/*******************************************************************************
 *
 * Baobab Touchscreen Toolkit Version 2.0
 *
 * A library for transforming HTML pages into touch-friendly user interfaces.
 *
 * (c) 2014 Baobab Health Trust (http://www.baobabhealth.org)
 *
 * For license details, see the README.md file
 *
 ******************************************************************************/


var imgTick = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAF8klEQVR4nO3cz4scRRQH8J7N5sfmh5pfqNGTUSERYT2IuYgDngY9BRqVZDezs9NV74FC/AfCIOQaMZBDAhpRlDBBJG4ybqarRBFRJAgSQtCDhBCCIkFEQpAQxkNmZfbHzHT3dFXtTH0/UOd93a+652111QsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGC61YEycFGtdhwEORPPRM1VVfdh1HGBZ+XR5Ayk6yud5q+tYwDLWXGLNl8Sc2Og6FrBodn52Gyv+ihQ18Zvvk1owRookK75Hmj4JasGY65DAEtEQu0nTZdbcIkVHgyAouI4JLCjWiuMUU401t1hzS8byLdcxgSUc8z7S9OdC8knRq65jAgumLk5tYsVnFhLPiu9FzWjSdVxgXkHGcj9putPx1N8WDbHbdWBgmJgTO0jTN/8/9feTf3NaTW93HRuYVAvGKKa3OxPPmluk6erUxalNrsMDg6pxdQ8r/m1p8lnzd2E9XOc6PjAkrIfrSNF7KyS+xYrPYIFnhFFMRVJ0a8Xkaz4eYIFnNIX1cDMpOtsl8S3WfNh1jGBGQSp5kDXf7ZZ8UvS66yDBgEqzsosU/dTjqW9xzPtcxwk5C+vhGqnkkV6JJ013Zudnn3QdK+QsakaTrPlaz+QrulW+UH7EdayQo1KjtJ4Unej5ur+f/F/DerjZdbzGRc3opbAeTriOw4ZIRc93frXr8dq/7MX2LdmUb7Rn+wHXsZjE53krKWr2S3z7XpwN6+Ea1zEbR5re7Ljo34PRXNgoLGzNSpj8E8Fo3ofFVqp8q3F1j+u48lRtVB9nxT8nSTxrbkklj7iO2YaCjOW7Xda2P3YdXB6S/Gu3QvIPuo7bhgIp+rDXjRj2widqRpOk6Eaa5FNMRddxGxfWwzWs+IsEv4FDWQyWT5c3kKZTaRLPmu+KWDzrOnbjxEmxdukOlh4TYOiKQdZcIkW3Uyb/r0qzsst17Ma1v2d/n+bmDEsxuHDqJmXiW6z4evnz8kOu4zcurIcTpOhKhhu0uovBjlM3qa9N86Xy6fIG15dgXOVcZQv3WecexmKw89RNhon9ZbFWHHd9DcZNq+ntpOiPrMlfjcXg0lM3qa9H06lgyGqbTGYaMzuTrHUn+Z10fS0LpJJ7WfH1AZJ/LPAh+bIpnyJF/w6c/PZwXQwuO3WTbSIfcnkN1lBMz2UsinrdPFfF4LJTNxlHyVH8dlFMxVwT3zFsF4MrnbrJMO56dT6PNVdNTQCp5GuWLqNATZoa9C1Gmu5EKnraUsyrB2s+bmIC2FgZ7HHqJm2sN/xtwFQLxljxjyYmgalisOepm/TJv7Ja1y6sEXNiY4+TLNmHgWKwz6mbtMlHA6YFrPgJE2+BvJ6uBKdu0iUfDZiWk7Hcn/cEyGFlsO+pmwwxoQFTN6TpWM4TIHMxmOjUTcqBBkz9FVjz13ne9LTFYJatWQknIxowJdH+HDzQR6FFI0UxmOTUTYa/jwZMaZGmx/JcIu5XDCY9dZPhqUcDpqxELF7JMRFdi0HOtjUryd9EA6ZBdd0Knv41vOwzsZgTG0nTp3knvj2uiVg86OKejZoCaVJ5JKWjGEx16ibDQAOmPIX1cCKPzSKk6P2ZxsxOVvytocS3SNMFL7Zv2SbmxaMGn9i8BhowmSSb8uVVkORuAw2YbDCxQDPwax8NmKwqJDkqZm2gAZN9YT1cx3mv1qV96tGAyS0xJ3bkuZM45SsfDZhWA1b8ooPk+9GAaViw5sMWJ8APpUZpvetrhsUKrPkzC0++Hw2YhlGxVhxnxb8YTL4fDZiG2ez87DYTRaEvDZhGgrgoXsg5+V40YBopnT0EB3rt+9CAaVSRpo8GSL4fDZhGWbFWHCdNVzMk348GTD440DjwAGv+J3HyfWnA5JP2Dt8kE8CPBkw+YsWH+jz5fjRg8hlr/mDFSt+XBkzeu9+fb9ERL1L0juuwwKLKucoWVvx3+7XvRwMmWEwquZd9acAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBEEQ/AfEGi0VtD0hMwAAAABJRU5ErkJggg==';

var imgUnTick = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIX0lEQVR4nO2dXagd1RXH10nMvWdmbe89H7O2SQiNEigVtc2LJaU+BPoU1JeQlkKjoIXaFynFFB98OSgWi6V9CSRYKiIIISKVoG/BGCRY5FIpcvEjxhtzL+fM3lJCEQmXGK4PM/d6zmVmznyePR/rB/OWj7X3f8+amX3+a20AhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGYEC4A3GY6BsYww057PwC0TMdRY1qXAeZNBxHJyLEf5GyQP18uQtftintNxxELl+xnLvdgwXQcdUFJ66gm8UvTccRmALBDE54Zddp3mo6lyqwCWEqKfykHf2M6lsScBdippHh/5IjDpmOpIm7POqRJXFeO/XvTsaRmBaCtJH6hSTxpOpaqcBZgp3LwL1qKjVrM25UuLGoS15UUpwcAO0zHU2aGnfZ+JfGqlmLDJfsZ0/HkhibcrSTe0ITvLAPMmY6nhLSUYz+hpdjQUmwoKQamA8qdYX/ubm9w+MWXi9A1HU9ZuNKFRUXive/Fx7+ZjqkwRo447A/yxqgn7jEdj2lGZB9REte3xCf7pOmYCkeTdez71W4dNR2PCZYB5hThK5vz4ImPr0BTdlGVg0+Npbw/mY5nlmjCg0qK/02IL/E1aIr4m2x96kixoQnPnAXYaTqmIhkA7NAknhsX3h/7uUFDv45amvDM2ET8Zwhgmw6qCBTiHUqK5QDx3x40VHwA8Dc9Jt+AXU2423RceTL+eTcpvrhY96wXiyWAXUriR2OLYN3tWYdMx5WVIYCtCd8OFh+XlgB2mY6xNLgAqCS6216MHjEdV1pGjjisJN4IEl8RfsjiB7C6AD1F4uttk/UCVOjteAlglybxj8C73kv7n64AtE3HWVpGnfadmvDmZCYQb1bBYDLsz92tCdfCxFckPl8FsEzHWXpGffv+gDvnsytdWDQdWwit8X2NkGf+UBMI04FWBtexHw5YBP93F9t3mY5tnJEAUhL/GyW+kuh+4sDtpmOtHC7Zvw24k26VxWDi2bTwVvSdL66vLkDPdKyVRUnxbNDEuoR/MBWTb9N6M1J4P2MNbwfHVJy1QUlxOji1ipcGM95F27RpTRNfSbxxzbH3zjK22jLwDKYhGyri3Vn45H2b1otT73pf/LWeta/omBqFZzDFf4dMeKEGE//T9Foc8TXhTSXnDxQVS6PZMpiG3HUFFE20XAf/GEt4/wV1zZn/Yc4xMONsGkzD028+BhPfpnUptvjeAjiYx//NTGHLYBq6CMSzkGH7WJP1gJL4TRLx3T7+IschMtPYNJiGLgISryf9qXUZYE45+Gqiu57FN8emwTQiJcc2mATZtOJcI7KPFD1OJoJxg2nIy6GKMpicBdipSTyfVHhPfPGrWY6VCSHGDzGB28eacLcm8XEa8StZrFlnJgym4dngUf+Pt0JtWrHEr3CxZo2ZNJiGZ4O/axIX04pfi2LNurLdYJr3Vatizbqy3WCa11XLYs26EmQwzSZ+jYs168pVx96jCb/NLH4TijXrhm/TyvwYaFSxZl1QfTw+1aYVL+03r1izyqwCWJrwXC7PfcK3Bk2u16sabhfvS7OPH7EAhq4Q0vS4mCn4LqG/5v3J5z8C1t0u3md6jEwI7mL7rtg2rUwLoZkdTMpMMptWLo8E8RzwC6F5VjrQUVK8P1PxNzMBiderUJ9YW2JV4SR/2Uu0UaRIXOLK3hmzAtBWJN7IP63j8Jpj741T5DH5ToDqqmPvMT0vjUATHkwqUEwRt4o1h13rB9vL0WP8/XXVxR+bnp/a4v2siy8U8jwPKNacZjCNyCKPmZqj2uL9iJPOphVD/NBizakG07Bs4OCLwF8I+aDJOpb7i95Y2p52eMU0g2nEv32eG2Bn4HIPFjLZtKYLFLtYc6rBNOz/IPH5Sgc6Rc9V7fCbJYdW+WRP+8mLNeMYTEMWwddcGBqTJYBdLuHLhQnviZ+2WDOewTQ04/D2cSR+Fc5XhYrvLYDUxZpZDabKwafynLNaMPAaPTxduPDeXfjzrPFmNpgS/nPAvgIPr1ly/m7doCvPYs3MBlPCDxrfGzAvm1acq4hizaAOpsmyEboK8Y684yo9frPkt2YhvCd+ccWaQR1MEy6CdSXxJ0XFVzr8ZsmJmixkuWZRrBnYwTRpnH08XnScRvFenMRLsxLeE392xZqBHUyTXiSehzpuHys5fyCqWXIhl4FizcAOpkkXLYk3amcwURLPz1J8l/DP5sYa3ME02SLAD10ANDWG3HEd+6GZpf0SFGuGdTBNmMGuDzvt/abHkgtXurA4G/HLUaw5iOpgmmgRlKcBdmY0iU8LFb9kxZpRHUyTXi7Zj5seT2aUY/+uOPHLWawZ1cE0eXYTpwZV3j5e61n7Ckr7pS7WnNbBNOFYK20waeVu5KzIyZrTOpgmy3YVNpgEHo+aXvxKnayZ2mAavAiqaTBxu+LefMSv5smaaQ2m4Y+EihlMvO6bGX/9q/jJmmkNpuGLAE+YHlMilMTX0qe+epysmdZgGna5hC8PqvI4TJ0Ga3ayZlqDaVRmrITBZAhgJ7/za3myZiaDacjjoBoGE034QYKVXduTNS8A3JZoLuItgm+G/bkfmR5bJK4jfh13Rdf9ZM28dgs9Z5E4pXrWz0r/qBwJoBjP/MacrJnaYEq4pPp4vBJpfzuacBghfuNO1oxlMCW8qaQ45fasQ7M4E7FQlMQTIamssSdrBhpMCa8px35irWftG1TlUy8OSs4fCBK/6Sdrjvr2/Zrw3IjsI5d7sGA6niJpTfxAwidrNg9F9klffD5Zs4mM+tZP/QXAJ2s2kWWAuTyKNRmGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYZhJvgMnR/wug6Qz4gAAAABJRU5ErkJggg==';

var styles = "body {-moz-user-select: none; overflow: hidden; font-family: 'Nimbus Sans L', 'Arial Narrow', sans-serif; min-width: 1250px; min-height: 700px; } .button:active {border:1px solid #5ca6c4 !important;background-color: #82bbd1 !important; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#cd8912)) !important;background-image: -webkit-linear-gradient(top, #82bbd1, #cd8912) !important;background-image: -moz-linear-gradient(top, #efb144, #cd8912) !important;background-image: -ms-linear-gradient(top, #efb144, #cd8912) !important;background-image: -o-linear-gradient(top, #efb144, #cd8912) !important;background-image: linear-gradient(to bottom, #efb144, #cd8912) !important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#efb144, endColorstr=#cd8912) !important;} .input_cell {font-size: 1.2em;padding: 10px;border: 1px solid #3465a4;border-radius: 10px;width: 80%;}button {font-size: 1em;padding: 15px;min-width: 120px;cursor: pointer;min-height: 75px;border-radius: 10px !important;margin: 3px;}.button {font-size: 1em;padding: 15px;min-width: 100px;  cursor: pointer;  min-height: 60px;border-radius: 10px !important;margin: 3px;}.blue{border:1px solid #7eb9d0; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #a7cfdf; background-image: -webkit-gradient(linear, left top, left bottom, from(#a7cfdf), to(#23538a));background-image: -webkit-linear-gradient(top, #a7cfdf, #23538a);background-image: -moz-linear-gradient(top, #a7cfdf, #23538a);background-image: -ms-linear-gradient(top, #a7cfdf, #23538a);background-image: -o-linear-gradient(top, #a7cfdf, #23538a);background-image: linear-gradient(to bottom, #a7cfdf, #23538a);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a7cfdf, endColorstr=#23538a);}.blue:hover{border:1px solid #5ca6c4;background-color: #82bbd1; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#193b61));background-image: -webkit-linear-gradient(top, #82bbd1, #193b61);background-image: -moz-linear-gradient(top, #82bbd1, #193b61);background-image: -ms-linear-gradient(top, #82bbd1, #193b61);background-image: -o-linear-gradient(top, #82bbd1, #193b61);background-image: linear-gradient(to bottom, #82bbd1, #193b61);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#82bbd1, endColorstr=#193b61);}.green{border:1px solid #34740e; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #4ba614; background-image: -webkit-gradient(linear, left top, left bottom, from(#4ba614), to(#008c00));background-image: -webkit-linear-gradient(top, #4ba614, #008c00);background-image: -moz-linear-gradient(top, #4ba614, #008c00);background-image: -ms-linear-gradient(top, #4ba614, #008c00);background-image: -o-linear-gradient(top, #4ba614, #008c00);background-image: linear-gradient(to bottom, #4ba614, #008c00);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#4ba614, endColorstr=#008c00);}.green:hover{border:1px solid #224b09;background-color: #36780f; background-image: -webkit-gradient(linear, left top, left bottom, from(#36780f), to(#005900));background-image: -webkit-linear-gradient(top, #36780f, #005900);background-image: -moz-linear-gradient(top, #36780f, #005900);background-image: -ms-linear-gradient(top, #36780f, #005900);background-image: -o-linear-gradient(top, #36780f, #005900);background-image: linear-gradient(to bottom, #36780f, #005900);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#36780f, endColorstr=#005900);}.red{border:1px solid #72021c; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #a90329; background-image: -webkit-gradient(linear, left top, left bottom, from(#a90329), to(#6d0019));background-image: -webkit-linear-gradient(top, #a90329, #6d0019);background-image: -moz-linear-gradient(top, #a90329, #6d0019);background-image: -ms-linear-gradient(top, #a90329, #6d0019);background-image: -o-linear-gradient(top, #a90329, #6d0019);background-image: linear-gradient(to bottom, #a90329, #6d0019);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a90329, endColorstr=#6d0019);}.red:hover{border:1px solid #450111;background-color: #77021d; background-image: -webkit-gradient(linear, left top, left bottom, from(#77021d), to(#3a000d));background-image: -webkit-linear-gradient(top, #77021d, #3a000d);background-image: -moz-linear-gradient(top, #77021d, #3a000d);background-image: -ms-linear-gradient(top, #77021d, #3a000d);background-image: -o-linear-gradient(top, #77021d, #3a000d);background-image: linear-gradient(to bottom, #77021d, #3a000d);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#77021d, endColorstr=#3a000d);}.gray{border:1px solid #ccc; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #ccc; background-image: -webkit-gradient(linear, left top, left bottom, from(#ccc), to(#999));background-image: -webkit-linear-gradient(top, #ccc, #999);background-image: -moz-linear-gradient(top, #ccc, #999);background-image: -ms-linear-gradient(top, #ccc, #999);background-image: -o-linear-gradient(top, #ccc, #999);background-image: linear-gradient(to bottom, #ccc, #999);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ccc, endColorstr=#999);}.gray:hover{border:1px solid #ccc;background-color: #ddd; background-image: -webkit-gradient(linear, left top, left bottom, from(#333), to(#ccc));background-image: -webkit-linear-gradient(top, #333, #ccc);background-image: -moz-linear-gradient(top, #333, #ccc);background-image: -ms-linear-gradient(top, #333, #ccc);background-image: -o-linear-gradient(top, #333, #ccc);background-image: linear-gradient(to bottom, #333, #ccc);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#333, endColorstr=#ccc);}.orange{border:1px solid #ef8544; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #ef8544; background-image: -webkit-gradient(linear, left top, left bottom, from(#ef8544), to(#efb144));background-image: -webkit-linear-gradient(top, #ef8544, #efb144);background-image: -moz-linear-gradient(top, #ef8544, #efb144);background-image: -ms-linear-gradient(top, #ef8544, #efb144);background-image: -o-linear-gradient(top, #ef8544, #efb144);background-image: linear-gradient(to bottom, #ef8544, #efb144);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ef8544, endColorstr=#efb144);}.orange:hover{border:1px solid #ef8544;background-color: #ddd; background-image: -webkit-gradient(linear, left top, left bottom, from(#ff420e), to(#ef8544));background-image: -webkit-linear-gradient(top, #ff420e, #ef8544);background-image: -moz-linear-gradient(top, #ff420e, #ef8544);background-image: -ms-linear-gradient(top, #ff420e, #ef8544);background-image: -o-linear-gradient(top, #ff420e, #ef8544);background-image: linear-gradient(to bottom, #ff420e, #ef8544);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ff420e, endColorstr=#ef8544);}"

var currentCaseUpper = true;
var currentKeysNumeric = false;
var currentKeysQWERTY = false;

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var monthNames = {
    "Jan": 0,
    "Feb": 1,
    "Mar": 2,
    "Apr": 3,
    "May": 4,
    "Jun": 5,
    "Jul": 6,
    "Aug": 7,
    "Sep": 8,
    "Oct": 9,
    "Nov": 10,
    "Dec": 11
};

var timers = {};

var timerHandles = {};

var fieldsets = [];

var navigablefieldsets = [];

var currentPage = 0;

var btnClear, btnBack, btnNext;

var textSize = "24px";

var cursorPos = 0;

var tracker;

var incomplete = false;

var trackingString = "";

var validityTmr;

var overwriteNumber = true;

var validationControl;

var navigatingBack = false;

var summaryHash = {};

var buttonNavigation = false;

function __$(id) {
    return document.getElementById(id);
}

function padZeros(number, positions) {
    var zeros = parseInt(positions) - String(number).length;
    var padded = "";

    for (var i = 0; i < zeros; i++) {
        padded += "0";
    }

    padded += String(number);

    return padded;
}

function padZerosAfter(numberArray) {
    var number;
    var padded;
    if (numberArray[1] == undefined) {
        number = 0;
    } else {
        number = numberArray[1];
    }

    if (String(number).length < 3){
        var zeros = 3 - String(number).length;

        for (var i = 0; i < zeros; i++) {
            number += "0";
        }
      }
    padded = parseFloat(numberArray[0] + "." + number).toFixed(3);

    return padded;
}

function checkCtrl(obj) {
    var o = obj;
    var t = o.offsetTop;
    var l = o.offsetLeft + 1;
    var w = o.offsetWidth;
    var h = o.offsetHeight;

    while ((o ? (o.offsetParent != document.body) : false)) {
        o = o.offsetParent;
        t += (o ? o.offsetTop : 0);
        l += (o ? o.offsetLeft : 0);
    }
    return [w, h, t, l];
}

function init() {
    var style = document.createElement("style");
    style.innerHTML = styles;

    document.head.appendChild(style);

    loadLabels();

    var forms = document.forms;

    for (var i = 0; i < forms.length; i++) {

        forms[i].style.display = "none";

    }

    fieldsets = document.forms[0].getElementsByTagName("fieldset");

    for (var i = 0; i < fieldsets.length; i++) {

        var currentset = fieldsets[i].elements;
        var resultset = [];

        navigablefieldsets.push([]);

        for (var j = 0; j < currentset.length; j++) {

            if (currentset[j].type.toLowerCase() != "hidden") {

                navigablefieldsets[i].push(currentset[j]);

            }

        }

    }

    loadPage(currentPage);

    // validityTmr = setTimeout("checkValidity()", 10);
}

function showFixedKeyboard(ctrl, container, disabled, numbers, caps) {
    if (ctrl == undefined || container == undefined)
        return;

    container.innerHTML = "";

    if (__$('fixedkeyboard')) {
        document.body.removeChild(__$('fixedkeyboard'));
    }

    if (!__$("main")) {
        var main = document.createElement("div");
        main.id = "main";

        container.appendChild(main);
    }

    target = ctrl;

    var pos = checkCtrl(ctrl);

    if (typeof(disabled) == 'undefined') disabled = {};

    if (typeof(numbers) == 'undefined') numbers = false;

    if (typeof(caps) == 'undefined') caps = false;

    currentCaseUpper = caps;

    currentKeysNumeric = numbers;

    var div = document.createElement('div');
    div.id = 'fixedkeyboard';
    div.style.margin = 'auto';
    div.style.borderRadius = '10px';
    div.style.backgroundColor = 'rgba(255,255,255,0.8)';

    container.appendChild(div);

    var keys;

    if (currentKeysNumeric) {

        keys = [
            [1, 2, 3, ':'],
            [4, 5, 6, '/'],
            [7, 8, 9, '.'],
            ['del', 0, 'N/A', 'abc']
        ];

    } else {

        if (currentKeysQWERTY) {

            keys = [
                ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                ["A", "S", "D", "F", "G", "H", "J", "K", "L", 'del'],
                ['', "Z", "X", "C", "V", "B", "N", "M", 'N/A', "CAP"],
                ['@', 'space', ":", ".", "/", "123", "abc"]
            ];

        } else {

            keys = [
                ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
                ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
                ["S", "T", "U", "V", "W", "X", "Y", "Z", "CAP"],
                ['@', 'space', ":", ".", "/", "123", "qwe", 'del', "N/A"]
            ];

        }

    }

    var letters = {"A": true, "B": true, "C": true, "D": true, "E": true, "F": true, "G": true, "H": true,
        "I": true, "J": true, "K": true, "L": true, "M": true, "N": true, "O": true, "P": true, "Q": true,
        "R": true, "S": true, "T": true, "U": true, "V": true, "W": true, "X": true, "Y": true, "Z": true, "CAP": true};

    var table = document.createElement('div');
    table.style.display = 'table';
    table.style.margin = 'auto';

    div.appendChild(table);

    for (var i = 0; i < keys.length; i++) {
        var row = document.createElement('div');
        row.style.display = 'table-row';

        table.appendChild(row);

        for (var j = 0; j < keys[i].length; j++) {
            var cell = document.createElement('div');
            cell.style.display = 'table-cell';

            row.appendChild(cell);

            if (String(keys[i][j]).trim().length == 0) {
                cell.innerHTML = "&nbsp;";

                continue;
            }

            var button = document.createElement('button');
            button.setAttribute('class', (disabled[keys[i][j]] ? 'button gray' : 'button blue'));
            button.style.width = '82px';
            button.style.height = '60px';
            button.style.minWidth = '40px';
            button.style.minHeight = '40px';
            button.style.margin = '2px';
            button.style.fontSize = "24px";

            button.id = keys[i][j];

            if (target && keys[i][j] == '.') {
                if (target.value.trim().match(/\./) || target.value.trim().length == 0) {
                    button.setAttribute('class', 'button gray');
                } else {
                    button.setAttribute('class', 'button blue');
                }
            }

            if (keys[i][j] == "hide") {

                button.style.fontSize = "0.9em";

            }

            if (letters[keys[i][j]]) {

                button.innerHTML = (String(keys[i][j]).trim().toLowerCase() == "cap" ? (!currentCaseUpper ? String(keys[i][j]).toLowerCase() : String(keys[i][j]).toUpperCase()) : (!currentCaseUpper ? String(keys[i][j]).toUpperCase() : String(keys[i][j]).toLowerCase()));

            } else {

                button.innerHTML = keys[i][j];

            }

            if (disabled[keys[i][j]]) {
                button.setAttribute('class', 'button gray');
            } else {
                button.setAttribute('class', 'button blue');

                button.onmousedown = function () {

                    if (this.innerHTML == 'del') {

                        if (target) {

                            if ("N/A" == target.value.trim()) {

                                target.value = "";

                            } else {

                                target.value = target.value.trim().substring(0, (target.value.trim().length - 1));

                            }

                            if(target.getAttribute("target")){

                                if(__$(target.getAttribute("target"))){

                                    __$(target.getAttribute("target")).value = target.value;

                                }

                            }

                        }

                    } else if (this.innerHTML == "N/A") {

                        target.value = "N/A";

                        if(target.getAttribute("target")){

                            if(__$(target.getAttribute("target"))){

                                __$(target.getAttribute("target")).value = target.value;

                            }

                        }

                    } else if (this.innerHTML.trim() == '123') {

                        currentKeysNumeric = true;

                        showFixedKeyboard(__$(target.id), container, disabled, currentKeysNumeric, currentCaseUpper);

                    } else if (this.innerHTML.trim() == 'abc') {

                        currentKeysQWERTY = false;

                        currentKeysNumeric = false;

                        showFixedKeyboard(__$(target.id), container, disabled, currentKeysNumeric, currentCaseUpper);

                    } else if (this.innerHTML.trim() == 'qwe') {

                        currentKeysQWERTY = true;

                        currentKeysNumeric = false;

                        showFixedKeyboard(__$(target.id), container, disabled, currentKeysNumeric, currentCaseUpper);

                    } else if (this.innerHTML.trim() == '?') {

                        target.value = "?";

                        if(target.getAttribute("target")){

                            if(__$(target.getAttribute("target"))){

                                __$(target.getAttribute("target")).value = target.value;

                            }

                        }

                    } else if (this.innerHTML.trim().toLowerCase() == 'cap') {
                        currentCaseUpper = !currentCaseUpper;

                        var keys = Object.keys(letters);

                        if (!currentCaseUpper) {

                            for (var l = 0; l < keys.length - 1; l++) {
                                if (__$(keys[l])) {
                                    __$(keys[l]).innerHTML = keys[l].toUpperCase();
                                }
                            }

                            this.innerHTML = "cap";

                        } else {


                            for (var l = 0; l < keys.length - 1; l++) {
                                if (__$(keys[l])) {
                                    __$(keys[l]).innerHTML = keys[l].toLowerCase();
                                }
                            }

                            this.innerHTML = "CAP";

                        }

                    } else if (this.innerHTML.trim() == 'space') {

                        target.value += " ";


                    } else {

                        if (target.value.trim() == "?" || target.value.trim() == "Unknown" || target.value.trim() == "N/A") {

                            target.value = (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());

                            if(target.getAttribute("target")){

                                if(__$(target.getAttribute("target"))){

                                    __$(target.getAttribute("target")).value = target.value;

                                }

                            }

                        } else {

                            if (overwriteNumber) {

                                target.value = (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());

                                if(target.getAttribute("target")){

                                    if(__$(target.getAttribute("target"))){

                                        __$(target.getAttribute("target")).value = target.value;

                                    }

                                }

                                overwriteNumber = false;

                                if (target.value.trim().length > 0) {

                                    if (__$("CAP") && !currentCaseUpper) {

                                        currentCaseUpper = !currentCaseUpper;

                                        showFixedKeyboard(__$(target.id), container, disabled, currentKeysNumeric, currentCaseUpper);


                                    }

                                }

                            } else {

                                target.value += (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());

                                if(target.getAttribute("target")){

                                    if(__$(target.getAttribute("target"))){

                                        __$(target.getAttribute("target")).value = target.value;

                                    }

                                }

                                if (target.value.trim().length > 0) {

                                    if (__$("CAP") && !currentCaseUpper) {

                                        currentCaseUpper = !currentCaseUpper;

                                        showFixedKeyboard(__$(target.id), container, disabled, currentKeysNumeric, currentCaseUpper);

                                    }

                                }

                            }

                        }

                    }

                    if (!disabled['.']) {
                        __$('.').setAttribute('class', 'button blue');
                    }

                    if (target.getAttribute("ajaxURL") != null || target.getAttribute("ajaxUrl") != null || target.getAttribute("ajaxurl") != null) {

                        if (target.getAttribute("target") != null) {

                            checkLookup(target.getAttribute("target"));

                        }

                    }

                }
            }


            if (String(keys[i][j]).trim() == "Unknown") {

                button.style.fontSize = "14px";
                cell.style.marginTop = "-10px";

            }

            cell.appendChild(button);
        }
    }

    if (__$("fixedkeyboard")) {

        // [w, h, t, l]
        var kpos = checkCtrl(__$("fixedkeyboard"));
        var w = window.innerWidth;
        var h = window.innerHeight;

        if (kpos[0] + kpos[3] > w) {

            __$("fixedkeyboard").style.left = (w - kpos[0] - 10) + "px";

        }

        if (kpos[1] + kpos[2] > h) {

            __$("fixedkeyboard").style.top = (pos[2] - kpos[1] - 2) + "px";

        }

    }


}

function showKeyboard(ctrl, disabled, numbers, caps) {
    if (__$('popupkeyboard') && numbers == undefined) {

        document.body.removeChild(__$('popupkeyboard'));

    } else {

        if (__$('popupkeyboard')) {
            document.body.removeChild(__$('popupkeyboard'));
        }

        if (!__$("main")) {
            var main = document.createElement("div");
            main.id = "main";

            document.body.appendChild(main);
        }

        target = ctrl;

        var pos = checkCtrl(ctrl);

        if (typeof(disabled) == 'undefined') disabled = {};

        if (typeof(numbers) == 'undefined') numbers = false;

        if (typeof(caps) == 'undefined') caps = false;

        currentCaseUpper = caps;

        currentKeysNumeric = numbers;

        var div = document.createElement('div');
        div.id = 'popupkeyboard';
        div.style.position = 'absolute';
        div.style.border = '1px solid #5ca6c4';
        div.style.borderRadius = '10px';
        div.style.left = pos[3] + 'px';
        div.style.top = (pos[2] + pos[1] + 2 - window.scrollY - (__$("display") ? __$("display").scrollTop : 0)) + 'px';
        div.style.zIndex = '1000';
        div.style.backgroundColor = 'rgba(255,255,255,0.8)';

        document.body.appendChild(div);

        var keys;

        if (currentKeysNumeric) {

            keys = [
                [1, 2, 3, ':'],
                [4, 5, 6, '/'],
                [7, 8, 9, '.'],
                ['del', 0, '?', 'abc', "hide"]
            ];

        } else {

            if (currentKeysQWERTY) {

                keys = [
                    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                    ["A", "S", "D", "F", "G", "H", "J", "K", "L", 'del'],
                    ['', "Z", "X", "C", "V", "B", "N", "M", 'N/A', "CAP"],
                    ['@', 'space', ":", ".", "/", "num", "abc", "hide"]
                ];

            } else {

                keys = [
                    ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
                    ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
                    ["S", "T", "U", "V", "W", "X", "Y", "Z", "CAP"],
                    ['@', 'space', ":", ".", "/", "num", "qwe", "N/A", 'del', "hide"]
                ];

            }

        }

        var letters = {"A": true, "B": true, "C": true, "D": true, "E": true, "F": true, "G": true, "H": true,
            "I": true, "J": true, "K": true, "L": true, "M": true, "N": true, "O": true, "P": true, "Q": true,
            "R": true, "S": true, "T": true, "U": true, "V": true, "W": true, "X": true, "Y": true, "Z": true, "CAP": true};

        var table = document.createElement('div');
        table.style.display = 'table';
        table.style.margin = 'auto';

        div.appendChild(table);

        for (var i = 0; i < keys.length; i++) {
            var row = document.createElement('div');
            row.style.display = 'table-row';

            table.appendChild(row);

            for (var j = 0; j < keys[i].length; j++) {
                var cell = document.createElement('div');
                cell.style.display = 'table-cell';

                row.appendChild(cell);

                if (String(keys[i][j]).trim().length == 0) {
                    cell.innerHTML = "&nbsp;";

                    continue;
                }

                var button = document.createElement('button');
                button.setAttribute('class', (disabled[keys[i][j]] ? 'button gray' : 'button blue'));
                button.style.width = '65px';
                button.style.height = '60px';
                button.style.minWidth = '40px';
                button.style.minHeight = '40px';
                button.style.margin = '2px';
                button.style.fontSize = "24px";

                button.id = keys[i][j];

                if (target && keys[i][j] == '.') {
                    if (target.value.trim().match(/\./) || target.value.trim().length == 0) {
                        button.setAttribute('class', 'button gray');
                    } else {
                        button.setAttribute('class', 'button blue');
                    }
                }

                if (keys[i][j] == "hide") {

                    button.style.fontSize = "0.9em";

                }

                if (letters[keys[i][j]]) {

                    button.innerHTML = (String(keys[i][j]).trim().toLowerCase() == "cap" ? (!currentCaseUpper ? String(keys[i][j]).toLowerCase() : String(keys[i][j]).toUpperCase()) : (!currentCaseUpper ? String(keys[i][j]).toUpperCase() : String(keys[i][j]).toLowerCase()));

                } else {

                    button.innerHTML = keys[i][j];

                }

                if (disabled[keys[i][j]]) {
                    button.setAttribute('class', 'button gray');
                } else {
                    button.setAttribute('class', 'button blue');

                    button.onmousedown = function () {

                        if (this.innerHTML == 'del') {

                            if (target) {

                                if ("N/A" == target.value.trim()) {

                                    target.value = "";

                                } else {

                                    target.value = target.value.trim().substring(0, (target.value.trim().length - 1));

                                }

                                if(target.getAttribute("target")){

                                    if(__$(target.getAttribute("target"))){

                                        __$(target.getAttribute("target")).value = target.value;

                                    }

                                }

                            }

                        } else if (this.innerHTML == "N/A") {

                            target.value = "N/A";

                            if(target.getAttribute("target")){

                                if(__$(target.getAttribute("target"))){

                                    __$(target.getAttribute("target")).value = target.value;

                                }

                            }

                        } else if (this.innerHTML.trim() == 'hide') {

                            if (__$("shield")) {

                                if (__$("popup")) {

                                    document.body.removeChild(__$("popup"));

                                }

                                if (__$("popupkeyboard")) {

                                    var action = __$("shield").getAttribute("action");

                                    if (action != null) {

                                        eval(action);

                                    }

                                    document.body.removeChild(__$('popupkeyboard'));

                                }

                                document.body.removeChild(__$("shield"));

                                return;

                            } else if (__$('popupkeyboard')) {
                                document.body.removeChild(__$('popupkeyboard'));

                                return;
                            }

                        } else if (this.innerHTML.trim() == 'num') {

                            currentKeysNumeric = true;

                            showKeyboard(__$(target.id), disabled, currentKeysNumeric, currentCaseUpper);

                        } else if (this.innerHTML.trim() == 'abc') {

                            currentKeysQWERTY = false;

                            currentKeysNumeric = false;

                            showKeyboard(__$(target.id), disabled, currentKeysNumeric, currentCaseUpper);

                        } else if (this.innerHTML.trim() == 'qwe') {

                            currentKeysQWERTY = true;

                            currentKeysNumeric = false;

                            showKeyboard(__$(target.id), disabled, currentKeysNumeric, currentCaseUpper);

                        } else if (this.innerHTML.trim() == '?') {

                            target.value = "?";

                            if(target.getAttribute("target")){

                                if(__$(target.getAttribute("target"))){

                                    __$(target.getAttribute("target")).value = target.value;

                                }

                            }

                        } else if (this.innerHTML.trim().toLowerCase() == 'cap') {
                            currentCaseUpper = !currentCaseUpper;

                            var keys = Object.keys(letters);

                            if (!currentCaseUpper) {

                                for (var l = 0; l < keys.length - 1; l++) {
                                    if (__$(keys[l])) {
                                        __$(keys[l]).innerHTML = keys[l].toUpperCase();
                                    }
                                }

                                this.innerHTML = "cap";

                            } else {

                                for (var l = 0; l < keys.length - 1; l++) {
                                    if (__$(keys[l])) {
                                        __$(keys[l]).innerHTML = keys[l].toLowerCase();
                                    }
                                }

                                this.innerHTML = "CAP";

                            }

                        } else if (this.innerHTML.trim() == '&nbsp;') {

                            target.value += " ";

                            if(target.getAttribute("target")){

                                if(__$(target.getAttribute("target"))){

                                    __$(target.getAttribute("target")).value = target.value;

                                }

                            }

                        } else {

                            if (target.value.trim() == "?" || target.value.trim() == "Unknown" || target.value.trim() == "N/A") {

                                target.value = (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());

                                if(target.getAttribute("target")){

                                    if(__$(target.getAttribute("target"))){

                                        __$(target.getAttribute("target")).value = target.value;

                                    }

                                }

                            } else {

                                if (overwriteNumber) {

                                    target.value = (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());

                                    if(target.getAttribute("target")){

                                        if(__$(target.getAttribute("target"))){

                                            __$(target.getAttribute("target")).value = target.value;

                                        }

                                    }

                                    overwriteNumber = false;

                                } else {

                                    target.value += (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());

                                    if(target.getAttribute("target")){

                                        if(__$(target.getAttribute("target"))){

                                            __$(target.getAttribute("target")).value = target.value;

                                        }

                                    }

                                }

                            }

                        }

                        if (!disabled['.']) {
                            __$('.').setAttribute('class', 'button blue');
                        }

                        if (target.getAttribute("ajaxURL") != null || target.getAttribute("ajaxUrl") != null || target.getAttribute("ajaxurl") != null) {

                            if (target.getAttribute("target") != null) {

                                checkLookup(target.getAttribute("target"));

                            }

                        }

                    }
                }


                if (String(keys[i][j]).trim() == "Unknown") {

                    button.style.fontSize = "14px";
                    cell.style.marginTop = "-10px";

                }

                cell.appendChild(button);
            }
        }

        if (__$("popupkeyboard")) {

            // [w, h, t, l]
            var kpos = checkCtrl(__$("popupkeyboard"));
            var w = window.innerWidth;
            var h = window.innerHeight;

            if (kpos[0] + kpos[3] > w) {

                __$("popupkeyboard").style.left = (w - kpos[0] - 10) + "px";

            }

            if (kpos[1] + kpos[2] > h) {

                __$("popupkeyboard").style.top = (pos[2] - kpos[1] - 2) + "px";

            }

        }

    }


}

function loadLabels() {
    var labels = document.getElementsByTagName('LABEL');
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor != '') {
            var elem = document.getElementById(labels[i].htmlFor);
            if (elem)
                elem.label = labels[i];
        }
    }
}

function addTimer(parent, limit, label, scale) {

    if (parent == undefined || limit == undefined || label == undefined) {
        return;
    }

    var tbl = document.createElement("div");
    tbl.style.display = "table";
    tbl.style.borderSpacing = (5 * scale) + "px";
    tbl.style.width = (400 * scale) + "px";

    tbl.style.border = "1px solid #3465a4";
    tbl.style.borderRadius = (10 * scale) + "px";

    parent.appendChild(tbl);

    var row1 = document.createElement("div");
    row1.style.display = "table-row";

    tbl.appendChild(row1);

    var row2 = document.createElement("div");
    row2.style.display = "table-row";

    tbl.appendChild(row2);

    var row3 = document.createElement("div");
    row3.style.display = "table-row";

    tbl.appendChild(row3);

    var cell1 = document.createElement("div");
    cell1.style.display = "table-cell";
    cell1.style.textAlign = "left";
    cell1.style.verticalAlign = "middle";
    cell1.style.fontSize = (18 * scale) + "px";
    cell1.style.padding = (10 * scale) + "px";

    row1.appendChild(cell1);

    addLabel(cell1, label, (2.5 * scale) + "em");

    var cell2 = document.createElement("div");
    cell2.style.display = "table-cell";
    cell2.style.textAlign = "center";
    cell2.style.verticalAlign = "middle";
    cell2.style.padding = (10 * scale) + "px";
    cell2.style.paddingLeft = (60 * scale) + "px";
    cell2.style.paddingRight = (60 * scale) + "px";
    cell2.style.paddingBottom = "0px";

    row2.appendChild(cell2);

    var disc = document.createElement("div");
    disc.style.border = "2px solid #3465a4";
    disc.style.padding = (20 * scale) + "px";
    disc.style.fontSize = (120 * scale) + "px";
    disc.style.width = (350 * scale) + "px";
    disc.style.height = (350 * scale) + "px";
    disc.style.borderRadius = (350 * scale) + "px";
    disc.style.verticalAlign = "middle";
    disc.style.textAlign = "center";
    disc.style.marginBottom = (-40 * scale) + "px";

    cell2.appendChild(disc);

    var time = document.createElement("div");
    time.style.marginTop = (100 * scale) + "px";
    time.id = "time" + parent.id;
    time.innerHTML = "00:00";

    disc.appendChild(time);

    var cell3 = document.createElement("div");
    cell3.style.display = "cell";
    cell3.style.textAlign = "right";
    cell3.style.paddingBottom = (10 * scale) + "px";
    cell3.style.paddingRight = (10 * scale) + "px";
    cell3.id = "cell3_" + parent.id;

    row3.appendChild(cell3);

    var btn = addButton(cell3, "Start", "green");

    btn.style.width = (100 * scale) + "px";
    btn.setAttribute("limit", limit);
    btn.id = "btnTmr" + parent.id;
    btn.setAttribute("target", parent.id);

    btn.style.fontSize = (28 * scale) + "px";

    btn.style.minWidth = (100 * scale) + "px";

    btn.style.minHeight = (60 * scale) + "px";

    btn.style.width = (100 * scale) + "px";

    btn.style.height = (80 * scale) + "px";

    btn.onmousedown = function () {

        countDown(this.getAttribute('target'), this.getAttribute('limit'))

    }

    return tbl;

}

function countDown(id, limit) {

    clearTimeout(timerHandles[id]);

    if (timers[id] == undefined) {

        if (limit != undefined) {

            timers[id] = parseInt(limit) * 60;

            if (__$("btnTmr" + id)) {

                __$("btnTmr" + id).className = "button red";

                __$("btnTmr" + id).innerHTML = "Stop";

                __$("btnTmr" + id).onmousedown = function () {

                    if (this.innerHTML.trim().toLowerCase() == "reset") {

                        this.innerHTML = "Start";

                        this.className = "button green";

                        if (__$("time" + this.getAttribute('target'))) {

                            __$("time" + this.getAttribute('target')).innerHTML = "00:00";

                        }

                        this.onmousedown = function () {

                            countDown(this.getAttribute('target'), this.getAttribute('limit'));

                        }

                    } else {

                        clearTimeout(timerHandles[this.getAttribute("target")]);

                        delete timers[this.getAttribute("target")];

                        this.innerHTML = "Reset";

                    }

                }

            }

        }

    } else {

        timers[id] -= 1;

    }

    var seconds = timers[id] % (60);

    var minutes = (timers[id] - seconds) / (60);

    if (__$("time" + id)) {

        __$("time" + id).innerHTML = padZeros(minutes, 2) + ":" + padZeros(seconds, 2);

    }

    if (timers[id] <= 0) {

        delete timers[id];

        if (__$("btnTmr" + id)) {

            __$("btnTmr" + id).innerHTML = "Start";

            __$("btnTmr" + id).className = "button green";

            if (__$("time" + id)) {

                __$("time" + id).innerHTML = "00:00";

            }

            __$("btnTmr" + id).onmousedown = function () {

                countDown(this.getAttribute('target'), this.getAttribute('limit'));

            }
        }

    } else {

        timerHandles[id] = setTimeout("countDown('" + id + "', '" + limit + "')", 1000);

    }

}

function addAge(parent, target, date, label1, label2) {

    if (parent == undefined || target == undefined || label1 == undefined || label2 == undefined) {
        return;
    }

    parent.innerHTML = "";

    var fontsize = "20px";

    var tbl = document.createElement("div");
    tbl.style.display = "table";
    tbl.style.borderSpacing = "5px";
    tbl.style.margin = "auto";

    tbl.style.borderRadius = "10px";

    parent.appendChild(tbl);

    var row1 = document.createElement("div");
    row1.style.display = "table-row";

    tbl.appendChild(row1);

    var cell1_1 = document.createElement("div");
    cell1_1.style.display = "table-cell";
    cell1_1.id = "cell1_1_" + target.id;
    cell1_1.style.padding = "10px";
    cell1_1.style.fontStyle = "italic";
    cell1_1.style.textAlign = "center";
    cell1_1.style.fontSize = fontsize;

    row1.appendChild(cell1_1);

    addLabel(cell1_1, label1, fontsize);

    var cell1_2 = document.createElement("div");
    cell1_2.style.fontWeight = "bold";
    cell1_2.style.fontStyle = "italic";
    cell1_2.style.textAlign = "center";
    cell1_2.style.padding = "10px";
    cell1_2.innerHTML = "OR";
    cell1_2.style.fontSize = fontsize;

    row1.appendChild(cell1_2);

    var cell1_3 = document.createElement("div");
    cell1_3.style.display = "table-cell";
    cell1_3.id = "cell1_3_" + target.id;
    cell1_3.style.padding = "10px";
    cell1_3.style.fontStyle = "italic";
    cell1_3.style.textAlign = "center";
    cell1_3.style.fontSize = fontsize;

    row1.appendChild(cell1_3);

    addLabel(cell1_3, label2, fontsize);

    var row2 = document.createElement("div");
    row2.style.display = "table-row";

    tbl.appendChild(row2);

    var cell2_1 = document.createElement("div");
    cell2_1.style.display = "table-cell";
    cell2_1.id = "cell2_1_" + target.id;
    cell2_1.style.textAlign = "center";

    row2.appendChild(cell2_1);

    addDate(cell2_1, target, date);

    var cell2_2 = document.createElement("div");
    cell2_2.style.display = "table-cell";
    cell2_2.id = "cell2_2_" + target.id;
    cell2_2.style.textAlign = "center";
    cell2_2.innerHTML = "&nbsp;";

    row2.appendChild(cell2_2);

    var cell2_3 = document.createElement("div");
    cell2_3.style.display = "table-cell";
    cell2_3.id = "cell2_3_" + target.id;
    cell2_3.style.textAlign = "center";
    cell2_3.style.verticalAlign = "middle";

    row2.appendChild(cell2_3);

    var age = addTextbox(cell2_3, "number", target);

    age.style.width = "100px";
    age.style.fontSize = "24px";
    age.style.textAlign = "center";
    age.setAttribute("target", target.id);
    age.id = "age" + target.id;

    age.onmousedown = function () {

        overwriteNumber = true;

        if (__$('popupkeyboard')) {

            document.body.removeChild(__$('popupkeyboard'));

        } else {

            showKeyboard(__$('age' + this.getAttribute('target')), {':': ':', '/': '/', '.': '.', 'abc': 'abc'}, true);

        }

        showShield("checkDate('" + this.getAttribute('target') + "', true)");

        checkDate(this.getAttribute('target'), true);

    }
}

function addDate(parent, target, date) {
    if (parent == undefined || target == undefined) {
        return;
    }

    var currentdate;

    if (date == undefined || date == null || date.trim().length == 0) {

        if (target.value.trim().match(/^(\d|\d{2}|\?)\/([A-Za-z]{3}|\?)\/(\d{4}|\?)$/)) {
            currentdate = target.value.trim().split("/");

            date = new Date(currentdate[2] + "-" + padZeros((monthNames[currentdate[1]] + 1), 2) + "-" + padZeros(parseInt(currentdate[0]), 2));
        } else {

            date = new Date();

        }

    } else if (target.value.trim().match(/^(\d|\d{2}|\?)\/([A-Za-z]{3}|\?)\/(\d{4}|\?)$/)) {
        currentdate = target.value.trim().split("/");

        date = new Date(currentdate[2] + "-" + padZeros((monthNames[currentdate[1]] + 1), 2) + "-" + padZeros(parseInt(currentdate[0]), 2));
    } else {

        date = new Date(date);

    }

    var tbl = document.createElement("div");
    tbl.style.display = "table";
    tbl.style.borderSpacing = "5px";

    parent.appendChild(tbl);

    var cells;

    if (target.id == "birthdate") {

        cells = [
            [

                {
                    "type": "button",
                    "id": "btnAddYearFor" + target.id,
                    "target": target.id,
                    "value": "+",
                    "onmousedown": "incrementYear(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnAddMonthFor" + target.id,
                    "target": target.id,
                    "value": "+",
                    "onmousedown": "incrementMonth(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnAddDateFor" + target.id,
                    "target": target.id,
                    "value": "+",
                    "onmousedown": "incrementDate(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                }
                ,
                {
                    "type": "hidden"

                }


            ],
            [

                {
                    "type": "input",
                    "id": "txtYearFor" + target.id,
                    "target": target.id,
                    "value": (!isNaN(date.getFullYear()) ? date.getFullYear() : (currentdate.length == 3 ? currentdate[2] : "?")),
                    "onmousedown": "overwriteNumber = true; if(__$('keyboard')){document.body.removeChild(__$('keyboard'));} else {showShield(\"checkDate('\" + this.getAttribute('target') + \"', false)\"); showKeyboard(__$('txtYearFor' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);} checkDate(this.getAttribute('target'));",
                    "class": "input_cell",
                    "style": "font-size: 24px; text-align: center; width: 80%;"
                },
                {
                    "type": "input",
                    "id": "txtMonthFor" + target.id,
                    "target": target.id,
                    "value": (typeof(months[date.getMonth()]) != "undefined" ? months[date.getMonth()] : (currentdate.length == 3 ? currentdate[1] : "?")),
                    "onmousedown": "showShield(); addList(__$('txtMonthFor' + this.getAttribute('target')),{'Jan':'January','Feb':'February','Mar':'March','Apr':'April','May':'May','Jun':'June','Jul':'July','Aug':'August','Sep':'September','Oct':'October','Nov':'November','Dec':'December','?':'Unknown'},'single',__$('txtMonthFor' + this.getAttribute('target')),__$('txtMonthFor' + this.getAttribute('target')), 'checkDate(\"' + this.getAttribute('target') + '\")'); checkDate(this.getAttribute('target'));",
                    "class": "input_cell",
                    "style": "font-size: 24px; text-align: center; width: 80%;"
                },
                {
                    "type": "input",
                    "id": "txtDateFor" + target.id,
                    "target": target.id,
                    "value": (!isNaN(date.getDate()) ? date.getDate() : (currentdate.length == 3 ? currentdate[0] : "?")),
                    "onmousedown": "overwriteNumber = true; if(__$('keyboard')){document.body.removeChild(__$('keyboard'));} else {showShield(\"checkDate('\" + this.getAttribute('target') + \"', false)\"); showKeyboard(__$('txtDateFor' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);} checkDate(this.getAttribute('target'));",
                    "class": "input_cell",
                    "style": "font-size: 24px; text-align: center; width: 80%;"
                }
                ,
                {
                    "type": "button",
                    "id": "btnToday" + target.id,
                    "target": target.id,
                    "value": I18n.t("forms.buttons.today"),
                    "onmousedown": "getCurrentDate(this.getAttribute('target'))",
                    "class": "button green",
                    "style": "height: 58px; margin: auto; width: 100%;"
                }
            ],
            [
                {
                    "type": "button",
                    "id": "btnSubtractYearFor" + target.id,
                    "target": target.id,
                    "value": "-",
                    "onmousedown": "decrementYear(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnSubtractMonthFor" + target.id,
                    "target": target.id,
                    "value": "-",
                    "onmousedown": "decrementMonth(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnSubtractDateFor" + target.id,
                    "target": target.id,
                    "value": "-",
                    "onmousedown": "decrementDate(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                }
                ,
                {
                    "type": "hidden"
                }

            ]
        ];

    } else {

        cells = [
            [

                {
                    "type": "button",
                    "id": "btnAddYearFor" + target.id,
                    "target": target.id,
                    "value": "+",
                    "onmousedown": "incrementYear(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnAddMonthFor" + target.id,
                    "target": target.id,
                    "value": "+",
                    "onmousedown": "incrementMonth(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnAddDateFor" + target.id,
                    "target": target.id,
                    "value": "+",
                    "onmousedown": "incrementDate(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                }


            ],
            [

                {
                    "type": "input",
                    "id": "txtYearFor" + target.id,
                    "target": target.id,
                    "value": (!isNaN(date.getFullYear()) ? date.getFullYear() : (currentdate.length == 3 ? currentdate[2] : "?")),
                    "onmousedown": "overwriteNumber = true; if(__$('keyboard')){document.body.removeChild(__$('keyboard'));} else {showShield(\"checkDate('\" + this.getAttribute('target') + \"', false)\"); showKeyboard(__$('txtYearFor' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);} checkDate(this.getAttribute('target'));",
                    "class": "input_cell",
                    "style": "font-size: 24px; text-align: center; width: 80%;"
                },
                {
                    "type": "input",
                    "id": "txtMonthFor" + target.id,
                    "target": target.id,
                    "value": (typeof(months[date.getMonth()]) != "undefined" ? months[date.getMonth()] : (currentdate.length == 3 ? currentdate[1] : "?")),
                    "onmousedown": "showShield(); addList(__$('txtMonthFor' + this.getAttribute('target')),{'Jan':'January','Feb':'February','Mar':'March','Apr':'April','May':'May','Jun':'June','Jul':'July','Aug':'August','Sep':'September','Oct':'October','Nov':'November','Dec':'December','?':'Unknown'},'single',__$('txtMonthFor' + this.getAttribute('target')),__$('txtMonthFor' + this.getAttribute('target')), 'checkDate(\"' + this.getAttribute('target') + '\")'); checkDate(this.getAttribute('target'));",
                    "class": "input_cell",
                    "style": "font-size: 24px; text-align: center; width: 80%;"
                },
                {
                    "type": "input",
                    "id": "txtDateFor" + target.id,
                    "target": target.id,
                    "value": (!isNaN(date.getDate()) ? date.getDate() : (currentdate.length == 3 ? currentdate[0] : "?")),
                    "onmousedown": "overwriteNumber = true; if(__$('keyboard')){document.body.removeChild(__$('keyboard'));} else {showShield(\"checkDate('\" + this.getAttribute('target') + \"', false)\"); showKeyboard(__$('txtDateFor' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);} checkDate(this.getAttribute('target'));",
                    "class": "input_cell",
                    "style": "font-size: 24px; text-align: center; width: 80%;"
                }


            ],
            [
                {
                    "type": "button",
                    "id": "btnSubtractYearFor" + target.id,
                    "target": target.id,
                    "value": "-",
                    "onmousedown": "decrementYear(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnSubtractMonthFor" + target.id,
                    "target": target.id,
                    "value": "-",
                    "onmousedown": "decrementMonth(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                },
                {
                    "type": "button",
                    "id": "btnSubtractDateFor" + target.id,
                    "target": target.id,
                    "value": "-",
                    "onmousedown": "decrementDate(this.getAttribute('target'))",
                    "class": "button blue",
                    "style": "height: 60px; margin: auto; width: 100%;"
                }


            ]
        ];

    }

    for (var i = 0; i < cells.length; i++) {
        var row = document.createElement("div");
        row.style.display = "table-row";

        tbl.appendChild(row);

        for (var j = 0; j < cells[i].length; j++) {
            var cell = document.createElement("div");
            cell.style.display = "table-cell";
            cell.style.width = "140px";
            cell.style.textAlign = "center";

            row.appendChild(cell);

            var input = document.createElement("input");

            for (var key in cells[i][j]) {
                input.setAttribute(key, cells[i][j][key]);
            }

            cell.appendChild(input);
        }
    }

    return tbl;
}

function incrementYear(id) {
    if (__$("txtYearFor" + id)) {
        var yr = parseInt(__$("txtYearFor" + id).value.trim());

        yr++;

        __$("txtYearFor" + id).value = yr;

        checkDate(id);
    }
}

function decrementYear(id) {
    if (__$("txtYearFor" + id)) {
        var yr = parseInt(__$("txtYearFor" + id).value.trim());

        yr--;

        __$("txtYearFor" + id).value = yr;

        checkDate(id);
    }
}

function incrementMonth(id) {
    if (__$("txtMonthFor" + id)) {
        var month = monthNames[__$("txtMonthFor" + id).value.trim()];

        if (month + 1 < 12) {
            month++;
        } else {
            month = 0;
        }

        __$("txtMonthFor" + id).value = months[month];

        checkDate(id);
    }
}

function decrementMonth(id) {
    if (__$("txtMonthFor" + id)) {
        var month = monthNames[__$("txtMonthFor" + id).value.trim()];

        if (month - 1 >= 0) {
            month--;
        } else {
            month = 11;
        }

        __$("txtMonthFor" + id).value = months[month];

        checkDate(id);
    }
}

function incrementDate(id) {
    if (__$("txtDateFor" + id)) {
        var value = parseInt(__$("txtDateFor" + id).value.trim());

        var month = monthNames[__$("txtMonthFor" + id).value.trim()];

        if (month + 2 < 12) {
            month += 2;
        } else {
            month = 1;
        }

        var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")

        date.setDate(date.getDate() - 1);

        if (value + 1 <= date.getDate()) {
            value++;
        } else {
            value = 1;
        }

        __$("txtDateFor" + id).value = value;

        checkDate(id);
    }
}

function decrementDate(id) {
    if (__$("txtDateFor" + id)) {
        var value = parseInt(__$("txtDateFor" + id).value.trim());

        var month = monthNames[__$("txtMonthFor" + id).value.trim()];

        if (month + 2 < 12) {
            month += 2;
        } else {
            month = 1;
        }

        var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")

        date.setDate(date.getDate() - 1);

        if (value - 1 > 0) {
            value--;
        } else {
            value = date.getDate();
        }

        __$("txtDateFor" + id).value = value;


        checkDate(id);
    }
}

function getCurrentDate(id) {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    __$("txtDateFor" + id).value = day;
    __$("txtMonthFor" + id).value = months[month];
    __$("txtYearFor" + id).value = year;

    checkDate(id);

}

function checkDate(id, byAge) {

    if (__$("txtDateFor" + id) && __$("txtYearFor" + id) && __$("txtMonthFor" + id)) {

        if (byAge == undefined || byAge == false) {

            if (!__$("txtYearFor" + id).value.trim().match(/^\d{4}$/)) {

                __$("txtYearFor" + id).value = "?";

                __$("txtMonthFor" + id).value = "?";

                __$("txtDateFor" + id).value = "?";

                if (__$(id)) {

                    __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("textFor" + id)) {

                    __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("age" + id)) {

                    __$("age" + id).value = "";

                }

                return;

            }

            if (__$("txtMonthFor" + id).value.trim() == "?") {

                __$("txtMonthFor" + id).value = "?";

                __$("txtDateFor" + id).value = "?";

                if (__$(id)) {

                    __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("textFor" + id)) {

                    __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("age" + id)) {

                    var actual = __$("txtYearFor" + id).value.trim() + "-" + padZeros((new Date()).getMonth() + 1, 2) + "-" + padZeros((new Date()).getDate(), 2);

                    var age = ((new Date()) - (new Date(actual))) / (365 * 24 * 60 * 60 * 1000);

                    __$("age" + id).value = Math.round(age);

                }

                return;

            }

            if (__$("txtDateFor" + id).value.trim() == "?") {

                __$("txtDateFor" + id).value = "?";

                if (__$(id)) {

                    __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("textFor" + id)) {

                    __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("age" + id)) {

                    var actual = __$("txtYearFor" + id).value.trim() + "-" + padZeros((new Date()).getMonth() + 1, 2) + "-" + padZeros((new Date()).getDate(), 2);

                    var age = ((new Date()) - (new Date(actual))) / (365 * 24 * 60 * 60 * 1000);

                    __$("age" + id).value = Math.round(age);

                }

                return;

            }

            var value = parseInt(__$("txtDateFor" + id).value.trim());

            var month = monthNames[__$("txtMonthFor" + id).value.trim()];

            if (month + 1 < 12) {
                month += 2;
            } else {
                month = 1;
            }

            var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")

            date.setDate(date.getDate() - 1);

            if (value > date.getDate()) {
                value = date.getDate();
            }

            __$("txtDateFor" + id).value = value;

            if (__$(id)) {

                __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

            }

            if (__$("textFor" + id)) {

                __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

            }

            if (__$("age" + id)) {

                var actual = __$("txtYearFor" + id).value.trim() + "-" + padZeros((month - 1 < 1 ? 12 : (month - 1)), 2) + "-" + padZeros(parseInt(__$("txtDateFor" + id).value.trim()), 2);

                var age = ((new Date()) - (new Date(actual))) / (365 * 24 * 60 * 60 * 1000);

                __$("age" + id).value = Math.round(age);

            }

        } else {

            if (__$("age" + id)) {

                var age = parseInt(__$("age" + id).value);

                if (!isNaN(age)) {

                    var yrs = (new Date()).getFullYear() - age;

                    __$("txtYearFor" + id).value = yrs;

                    __$("txtMonthFor" + id).value = "?";

                    __$("txtDateFor" + id).value = "?";

                } else {

                    __$("txtYearFor" + id).value = "?";

                    __$("txtMonthFor" + id).value = "?";

                    __$("txtDateFor" + id).value = "?";

                }
            }

            if (__$(id)) {

                if (!__$("txtYearFor" + id).value.trim().match(/^\d{4}$/)) {

                    __$("txtYearFor" + id).value = "?";

                    __$("txtMonthFor" + id).value = "?";

                    __$("txtDateFor" + id).value = "?";

                    if (__$(id)) {

                        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    if (__$("age" + id)) {

                        __$("age" + id).value = "";

                    }

                    if (__$("textFor" + id)) {

                        __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    return;

                }

                if (__$("txtMonthFor" + id).value.trim() == "?") {

                    __$("txtMonthFor" + id).value = "?";

                    __$("txtDateFor" + id).value = "?";

                    if (__$(id)) {

                        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    if (__$("age" + id)) {

                        var actual = __$("txtYearFor" + id).value.trim() + "-" + padZeros((new Date()).getMonth() + 1, 2) + "-" + padZeros((new Date()).getDate(), 2);

                        var age = ((new Date()) - (new Date(actual))) / (365 * 24 * 60 * 60 * 1000);

                        __$("age" + id).value = Math.round(age);

                    }

                    if (__$(id)) {

                        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    if (__$("textFor" + id)) {

                        __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    return;

                }

                if (__$("txtDateFor" + id).value.trim() == "?") {

                    __$("txtDateFor" + id).value = "?";

                    if (__$(id)) {

                        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    if (__$("age" + id)) {

                        var actual = __$("txtYearFor" + id).value.trim() + "-" + padZeros((new Date()).getMonth() + 1, 2) + "-" + padZeros((new Date()).getDate(), 2);

                        var age = ((new Date()) - (new Date(actual))) / (365 * 24 * 60 * 60 * 1000);

                        __$("age" + id).value = Math.round(age);

                    }

                    if (__$(id)) {

                        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    if (__$("textFor" + id)) {

                        __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                    }

                    return;

                }

                var value = parseInt(__$("txtDateFor" + id).value.trim());

                var month = monthNames[__$("txtMonthFor" + id).value.trim()];

                if (month + 1 < 12) {
                    month += 2;
                } else {
                    month = 1;
                }

                var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")

                date.setDate(date.getDate() - 1);

                if (value > date.getDate()) {
                    value = date.getDate();
                }

                __$("txtDateFor" + id).value = value;

                if (__$(id)) {

                    __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                if (__$("textFor" + id)) {

                    __$("textFor" + id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

                }

                // __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();

            }

        }
    }

}

/*
 parent:   control to attach to
 boxType:  type of textbox [text|password|barcode|number]
 [target]:   control to update onchange (OPTIONAL)
 [callback]: callback function to call when barcode scanned (OPTIONAL)
 */
function addTextbox(parent, boxType, target, callback) {
    if (parent == undefined || target == undefined) {
        return;
    }

    if (boxType == undefined) {

        if (__$(target)) {

            if (__$(target).type != undefined && __$(target).type.toLowerCase() == "password") {

                boxType = "password";

            } else if (__$(target).type != undefined && __$(target).type.toLowerCase() == "barcode") {

                boxType = "barcode";

            } else if (__$(target).type != undefined && __$(target).type.toLowerCase() == "number") {

                boxType = "number";

            } else {

                boxType = "text";

            }

        } else {

            boxType = "text";

        }

    }

    var txt = document.createElement("input");
    txt.style.fontSize = "1.2em";
    txt.style.padding = "10px";
    txt.style.border = "1px solid #3465a4";
    txt.style.borderRadius = "10px";
    txt.style.width = "98.5%";
    txt.style.margin = "auto";
    txt.setAttribute("target", target.id);
    txt.setAttribute("fieldtype", boxType.toLowerCase());

    parent.appendChild(txt);

    /*txt.onchange = function () {
        if (__$(this.getAttribute("target"))) {
            __$(this.getAttribute("target")).value = this.value;
        }
    }

    txt.onkeyup = function () {
        if (__$(this.getAttribute("target"))) {
            __$(this.getAttribute("target")).value = this.value;
        }
    }*/

    switch (boxType.toLowerCase()) {
        case "password":
            txt.setAttribute("type", "password");

            break;
        case "number":
            txt.setAttribute("type", "number");

            break;
        case "barcode":

            if (callback != undefined) {
                // eval(callback);

                txt.setAttribute("callback", callback);

            }

        default:
            txt.setAttribute("type", "text");

            break;
    }

    return txt;

}

function addList(parent, options, optionType, target1, target2, action, lHeight, lWidth) {
    if (parent == undefined || options == undefined || target1 == undefined || target2 == undefined || optionType == undefined) {
        return;
    }

    var id = parent.id;

    if (__$(id)) {

        if (__$("popupkeyboard")) {

            document.body.removeChild(__$("popupkeyboard"));

        } else {

            var pos = checkCtrl(__$(id));
            var list = document.createElement("div");
            list.style.position = "absolute";
            list.style.border = "1px solid #999";
            list.style.boxShadow = "inset 0px 11px 8px -10px #CCC, inset 0px -11px 8px -10px #CCC";
            list.style.width = (lWidth != undefined ? lWidth : "300px");
            list.style.height = (lHeight != undefined ? lHeight : "618px");
            list.id = "popupkeyboard";
            list.style.left = (pos[3]) + "px";
            list.style.top = (pos[2] + pos[1] - (__$("main-content-area") ? __$("main-content-area").scrollTop : 0)) + "px";
            list.style.backgroundColor = "#fff";
            list.style.overflow = "auto";

            document.body.appendChild(list);

            addCombo(list, options, optionType, target1, target2, (optionType == "single" ? true : false), id, action);

            // [w, h, t, l]
            var lpos = checkCtrl(__$("popupkeyboard"));
            var w = window.innerWidth;
            var h = window.innerHeight;

            if (lpos[0] + lpos[3] > w) {

                __$("popupkeyboard").style.left = (w - lpos[0] - 10) + "px";

            }

            if (lpos[1] + lpos[2] > h) {

                if ((pos[2] - lpos[1] + 5) < 0) {

                    __$("popupkeyboard").style.top = (pos[2] - lpos[1] + ((pos[2] - lpos[1] - 5) * -1)) + "px";

                } else {

                    __$("popupkeyboard").style.top = (pos[2] - lpos[1] - 2) + "px";

                }

            }

        }
    }

}

/*
 parent:       control to attach to
 options:      value:display associative array e.g. {"F":"Female","M":"Male"}
 optionType:   [single|multiple] for single or multiple selection with
 default single selection
 target1:       target display control to receive value
 target2:       target hidden control to receive value
 */
function addCombo(parent, options, optionType, target1, target2, collapseOnClick, id, action, selected) {
    if (parent == undefined || options == undefined || target1 == undefined || target2 == undefined || optionType == undefined) {

        return;
    }

    if (collapseOnClick == undefined) {

        collapseOnClick = false;

    }

    if (id == undefined) {

        id = null;

    }

    if (action == undefined) {

        action = null;

    }

    if (selected == undefined) {

        selected = {};

    }

    var base = document.createElement("div");
    base.style.width = "100%";
    base.style.height = "100%"; // "618px";
    base.style.overflow = "auto";

    parent.appendChild(base);

    var ul = document.createElement("ul");
    ul.style.marginTop = "0px";
    ul.style.marginBottom = "5px";
    ul.style.paddingLeft = "0px";
    ul.style.paddingTop = "0px";

    var uls = document.getElementsByTagName("ul");

    ul.id = "ul" + (uls.length + 1);

    base.appendChild(ul);

    var i = 0;

    for (var key in options) {
        var li = document.createElement("li");
        li.style.color = "black";
        li.style.listStyle = "none";
        li.style.paddingLeft = "5px";
        li.style.paddingRight = "5px";
        li.style.marginTop = "2px";
        li.style.marginBottom = "2px";
        li.style.fontFamily = '"Nimbus Sans L","Arial Narrow",sans-serif';
        li.style.fontSize = "28px";
        li.style.padding = "20px";
        li.style.cursor = "pointer";
        li.setAttribute("target", ul.id);
        li.setAttribute("collapseonclick", collapseOnClick);
        li.setAttribute("parent", id);
        li.setAttribute("action", action);

        li.setAttribute("tag", (i % 2 > 0 ? "odd" : "even"));

        if (selected[key]) {

            li.style.backgroundColor = "lightblue";
            li.setAttribute("selecttag", true);
            li.style.color = "black";

        } else {

            li.style.backgroundColor = (i % 2 > 0 ? "#eee" : "");

        }

        li.onmouseover = function () {
            if (this.getAttribute("selecttag") == null) {
                this.style.backgroundColor = "#999";
                this.style.color = "#eee";
            }
        }

        li.onmouseout = function () {
            if (this.getAttribute("selecttag") == null) {
                if (this.getAttribute("tag") == "odd") {
                    this.style.backgroundColor = "#eee";
                } else {
                    this.style.backgroundColor = "";
                }
                this.style.color = "#000";
            }
        }

        li.setAttribute("value", key);
        li.innerHTML = options[key];

        ul.appendChild(li);

        switch (optionType.toLowerCase()) {
            case "single":
                actOnSingle(li, target1, target2);
                break;
            case "multiple":
                actOnMultiple(li, target1, target2);
                break;
        }

        i++;
    }

    return ul;
}

function actOnSingle(li, target1, target2) {
    if (li == undefined || target1 == undefined || target2 == undefined) {
        return;
    }

    li.onmousedown = function () {
        if (this.getAttribute("target") != null) {
            if (__$(this.getAttribute("target"))) {
                var opts = __$(this.getAttribute("target")).children;

                for (var i = 0; i < opts.length; i++) {
                    if (opts[i].getAttribute("selecttag") != null) {
                        opts[i].removeAttribute("selecttag");
                        opts[i].style.backgroundColor = (opts[i].getAttribute("tag") == "odd" ? "#eee" : "");

                        target1.value = "";
                        target2.value = "";
                    }
                }
            }

            this.setAttribute("selecttag", true);
            this.style.backgroundColor = "lightblue";
            this.style.color = "black";
            target1.value = this.innerHTML;
            target2.value = this.getAttribute("value");

            if (this.getAttribute("collapseonclick") != null && this.getAttribute("collapseonclick") == "true") {

                eval(this.getAttribute("action"));

                if (__$("popupkeyboard"))
                    document.body.removeChild(__$("popupkeyboard"));

                if (__$("shield")) {

                    showShield();

                }

            } else if (this.getAttribute("action") != null) {

                eval(this.getAttribute("action"));

            }

            checkConditions();
        }
    }
}

function actOnMultiple(li, target1, target2) {
    if (li == undefined || target1 == undefined || target2 == undefined) {
        return;
    }

    li.onmousedown = function () {
        var t1 = target1.value.split(";");
        var t2 = [];
        var opts = target2.options;

        for (var i = 0; i < opts.length; i++) {

            if (opts[i].selected) {

                t2.push(opts[i].value);

            }

        }

        var h1 = {};
        var h2 = {};

        for (var i = 0; i < t1.length; i++) {

            if (t1[i].trim().length > 0)
                h1[t1[i]] = true;

            if (t2[i] != undefined && t2[i].trim().length > 0)
                h2[t2[i]] = true;

        }

        if (this.getAttribute("selecttag") != null) {

            this.removeAttribute("selecttag");
            this.style.backgroundColor = (this.getAttribute("tag") == "odd" ? "#eee" : "");

            delete h1[this.innerHTML];
            delete h2[this.getAttribute("value")];

        } else {
            this.setAttribute("selecttag", true);
            this.style.backgroundColor = "lightblue";
            this.style.color = "black";

            h1[this.innerHTML] = true;
            h2[this.getAttribute("value")] = true;
        }

        var result1 = "";
        var result2 = "";

        for (var i in h1) {

            result1 += i + ";";

        }

        for (var i = 0; i < opts.length; i++) {

            if (h2[opts[i].value]) {

                opts[i].selected = true;

            } else {

                opts[i].selected = false;

            }

        }

        target1.value = result1;
        // target2.value = result2;

    }
}

function addLabel(parent, text, size, color) {
    if (parent == undefined || text == undefined) {
        return;
    }

    if (color == undefined) {
        color = "black";
    }

    if (size == undefined) {
        size = "1em";
    }

    var lbl = document.createElement("label");
    lbl.style.color = color;
    lbl.style.fontSize = size;
    lbl.innerHTML = text

    parent.appendChild(lbl);

    return lbl;
}

function addButton(parent, text, color) {
    if (parent == undefined || text == undefined) {
        return;
    }

    if (color == undefined) {
        color = "blue";
    }

    var _button = document.createElement("button");
    _button.style.margin = "3px";
    _button.style.height = "60px";
    _button.innerHTML = text;

    switch (color.toLowerCase()) {
        case "green":
            _button.className = "button green";
            break;
        case "red":
            _button.className = "button red";
            break;
        case "gray":
            _button.className = "button gray";
            break;
        case "orange":
            _button.className = "button orange";
            break;
        default:
            _button.className = "button blue";
            break;
    }

    parent.appendChild(_button);

    return _button;
}

function greenButton(btn) {
    if (btn == undefined) {
        return;
    }

    btn.style.border = "1px solid #34740e";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "28px";
    btn.style.fonFamily = "arial helvetica, sans-serif";
    btn.style.padding = "10px 10px 10px 10px";
    btn.style.textDecoration = "none";
    btn.style.display = "inline-block";
    btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
    btn.style.fontWeight = "bold";
    btn.style.color = "#FFFFFF";
    btn.style.backgroundColor = "#4ba614";
    btn.style.backgroundImage = "-moz-linear-gradient(top, #4ba614, #008c00)";

    btn.onmouseout = function () {
        this.style.border = "1px solid #34740e";
        this.style.backgroundColor = "#4ba614";
        this.style.backgroundImage = "-moz-linear-gradient(top, #4ba614, #008c00)";
    }

    btn.onmouseover = function () {
        this.style.border = "1px solid #224b09";
        this.style.backgroundColor = "#36780f";
        this.style.backgroundImage = "-moz-linear-gradient(top, #36780f, #005900)";
    }
}

function redButton(btn) {
    if (btn == undefined) {
        return;
    }

    btn.style.border = "1px solid #72021c";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "28px";
    btn.style.fonFamily = "arial helvetica, sans-serif";
    btn.style.padding = "10px 10px 10px 10px";
    btn.style.textDecoration = "none";
    btn.style.display = "inline-block";
    btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
    btn.style.fontWeight = "bold";
    btn.style.color = "#FFFFFF";
    btn.style.backgroundColor = "#a90329";
    btn.style.backgroundImage = "-moz-linear-gradient(top, #a90329, #6d0019)";

    btn.onmouseout = function () {
        this.style.border = "1px solid #72021c";
        this.style.backgroundColor = "#a90329";
        this.style.backgroundImage = "-moz-linear-gradient(top, #a90329, #6d0019)";
    }

    btn.onmouseover = function () {
        this.style.border = "1px solid #450111";
        this.style.backgroundColor = "#77021d";
        this.style.backgroundImage = "-moz-linear-gradient(top, #77021d, #3a000d)";
    }
}

function grayButton(btn) {
    if (btn == undefined) {
        return;
    }

    btn.style.border = "1px solid #ccc";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "28px";
    btn.style.fonFamily = "arial helvetica, sans-serif";
    btn.style.padding = "10px 10px 10px 10px";
    btn.style.textDecoration = "none";
    btn.style.display = "inline-block";
    btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
    btn.style.fontWeight = "bold";
    btn.style.color = "#FFFFFF";
    btn.style.backgroundColor = "#a7cfdf";
    btn.style.backgroundImage = "-moz-linear-gradient(top, #ccc, #999)";

    btn.onmouseout = function () {
        this.style.border = "1px solid #ccc";
        this.style.backgroundColor = "#ccc";
        this.style.backgroundImage = "-moz-linear-gradient(top, #ccc, #999)";
    }

    btn.onmouseover = function () {
        this.style.border = "1px solid #ccc";
        this.style.backgroundColor = "#ddd";
        this.style.backgroundImage = "-moz-linear-gradient(top, #333, #ccc)";
    }

    btn.onmousedown = function () {
    }

}

function blueButton(btn) {
    if (btn == undefined) {
        return;
    }

    btn.style.border = "1px solid #7eb9d0";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "28px";
    btn.style.fonFamily = "arial helvetica, sans-serif";
    btn.style.padding = "10px 10px 10px 10px";
    btn.style.textDecoration = "none";
    btn.style.display = "inline-block";
    btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
    btn.style.fontWeight = "bold";
    btn.style.color = "#FFFFFF";
    btn.style.backgroundColor = "#a7cfdf";
    btn.style.backgroundImage = "-moz-linear-gradient(top, #a7cfdf, #23538a)";

    btn.onmouseout = function () {
        this.style.border = "1px solid #7eb9d0";
        this.style.backgroundColor = "#a7cfdf";
        this.style.backgroundImage = "-moz-linear-gradient(top, #a7cfdf, #23538a)";
    }

    btn.onmouseover = function () {
        this.style.border = "1px solid #5ca6c4";
        this.style.backgroundColor = "#82bbd1";
        this.style.backgroundImage = "-moz-linear-gradient(top, #82bbd1, #193b61)";
    }
}

function resize() {

    if (__$("main")) {

        __$("main").style.height = (window.innerHeight - 20) + 'px';

    } else {

        setTimeout("resize()", 100);

        return;

    }

    if (__$("display")) {
        __$("display").style.height = (window.innerHeight - 150) + 'px';
    }

    if (__$("__content") && __$("display")) {

        __$("__content").style.width = (window.innerWidth - 22) + "px";

        __$("__content").style.height = (window.innerHeight - 170) + "px";

        if (__$("main-content-area")) {

            __$("main-content-area").style.height = (window.innerHeight - 170 - 50 - 300) + "px";

        }

    }

}

function loadPage(section, back) {
    if (isNaN(section))
        return;

    if (back == undefined)
        back = false;

    currentPage = section;

    if (__$("__content")) {

        __$("__content").innerHTML = "";

    } else {

        var content = document.createElement("div");
        content.id = "__content";
        content.style.width = (window.innerWidth - 12) + "px";
        content.style.height = (window.innerHeight - 12) + "px";
        // content.style.border = "1px solid #000";

        if (__$("display")) {

            __$("display").appendChild(content);

        } else {

            document.body.appendChild(content);

        }

        document.body.style.margin = "5px";

    }

    var main = document.createElement("div");
    main.style.display = "table";
    // main.style.border = "1px solid #000";
    main.style.width = "100%";
    main.style.height = "100%";
    main.style.borderSpacing = "5px";

    __$("__content").appendChild(main);

    var row0 = document.createElement("div");
    row0.style.display = "table-row";

    main.appendChild(row0);

    var cell0_1 = document.createElement("div");
    cell0_1.style.display = "table-cell";
    cell0_1.style.borderBottom = "1px solid #3465a4";
    cell0_1.style.color = "#3465a4";
    cell0_1.style.overflow = "hidden";
    cell0_1.style.fontSize = "36px";
    cell0_1.style.height = "50px";
    cell0_1.innerHTML = (fieldsets[section].getElementsByTagName("legend")[0].innerHTML.trim().length > 50 ?
        fieldsets[section].getElementsByTagName("legend")[0].innerHTML.substr(0, 50) + "..." : fieldsets[section].getElementsByTagName("legend")[0].innerHTML);

    // row0.appendChild(cell0_1);

    if (__$("legend")) {

        __$("legend").innerHTML = (fieldsets[section].getElementsByTagName("legend")[0].innerHTML.trim().length > 50 ?
            fieldsets[section].getElementsByTagName("legend")[0].innerHTML.substr(0, 50) + "..." : fieldsets[section].getElementsByTagName("legend")[0].innerHTML) +
            "<p style='color: red; font-style: italic; font-size: 12px;'>* " + I18n.t("forms.legends.required_fields") +".</p>";

        // fieldsets[section].getElementsByTagName("legend")[0].innerHTML;

    }

    var row1 = document.createElement("div");
    row1.style.display = "table-row";

    main.appendChild(row1);

    var cell1_1 = document.createElement("div");
    cell1_1.style.display = "table-cell";
    cell1_1.style.borderBottom = "1px solid #3465a4";

    row1.appendChild(cell1_1);

    var row2 = document.createElement("div");
    row2.style.display = "table-row";

    main.appendChild(row2);

    var cell2_1 = document.createElement("div");
    cell2_1.style.display = "table-cell";
    cell2_1.style.height = "300px";

    row2.appendChild(cell2_1);

    var table = document.createElement("div");
    table.style.display = "table";
    table.style.width = "100%";
    table.style.height = "100%";

    cell2_1.appendChild(table);

    var row = document.createElement("div");
    row.style.display = "table-row";

    table.appendChild(row);

    var stage = document.createElement("div");
    stage.style.display = "table-cell";
    stage.style.border = "1px solid #3465a4";
    stage.style.overflow = "hidden";
    stage.style.borderRadius = "10px";
    stage.innerHTML = "&nbsp;";
    stage.id = "stage";
    stage.style.textAlign = "center";
    stage.style.verticalAlign = "top";
    stage.style.height = "300px";

    row.appendChild(stage);

    var toolsTable = document.createElement("div");
    toolsTable.style.display = "table";
    toolsTable.width = "100%";
    toolsTable.height = "100%";
    toolsTable.style.margin = "auto";
    toolsTable.style.marginTop = "0px";

    stage.appendChild(toolsTable);

    var toolsCell1 = document.createElement("div");
    toolsCell1.style.display = "table-cell";
    // toolsCell1.style.border = "1px solid #ccc";
    toolsCell1.style.borderRadius = "10px";
    toolsCell1.style.width = (window.innerWidth - 750) + "px";
    toolsCell1.style.height = (280) + "px";
    toolsCell1.style.overflow = "auto";
    toolsCell1.style.textAlign = "left";
    toolsCell1.id = "toolsCell1";

    toolsTable.appendChild(toolsCell1);

    var toolsCell2 = document.createElement("div");
    toolsCell2.style.display = "table-cell";
    // toolsCell2.style.border = "1px solid #ccc";
    toolsCell2.style.borderRadius = "10px";
    toolsCell2.style.width = (750) + "px";
    toolsCell2.style.height = (280) + "px";
    toolsCell2.id = "toolsCell2";

    toolsTable.appendChild(toolsCell2);

    var buttons = document.createElement("div");
    buttons.style.display = "table-cell";
    buttons.style.border = "1px solid #3465a4";
    buttons.style.overflow = "hidden";
    buttons.style.borderRadius = "10px";
    buttons.style.width = "120px";
    buttons.style.height = "100%";
    buttons.style.verticalAlign = "middle";

    row.appendChild(buttons);

    var btntable = document.createElement("div");
    btntable.style.display = "table";
    btntable.style.margin = "auto";
    btntable.style.borderSpacing = "5px";
    btntable.style.width = "100%";

    buttons.appendChild(btntable);

    var brow0 = document.createElement("div");
    brow0.style.display = "table-row";

    btntable.appendChild(brow0);

    var bcell0 = document.createElement("div");
    bcell0.style.display = "table-cell";
    bcell0.id = "btn0";

    brow0.appendChild(bcell0);

    var brow1 = document.createElement("div");
    brow1.style.display = "table-row";

    btntable.appendChild(brow1);

    var bcell1 = document.createElement("div");
    bcell1.style.display = "table-cell";
    bcell1.id = "btn1";

    brow1.appendChild(bcell1);

    var brow2 = document.createElement("div");
    brow2.style.display = "table-row";

    btntable.appendChild(brow2);

    var bcell2 = document.createElement("div");
    bcell2.style.display = "table-cell";
    bcell2.id = "btn2";

    brow2.appendChild(bcell2);

    var brow3 = document.createElement("div");
    brow3.style.display = "table-row";

    btntable.appendChild(brow3);

    var bcell3 = document.createElement("div");
    bcell3.style.display = "table-cell";
    bcell3.id = "btn3";

    brow3.appendChild(bcell3);

    btnCancel = addButton(__$("btn0"), I18n.t("forms.buttons.cancel"), "red");

    btnClear = addButton(__$("btn1"), I18n.t("forms.buttons.clear"), "blue");

    btnBack = addButton(__$("btn2"), I18n.t("forms.buttons.back"), "gray");

    btnNext = addButton(__$("btn3"), I18n.t("forms.buttons.next"), "green");

    if (btnCancel) {
        btnCancel.style.width = "98%";

        btnCancel.style.fontSize = "22px";

        btnCancel.onmousedown = function () {

            var msg = I18n.t("messages.cancel");

            var action = "if (typeof(cancelDestination) != 'undefined') { window.location = cancelDestination; }";

            showMsgForAction(msg, action);

        }
    }

    if (btnClear) {
        btnClear.style.width = "98%";

        btnClear.style.fontSize = "22px";
    }

    if (btnBack) {
        btnBack.style.width = "98%";

        btnBack.style.fontSize = "22px";
    }

    if (btnNext) {
        btnNext.style.width = "98%";

        btnNext.style.fontSize = "22px";
    }

    var fields = navigablefieldsets[section];	// fieldsets[section].elements;

    var mainContentArea = document.createElement("div");
    mainContentArea.style.overflowY = "auto";
    mainContentArea.id = "main-content-area";
    mainContentArea.style.height = (window.innerHeight - 40 - 50 - 300) + "px";
    mainContentArea.style.width = "100%";

    cell1_1.appendChild(mainContentArea);

    var work = document.createElement("div");
    work.id = "work";
    work.style.display = "table";
    work.style.width = "99.5%";

    mainContentArea.appendChild(work);

    if (fieldsets[section].getAttribute("custom") != null) {

        if (fieldsets[section].getAttribute("fs_onLoad") != null) {

            eval(fieldsets[section].getAttribute("fs_onLoad"));

        }

    } else {

        for (var i = 0; i < fields.length; i++) {

            if (fields[i].type == "radio" && __$("btn" + fields[i].id)) {

                continue;

            }

            if (fields[i].type == "hidden") {

                continue;

            }

            var row = document.createElement("div");
            row.style.display = "table-row";

            work.appendChild(row);

            for (var j = 0; j < 4; j++) {
                var cell = document.createElement("div");
                cell.style.display = "table-cell";

                switch (j) {
                    case 0:
                        cell.style.width = "40%";
                        cell.style.textAlign = "right";
                        cell.style.padding = "20px";
                        cell.id = "cell" + i + "." + j;

                        var label = addLabel(cell, (fields[i].label != undefined ? processLabelText(fields[i].label.innerHTML) +
                            (fields[i].getAttribute("optional") == null ? "<span style='color: red;'> *</span>" : "") : "Undefined"), textSize, "#333");

                        break;
                    case 1:
                        cell.innerHTML = "&nbsp;";
                        cell.style.width = "50px";
                        cell.style.textAlign = "center";
                        // cell.style.paddingTop = "20px";
                        cell.style.color = "blue";
                        cell.style.fontSize = "24px";
                        // cell.style.verticalAlign = "middle";
                        cell.id = "cell" + i + "." + j;
                        break;
                    case 3:
                        cell.innerHTML = "&nbsp;";
                        cell.style.width = "80px";
                        cell.style.textAlign = "center";
                        cell.style.verticalAlign = "middle";
                        cell.id = "cell" + i + "." + j;
                        break;
                    case 2:
                        cell.id = "cell" + i + "." + j;

                        if (fields[i].type == "radio") {

                            var labels = document.getElementsByTagName('LABEL');
                            for (var s = 0; s < labels.length; s++) {
                                if (labels[s].htmlFor != '' && labels[s].htmlFor == fields[i].name) {

                                    if (__$("cell" + i + ".0")) {

                                        __$("cell" + i + ".0").innerHTML = "";

                                        var label = addLabel(__$("cell" + i + ".0"), labels[s].innerHTML, textSize, "#333");

                                        break;

                                    }

                                }
                            }

                            var btns = document.getElementsByName(fields[i].name);

                            var choiceTable = document.createElement("div");
                            choiceTable.style.display = "table";

                            cell.appendChild(choiceTable);

                            var choiceRow = document.createElement("table-row");
                            choiceRow.style.display = "table-row";

                            choiceTable.appendChild(choiceRow);

                            for (var r = 0; r < btns.length; r++) {

                                var choiceCell = document.createElement("table-cell");
                                choiceCell.style.display = "table-cell";

                                choiceRow.appendChild(choiceCell);

                                var btnChoice = addButton(choiceCell, btns[r].label.innerHTML, (btns[r].checked ? "orange" : "blue"));

                                btnChoice.style.fontSize = "20px";

                                btnChoice.style.height = "60px";

                                btnChoice.name = "btn" + btns[r].name;

                                btnChoice.id = "btn" + btns[r].id;

                                btnChoice.setAttribute("target", btns[r].id);

                                btnChoice.setAttribute("pos", i);

                                btnChoice.setAttribute("section", section);

                                btnChoice.onmousedown = function () {

                                    var group = document.getElementsByName(this.name);

                                    for (var g = 0; g < group.length; g++) {

                                        group[g].className = "button blue";

                                    }

                                    if (__$(this.getAttribute("target"))) {

                                        __$(this.getAttribute("target")).click();

                                        this.className = "button orange";

                                    }

                                    cursorPos = parseInt(this.getAttribute("pos"));

                                    var section = parseInt(this.getAttribute("section"));

                                    navigateTo(cursorPos, section);

                                }

                            }

                        } else {

                            var fieldtype = fields[i].getAttribute("fieldtype");

                            var callback = fields[i].getAttribute("callback");

                            var txt = addTextbox(cell, fieldtype, fields[i].id, (callback != null ? callback : undefined));

                            txt.style.fontSize = textSize;

                            txt.id = "textFor" + fields[i].id;

                            txt.setAttribute("target", fields[i].id);

                            txt.setAttribute("pos", i);

                            if (fields[i].getAttribute("placeholder") != null) {

                                txt.setAttribute("placeholder", I18n.t("forms.place_holders." +fields[i].getAttribute("placeholder").toLowerCase().split(" ").join("_")));

                            }

                            txt.setAttribute("section", section);

                            if (fields[i].getAttribute("ajaxURL") != null) {

                                txt.setAttribute("ajaxURL", fields[i].getAttribute("ajaxURL"));

                            } else if (fields[i].getAttribute("ajaxUrl") != null) {

                                txt.setAttribute("ajaxURL", fields[i].getAttribute("ajaxUrl"));

                            } else if (fields[i].getAttribute("ajaxurl") != null) {

                                txt.setAttribute("ajaxURL", fields[i].getAttribute("ajaxurl"));

                            }

                            if (fields[i].tagName.toLowerCase() == "select" && fields[i].type.toLowerCase() == "select-multiple") {

                                var values = "";

                                var opts = fields[i].options;

                                for (var k = 0; k < opts.length; k++) {

                                    if (opts[k].selected) {

                                        values += opts[k].innerHTML + ";";

                                    }

                                }

                                txt.value = values;

                            } else {

                                txt.value = fields[i].value;

                            }

                            txt.onfocus = function () {

                                if (!buttonNavigation && validationControl != null && validationControl.id != this.id && !navigatingBack) {

                                    var canGo = clickCanGo();

                                    if (!canGo) {

                                        validationControl.focus();

                                        return;

                                    }

                                }

                                buttonNavigation = false;

                                var m = checkCtrl(__$("main-content-area"));

                                var c = checkCtrl(this);

                                // [w, h, t, l]

                                if ((m[2] + m[1]) < (c[2] + c[1])) {

                                    __$("main-content-area").scrollTop += 60;

                                } else if ((m[2] + m[1]) > c[2]) {

                                    __$("main-content-area").scrollTop -= 60;

                                }

                                cursorPos = parseInt(this.getAttribute("pos"));

                                var section = parseInt(this.getAttribute("section"));

                                navigatingBack = false;

                                validationControl = this;

                                if (navigablefieldsets[section][cursorPos].getAttribute("condition") != null) {

                                    checkConditions();

                                }

                                navigateTo(cursorPos, section);

                                if (this.getAttribute("callback") != null) {

                                    eval(this.getAttribute("callback"));

                                }

                            }

                        }

                        break;
                }

                row.appendChild(cell);
            }

        }

    }

    cursorPos = 0;      // (navigatingBack ? (fields.length - 1) : 0);

    if (navigatingBack) {

        [cursorPos, section] = getValidPreviousValue((fields.length - 1), section);

    }

    checkConditions();

    navigateTo(cursorPos, section, back);

    clearMarks(currentPage);

}

function navigateTo(pos, section, back) {

    if (back == undefined)
        back = false;

    timers = {};

    for (var t in timerHandles) {

        clearTimeout(timerHandles[t]);

    }

    cursorPos = pos;

    timerHandles = {};

    if (__$("popupkeyboard")) {

        document.body.removeChild(__$("popupkeyboard"));

    }

    if (fieldsets[section].getAttribute("condition") != null) {

        if (!eval(fieldsets[section].getAttribute("condition"))) {

            /*if (back) {

             var s = section - 1;

             while (s > 0) {

             if (!eval(fieldsets[s].getAttribute("condition"))) {

             s = s - 1;

             } else {

             section = s;

             break;

             }

             }

             incomplete = false;

             navigatingBack = true;

             loadPage(section - 1, true);

             } else {*/

            if (!back) {

                loadPage(section + 1);

                // }

                return;

            }

        }

    }

    var fields = navigablefieldsets[section];		// fieldsets[section].elements;

    if (fields[pos] != undefined && fields[pos].getAttribute("disabled") != null) {

        // if (incomplete)
        //    return;

        if ((pos + 1) < fields.length - 1) {

            navigateTo(pos + 1, section);

        } else if (section + 1 < fieldsets.length) {

            /*if (back) {

             navigatingBack = true;

             loadPage(section - 1);

             } else {*/

            if (!back) {

                checkValidity();

                if (incomplete)
                    return;

                loadPage(section + 1);

            }

            // }

        } else {

            checkValidity();

            if (incomplete)
                return;

            if (Object.keys(summaryHash).length > 0) {

                submitAfterSummary();

            } else {

                document.forms[0].submit();

            }

        }

        return;
    }

    var fieldtype = (fields[pos] != undefined ? fields[pos].getAttribute("fieldtype") : null);

    if (!__$("cursor")) {

        var cursor = document.createElement("label");
        cursor.id = "cursor";
        cursor.innerHTML = "&#9654;";

        document.body.appendChild(cursor);

    }

    if (__$("cell" + pos + ".1")) {

        __$("cell" + pos + ".1").appendChild(__$("cursor"));

    }

    if (fieldsets[section].getAttribute("custom") == null && __$("toolsCell2") && __$("toolsCell1")) {

        __$("toolsCell2").innerHTML = "&nbsp;";

        __$("toolsCell1").innerHTML = "&nbsp;";

    }

    if (fields[pos] != undefined && __$("toolsCell2") && __$("toolsCell1") && __$("textFor" + fields[pos].id)) {

        clearTimeout(tracker);

        tracker = setTimeout("checkChanges('" + fields[pos].id + "')", 500);

        __$("toolsCell2").style.verticalAlign = "middle";

        __$("toolsCell1").style.verticalAlign = "middle";

        if (btnClear != null) {

            btnClear.setAttribute("pos", pos);

            btnClear.setAttribute("section", section);

            btnClear.onmousedown = function () {

                validatingAlready = false;

                if (this.getAttribute("pos") != null && this.getAttribute("section") != null) {

                    var pos = parseInt(this.getAttribute("pos"));

                    var section = parseInt(this.getAttribute("section"));

                    var fields = navigablefieldsets[section];		// fieldsets[section].elements;

                    __$("textFor" + fields[pos].id).value = "";

                    if (fields[pos].tagName.toLowerCase() == "select" || fields[pos].getAttribute("ajaxURL") != null ||
                        fields[pos].getAttribute("ajaxurl") != null || fields[pos].getAttribute("ajaxUrl") != null) {

                        for (var k = pos + 1; k < fields.length; k++) {

                            fields[k].value = "";

                            if (__$("textFor" + fields[k].id)) {

                                __$("textFor" + fields[k].id).value = "";

                            }

                        }

                    }

                    if (fields[pos].tagName.toLowerCase() == "select") {

                        var opts = fields[pos].options;

                        for (var i = 0; i < opts.length; i++) {

                            opts[i].selected = false;

                        }

                    } else {

                        fields[pos].value = "";

                    }

                    navigateTo(pos, section);
                }

                validatingAlready = false;

            }

        }

        if (btnBack != null) {

            if (fields[pos - 1]) {
                if (fields[pos - 1].type == "radio") {
                    var radios = document.getElementsByName(fields[pos - 1].name);

                    btnBack.setAttribute("step", radios.length);
                } else {

                    btnBack.removeAttribute("step");

                }
            } else {

                btnBack.removeAttribute("step");

            }

            btnBack.setAttribute("pos", pos);

            btnBack.setAttribute("section", section);

            if ((section > 0 && pos > 0) || (section == 0 && pos > 0)) {

                btnBack.className = "button blue";

                btnBack.onmousedown = function () {

                    navigatingBack = true;

                    incomplete = false;

                    var pos = parseInt(this.getAttribute("pos")) - (this.getAttribute("step") != null ? parseInt(this.getAttribute("step")) : 1);

                    var section = parseInt(this.getAttribute("section"));

                    [pos, section] = getValidPreviousValue(pos, section);

                    navigateTo(pos, section, true);

                }

            } else if (section > 0 && pos == 0) {

                btnBack.className = "button blue";

                btnBack.onmousedown = function () {

                    navigatingBack = true;

                    incomplete = false;

                    var section = parseInt(this.getAttribute("section")) - 1;

                    var new_section = getValidPreviousSection(section);

                    loadPage(new_section, true);

                }

            } else {

                btnBack.className = "button gray";

                btnBack.onmousedown = function () {
                };

            }

        }

        if (btnNext != null) {

            btnNext.setAttribute("pos", pos);

            btnNext.setAttribute("section", section);

            if (section < fieldsets.length && pos < fields.length - 1) {

                btnNext.innerHTML = I18n.t("forms.buttons.next");

            } else if ((section < fieldsets.length - 1 && pos == fields.length - 1) || (section == fieldsets.length - 1 && pos < fields.length - 1)) {

                btnNext.innerHTML = I18n.t("forms.buttons.next");

            } else {

                btnNext.innerHTML = I18n.t("forms.buttons.finish");

            }

            btnNext.onmousedown = function () {

                buttonNavigation = true;

                if (validationControl != null && validationControl.id != this.id && !navigatingBack) {

                    var canGo = clickCanGo();

                    if (!canGo) {

                        return;

                    }

                }

                gotoQuestion(pos, section);

            }

        }

        loadControlKeys(fields, fieldtype, pos);

        if (fields[pos].getAttribute("tt_onload") != null) {

            eval(fields[pos].getAttribute("tt_onload"));

        }

    }

    if (validationControl != null && (validationControl.getAttribute("ajaxURL") != null || validationControl.getAttribute("ajaxUrl") != null || validationControl.getAttribute("ajaxurl") != null)) {

        checkLookup(validationControl.getAttribute("target"));

    }

    if (fields[pos] != undefined && __$("textFor" + fields[pos].id)) {

        __$("textFor" + fields[pos].id).focus();

        var m = checkCtrl(__$("main-content-area"));

        var c = checkCtrl(__$("textFor" + fields[pos].id));

        // [w, h, t, l]

        if ((m[2] + m[1]) < (c[2] + c[1])) {

            __$("main-content-area").scrollTop += 60;

        } else if ((m[2] + m[1]) > c[2]) {

            __$("main-content-area").scrollTop -= 60;

        }

    }

    resize();

}

function loadControlKeys(fields, fieldtype, pos) {

    if (fieldtype != null) {

        switch (fieldtype.toLowerCase()) {
            case "age":
                __$("toolsCell1").innerHTML = "";

                addAge(__$("toolsCell2"), fields[pos], (!isNaN((new Date(__$("textFor" + fields[pos].id).value.trim())).getDay()) ? __$("textFor" + fields[pos].id).value.trim() : undefined), "Specify Actual Date of Birth", "Age");

                break;
            case "select":

                var opts = fields[pos].options;

                var options = {};

                var selected = {};

                __$("textFor" + fields[pos].id).value = "";

                var optionType = (fields[pos].type.toLowerCase() == "select-multiple" ? "multiple" : "single");

                for (var i = 0; i < opts.length; i++) {

                    if (opts[i].innerHTML.trim().length) {

                        options[opts[i].value] = opts[i].innerHTML;

                        if (opts[i].selected) {

                            selected[opts[i].value] = true;

                            __$("textFor" + fields[pos].id).value += opts[i].innerHTML + (optionType == "multiple" ? ";" : "");

                        }

                    }

                }

                __$("toolsCell2").innerHTML = "";

                __$("toolsCell1").innerHTML = "";

                __$("toolsCell1").style.verticalAlign = "top";

                // addCombo(parent, options, optionType, target1, target2, collapseOnClick, id, action, selected)
                var combo = addCombo(__$("toolsCell1"), options, optionType, __$("textFor" + fields[pos].id), fields[pos], false, (fields[pos].getAttribute("onchange") != null ? fields[pos].getAttribute("onchange") : undefined), undefined, selected);

                combo.style.fontSize = textSize;

                combo.style.textAlign = "left";

                break;
            case "barcode":
                __$("toolsCell2").innerHTML = "";

                __$("toolsCell1").innerHTML = "";

                break;
            case "date":
                __$("toolsCell2").innerHTML = "";

                __$("toolsCell1").innerHTML = "";

                var ctrl = addDate(__$("toolsCell2"), fields[pos], __$("textFor" + fields[pos].id).value);

                ctrl.style.margin = "auto";

                break;
            case "number":
                __$("toolsCell1").innerHTML = "";

                showFixedKeyboard(__$("textFor" + fields[pos].id), __$("toolsCell2"), {"/": true, ":": true, "abc": true, ".": true}, true)

                break;
            case "decimal":
                __$("toolsCell1").innerHTML = "";

                showFixedKeyboard(__$("textFor" + fields[pos].id), __$("toolsCell2"), {"/": true, ":": true, "abc": true}, true)

                break;
            default:
                var lower = (fields[pos].getAttribute("textCase") != null ? (fields[pos].getAttribute("textCase").trim().toLowerCase() == "lower" ? true : false) : false )

                __$("toolsCell1").innerHTML = "";

                showFixedKeyboard(__$("textFor" + fields[pos].id), __$("toolsCell2"), {"/": true, ":": true}, false, lower)

                break;
        }

    } else {

        if (fields[pos].tagName.toLowerCase() == "select") {

            var opts = fields[pos].options;

            var options = {};

            var selected = {};

            __$("textFor" + fields[pos].id).value = "";

            var optionType = (fields[pos].type.toLowerCase() == "select-multiple" ? "multiple" : "single");

            for (var i = 0; i < opts.length; i++) {

                if (opts[i].innerHTML.trim().length) {

                    options[opts[i].value] = opts[i].innerHTML;

                    if (opts[i].selected) {

                        selected[opts[i].value] = true;

                        __$("textFor" + fields[pos].id).value += opts[i].innerHTML + (optionType == "multiple" ? ";" : "");

                    }

                }

            }

            __$("toolsCell2").innerHTML = "&nbsp";

            __$("toolsCell1").innerHTML = "&nbsp";

            __$("toolsCell1").style.verticalAlign = "top";


            var combo = addCombo(__$("toolsCell1"), options, optionType, __$("textFor" + fields[pos].id), fields[pos], false, undefined, (fields[pos].getAttribute("onchange") != null ? fields[pos].getAttribute("onchange") : undefined), selected);

            combo.style.fontSize = textSize;

            combo.style.textAlign = "left";

        } else {
            var lower = (fields[pos].getAttribute("textCase") != null ? (fields[pos].getAttribute("textCase").trim().toLowerCase() == "lower" ? true : false) : false )

            showFixedKeyboard(__$("textFor" + fields[pos].id), __$("toolsCell2"), {"/": true, ":": true}, false, lower)

        }

    }
}

function gotoQuestion(pos, section) {

    pos = parseInt(pos);

    section = parseInt(section);

    var fields = navigablefieldsets[section];

    if (fields[pos]){
        if (fields[pos].getAttribute("tt_onUnload") != null) {

            eval(fields[pos].getAttribute("tt_onUnload"));

        }
    }

    incomplete = false;

    if (section < fieldsets.length && pos < fields.length - 1) {

        pos++;

        [pos, section] = getValidNextValue(pos, section);

        if (__$("textFor" + navigablefieldsets[section][pos].id) &&
            __$("textFor" + navigablefieldsets[section][pos].id).getAttribute("disabled") == null &&
            navigablefieldsets[section][pos].getAttribute("condition") == null) {

            __$("textFor" + navigablefieldsets[section][pos].id).focus();

        } else {

            if (navigablefieldsets[section][pos].getAttribute("condition") != null) {

                checkConditions();

            }

            navigateTo(pos, section);

        }

    } else if ((section < fieldsets.length - 1 && pos == fields.length - 1) || (section == fieldsets.length - 1 && pos < fields.length - 1)) {

        checkValidity();

        if (!incomplete) {

            section++;

            loadPage(section);

        }

    } else {

        checkValidity();

        if (incomplete)
            return;

        if (Object.keys(summaryHash).length > 0) {

            submitAfterSummary();

        } else {

            document.forms[0].submit();

        }
    }

    var fieldtype = (fields[pos] != undefined ? fields[pos].getAttribute("fieldtype") : null);

}

function getValidNextValue(pos, section) {

    var new_pos, new_section;

    var fields = navigablefieldsets[section];

    for (var i = parseInt(pos); i < fields.length; i++) {

        if (fields[i].getAttribute("condition") != null) {

            if (eval(fields[i].getAttribute("condition"))) {

                new_pos = i;

                new_section = section;

                break;

            }

        } else {

            new_pos = i;

            new_section = section;

            break;

        }

    }

    if (new_pos == undefined && new_section == undefined) {

        new_pos = 0;

        new_section = section + 1;

        loadLabels(new_section);

        return [pos, section];

    }

    return [new_pos, new_section];

}

function getValidPreviousValue(pos, section) {

    var new_pos, new_section;

    var fields = navigablefieldsets[section];

    for (var i = parseInt(pos); i >= 0; i--) {

        if (fields[i].getAttribute("condition") != null) {

            if (eval(fields[i].getAttribute("condition"))) {

                new_pos = i;

                new_section = section;

                break;

            }

        } else {

            new_pos = i;

            new_section = section;

            break;

        }

    }

    if (new_pos == undefined && new_section == undefined) {

        new_pos = 0;

        new_section = getValidPreviousSection(section);       // (section > 0 ? section - 1 : 0);

        loadLabels(new_section);

        return [pos, section];

    }

    return [new_pos, new_section];

}

function getValidPreviousSection(section) {

    section = parseInt(section);

    if (fieldsets[section].getAttribute("condition") != null) {

        if (eval(fieldsets[section].getAttribute("condition"))) {

            return section;

        } else {

            if (section > 0) {

                section -= 1;

                return getValidPreviousSection(section);

            } else {

                return section;

            }

        }
    } else {

        return section;

    }
}

function checkChanges(id) {

    clearTimeout(tracker);

    if (__$(id) && __$("textFor" + id)) {

        if (__$(id).tagName.toLowerCase() == "select" && __$(id).type == "select-multiple") {

            var values = __$("textFor" + id).value.trim().split(";");

            var selected = {};

            for (var i = 0; i < values.length; i++) {

                selected[values[i].trim()] = true;

            }

            var opts = __$(id).options;

            for (var i = 0; i < opts.length; i++) {

                if (opts[i].innerHTML.trim() == selected[opts[i].innerHTML.trim()]) {

                    opts[i].selected = true;

                } else {

                    opts[i].selected = false;

                }

            }

        } else {

            __$(id).value = __$("textFor" + id).value;

        }

    }

    if (__$(id)) {

        setTimeout("checkChanges('" + id + "')", 1000);

    }

}

var changedTracker = "";
var localCheck = false;

function checkValidity() {

    //showSpinner();

    // clearTimeout(validityTmr);

    var fields = navigablefieldsets[currentPage];		// fieldsets[currentPage].elements;

    incomplete = false;

    for (var i = 0; i < fields.length; i++) {

        if (fields[i].getAttribute("condition") != null) {

            if (!eval(fields[i].getAttribute("condition"))) {

                if (__$("textFor" + fields[i].id)) {

                    __$("textFor" + fields[i].id).value = "";

                    fields[i].id.value = "";

                    __$("textFor" + fields[i].id).setAttribute("disabled", true);

                } else if (fields[i].type == "radio") {

                    fields[i].checked = false;

                    if (__$("btn" + fields[i].id)) {

                        __$("btn" + fields[i].id).setAttribute("disabled", true);

                        __$("btn" + fields[i].id).className = "button gray";

                    }

                }

                if (__$("cell" + i + ".0")) {

                    __$("cell" + i + ".0").style.opacity = "0.4";

                }

                fields[i].setAttribute("disabled", true);

            } else {

                if (__$("textFor" + fields[i].id)) {

                    __$("textFor" + fields[i].id).removeAttribute("disabled");

                } else if (fields[i].type == "radio") {

                    if (__$("btn" + fields[i].id) && __$("btn" + fields[i].id).getAttribute("disabled")) {

                        __$("btn" + fields[i].id).removeAttribute("disabled");

                        __$("btn" + fields[i].id).className = "button blue";

                    }

                }

                if (__$("cell" + i + ".0")) {

                    __$("cell" + i + ".0").style.opacity = "1";

                }

                fields[i].removeAttribute("disabled");

            }

        }

        if (fields[i].type == "radio") {

            var radios = document.getElementsByName(fields[i].name);

            var checked = false;

            var disabled = false;

            for (var j = 0; j < radios.length; j++) {

                if (radios[j].getAttribute("disabled") != null) {

                    disabled = true;

                    break;

                }

                if (radios[j].checked) {

                    checked = true;

                    break;

                }

            }

            if (__$("cell" + i + ".3") && !disabled) {
                if (!checked) {

                    __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                    incomplete = true;

                } else {

                    __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

                }
            } else if (__$("cell" + i + ".3")) {

                __$("cell" + i + ".3").innerHTML = "";

            }

            // i = i + radios.length - 1;

        } else {


            if (fields[i].getAttribute("uniq_check") != null) {

                if (changedTracker != __$("textFor" + fields[i].id).value.trim()) {
                    checkUniqueness(fields[i].getAttribute("uniq_check") + __$("textFor" + fields[i].id).value.trim(), __$("textFor" + fields[i].id), __$("cell" + i + ".3"));
                } else if (__$("textFor" + fields[i].id).value.trim().length == 0) {
                    __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                    incomplete = true;

                } else {
                    incomplete = localCheck;
                }

                changedTracker = __$("textFor" + fields[i].id).value.trim();

            } else if (fields[i].getAttribute("optional") == null) {
                if (fields[i].getAttribute("disabled") == null && __$("textFor" + fields[i].id)) {
                    if (fields[i].getAttribute("regex") != null) {

                        if (__$("textFor" + fields[i].id).value.trim().match(fields[i].getAttribute("regex")) == null) {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            incomplete = true;

                        } else {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

                        }

                    } else {
                        if (__$("textFor" + fields[i].id).value.trim().length == 0) {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            incomplete = true;

                        } else if (fields[i].getAttribute("fieldtype") != null && fields[i].getAttribute("fieldtype").toLowerCase() == "number" && __$("textFor" + fields[i].id).value.trim().match(/^\d+$/) == null) {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            incomplete = true;

                        } else if (fields[i].getAttribute("fieldtype") != null && (fields[i].getAttribute("fieldtype").toLowerCase() == "date" || fields[i].getAttribute("fieldtype").toLowerCase() == "age")) {

                            if (__$("textFor" + fields[i].id).value.trim().match(/^(\d|\d{2}|\?)\/([A-Za-z]{3}|\?)\/(\d{4}|\?)$/) == null) {
                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                                incomplete = true;

                            } else {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />"

                            }

                            if (fields[i].getAttribute("absolute_max") != null && fields[i].getAttribute("absolute_min") != null) {

                                var current_set_date = new Date(__$("textFor" + fields[i].id).value.trim());
                                var absolute_max_date = new Date(fields[i].getAttribute("absolute_max").toLowerCase());
                                var absolute_mini_date = new Date(fields[i].getAttribute("absolute_min").toLowerCase());
                                if (current_set_date > absolute_max_date || current_set_date < absolute_mini_date) {

                                    __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                                    incomplete = true;

                                } else {

                                    __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

                                }

                            }


                        } else {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

                        }
                    }

                } else if (__$("cell" + i + ".3")) {

                    __$("cell" + i + ".3").innerHTML = "";

                }


            } else {

                if (fields[i].getAttribute("disabled") == null && __$("textFor" + fields[i].id)) {
                    if (fields[i].getAttribute("regex") != null) {

                        if (__$("textFor" + fields[i].id).value.trim().length > 0) {
                            if (__$("textFor" + fields[i].id).value.trim().match(fields[i].getAttribute("regex")) == null) {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                                incomplete = true;

                            } else {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />"

                            }
                        } else {

                            __$("cell" + i + ".3").innerHTML = "&nbsp;";

                        }

                    } else {
                        if (__$("textFor" + fields[i].id).value.trim().length == 0) {

                            __$("cell" + i + ".3").innerHTML = "&nbsp;";

                        }
                    }
                } else if (__$("cell" + i + ".3")) {

                    __$("cell" + i + ".3").innerHTML = "";

                }

            }

        }

    }

    // validityTmr = setTimeout("checkValidity()", 1000);

   // hideSpinner();

}

function checkUniqueness(path, control, target) {

    value = control.value;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var results = xmlhttp.responseText;

            if (results == 'N/A' || results.trim().length == 0) {
                incomplete = true;

                localCheck = true;

                if (control.value.trim().length > 0) {
                    target.innerHTML = "<img src='" + imgUnTick + "' height=60 />";
                } else {
                    if (control.getAttribute("optional") != null) {
                        target.innerHTML = "<img src='" + imgTick + "' height=60 />";
                    }
                }
            } else {

                localCheck = false;

                if (control.value.trim().length > 0) {
                    target.innerHTML = "<img src='" + imgTick + "' height=60 />";
                }
            }
        }
    }
    xmlhttp.open("GET", path, true);
    xmlhttp.send();

}

function showShield(action, clickCloses) {

    if (clickCloses == undefined) {

        clickCloses = true;

    }

    if (__$("shield")) {

        if (__$("popup")) {

            document.body.removeChild(__$("popup"));

        }

        if (__$("popupkeyboard")) {

            if (action != undefined) {

                eval(action);

            }

            document.body.removeChild(__$('popupkeyboard'));

        }

        document.body.removeChild(__$("shield"));

    } else {

        var shield = document.createElement("div");
        shield.style.position = "absolute";
        shield.style.backgroundColor = "rgba(0,0,0,0.5)";
        shield.style.top = "0px";
        shield.style.left = "0px";
        shield.style.width = "100%";
        shield.style.height = "100%";
        shield.id = "shield";

        if (action != undefined) {

            shield.setAttribute("action", action);

        }

        if (clickCloses) {

            shield.onmousedown = function () {

                if (this.getAttribute("action") != null) {
                    showShield(this.getAttribute("action"));
                } else {
                    showShield();
                }

            }

        }

        document.body.appendChild(shield);

    }

}

function loadAjax(id, target1, target2, url, search) {

    var textfile;
    if (window.XMLHttpRequest) {
        textfile = new XMLHttpRequest();
    }

    trackingString = search.trim();

    textfile.onreadystatechange = function () {
        if (textfile.readyState == 4 && textfile.status == 200) {
            var content = textfile.responseText;

            var results = content.split("\n");

            var options = {};

            for (var i = 0; i < results.length; i++) {

                if (results[i].toLowerCase().match(/*"^" + */ search.toLowerCase())) {

                    options[results[i]] = results[i];

                }

            }

            if (id.trim().toLowerCase() != validationControl.id.trim().toLowerCase()) {

                return;

            }

            if (__$("toolsCell1")) {

                __$("toolsCell1").innerHTML = "";

                addCombo(__$("toolsCell1"), options, "single", target1, target2, true, id, "clearLookup('" + id + "')");

            } else {

                addList(__$(id), options, "single", target1, target2, "clearLookup('" + id + "')", (__$("main-content-area").offsetHeight - 50) + "px", __$(id).offsetWidth + "px");

            }

        }
    }
    textfile.open("GET", url + (url.trim().match(/\?.+/) ? "&search" + search : "?search=" + search), true);
    textfile.send();

}

function clearLookup(id) {

    if (__$(id)) {

        __$(id).removeAttribute("lookup");

    }

}

function checkLookup(id) {

    if (__$("textFor" + id) && __$(id) && __$(id).getAttribute("ajaxURL") != null) {

        if (__$(id).getAttribute("ajaxURL") != null) {

            loadAjax("textFor" + id, __$("textFor" + id), __$(id), __$(id).getAttribute("ajaxURL"), __$("textFor" + id).value.trim());

        } else if (__$(id).getAttribute("ajaxUrl") != null) {

            loadAjax("textFor" + id, __$("textFor" + id), __$(id), __$(id).getAttribute("ajaxUrl"), __$("textFor" + id).value.trim());

        } else if (__$(id).getAttribute("ajaxurl") != null) {

            loadAjax("textFor" + id, __$("textFor" + id), __$(id), __$(id).getAttribute("ajaxurl"), __$("textFor" + id).value.trim());

        }
    }

}

function clearUl(id) {

    if (__$(id)) {
        var kids = __$(id).children;

        for (var i = 0; i < kids.length; i++) {

            kids[i].style.backgroundColor = (kids[i].getAttribute("tag") == "odd" ? "#eee" : "");

        }
    }

}

function checkScrolls() {
    if (__$("display")) {

        __$("display").onscroll = function () {

            if (__$("popupkeyboard")) {

                document.body.removeChild(__$('popupkeyboard'));

            }
        }

    }
}

var spinner;

function showSpinner() {

    if (!document.getElementById('spin')) {
        var div = document.createElement("div");
        div.id = "spin";
        div.style.position = "absolute";
        div.style.top = ((window.innerHeight / 2) - 80) + "px";
        div.style.left = ((window.innerWidth / 2)) + "px";

        document.body.appendChild(div);
        var opts = {
            lines: 15, // The number of lines to draw
            length: 15, // The length of each line
            width: 8, // The line thickness
            radius: 20, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#000', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 25, // Top position relative to parent in px
            left: 25 // Left position relative to parent in px
        };
    }

    var target = document.getElementById('spin');
    spinner = new Spinner(opts).spin(target);

    showShield();

}

function hideSpinner() {

    spinner.stop();

    if (__$("shield")) {

        document.body.removeChild(__$("shield"));

    }

}

var validatingAlready = false;

function clickCanGo() {

    if (validatingAlready) {

        // return;

    }

    if (validationControl != null) {

        var i = validationControl.getAttribute("pos");

        var parent = null;

        if (validationControl.getAttribute("target") != null) {

            parent = __$(validationControl.getAttribute("target"));

        }

        if (parent == null) {

            return true;

        }

        if (parent.getAttribute("optional") == null) {

            if (__$("textFor" + parent.id)) {

                if (__$("textFor" + parent.id).value.trim().length == 0) {

                    showMsg(I18n.t("messages.empty_field"));

                    if (__$("cell" + i + ".3")) {

                        if (parent.getAttribute("optional") == null) {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                        } else {

                            __$("cell" + i + ".3").innerHTML = "";

                        }

                    }

                    return false;

                }

            }

        }

        if (parent.getAttribute("optional") == null || (parent.getAttribute("optional") != null && validationControl.value.trim().length > 0)) {

            if (parent.getAttribute("absolute_max") != null) {
                if (parent.getAttribute("fieldtype") == "date" || parent.getAttribute("fieldtype") == "age") {
                    if (validationControl) {

                        var date = new Date(validationControl.value.trim());
                        var absolute_date = new Date(parent.getAttribute("absolute_max"));

                        if (date > absolute_date) {

                            showMsg(I18n.t("messages.date_invalid"));

                            if (__$("cell" + i + ".3")) {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            }

                            return false;

                        }

                    }

                } else {

                    if (validationControl) {

                        if (eval(validationControl.value.trim()) > eval(parent.getAttribute("absolute_max"))) {

                            showMsg("The value you have entered is greater than the expected value.\nPlease enter a valid value.");

                            if (__$("cell" + i + ".3")) {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            }

                            return false;

                        }

                    }

                }

            }

            if (parent.getAttribute("max") != null) {

                if (parent.getAttribute("fieldtype") == "date" || parent.getAttribute("fieldtype") == "age") {

                    if (validationControl) {

                        var date = new Date(validationControl.value.trim());
                        var max_date = new Date(parent.getAttribute("max"));

                        if (date > max_date) {

                            var msg = "The date you have entered is greater than the maximum required date.\nShould we keep the same value?";

                            var action = 'var i = ' + i + '; var id = "' + parent.id + '"; __$(id).setAttribute("max", "' +
                                validationControl.value.trim() + '"); __$("textFor" + id).setAttribute("max", "' +
                                validationControl.value.trim() + '"); ' + '__$("cell" + i + ".3").innerHTML = "<img src=\'' +
                                imgTick + '\' height=60 />"; gotoNext();';

                            showMsgForAction(msg, action, undefined, undefined, "dontGo()");

                            return false;

                        }

                    }

                } else {

                    if (validationControl) {

                        if (eval(validationControl.value.trim()) > eval(parent.getAttribute("max"))) {

                            var msg = "The value you entered is greater than expected.\nShould we keep the same value?";

                            var action = 'var i = ' + i + '; var id = "' + parent.id + '"; __$(id).setAttribute("max", "' +
                                validationControl.value.trim() + '"); __$("textFor" + id).setAttribute("max", "' +
                                validationControl.value.trim() + '"); ' + '__$("cell" + i + ".3").innerHTML = "<img src=\'' +
                                imgTick + '\' height=60 />"; gotoNext();';

                            showMsgForAction(msg, action);

                            return false;

                        }

                    }

                }

            }

            if (parent.getAttribute("absolute_min") != null) {

                if (parent.getAttribute("fieldtype") == "date" || parent.getAttribute("fieldtype") == "age") {
                    if (validationControl) {
                        var date = new Date(validationControl.value.trim());
                        var absolute_date = new Date(parent.getAttribute("absolute_min"));
                        if (date < absolute_date) {

                            showMsg("The date you have entered is less than the minimum required date.\nPlease enter a valid date");

                            if (__$("cell" + i + ".3")) {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            }

                            return false;

                        }

                    }
                } else {

                    if (validationControl) {

                        if (eval(validationControl.value.trim()) < eval(parent.getAttribute("absolute_min"))) {


                            showMsg("The date you entered is less than minimum allowable. \nPlease enter a valid date");

                            if (__$("cell" + i + ".3")) {

                                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                            }

                            return false;

                        }


                    }

                }
            }

            if (parent.getAttribute("min") != null) {

                if (parent.getAttribute("fieldtype") == "date" || parent.getAttribute("fieldtype") == "age") {

                    if (validationControl) {

                        var date = new Date(validationControl.value.trim());
                        var min_date = new Date(parent.getAttribute("min"));

                        if (date < min_date) {

                            var msg = "The date you have entered is less than the minimum required date.\nShould we keep the same value?";

                            var action = 'var i = ' + i + '; var id = "' + parent.id + '"; __$(id).setAttribute("min", "' +
                                validationControl.value.trim() + '"); __$("textFor" + id).setAttribute("min", "' +
                                validationControl.value.trim() + '"); ' + '__$("cell" + i + ".3").innerHTML = "<img src=\'' +
                                imgTick + '\' height=60 />"; gotoNext();';

                            showMsgForAction(msg, action, undefined, undefined, "dontGo()");

                            return false;

                        }

                    }

                } else {

                    if (validationControl) {

                        if (eval(validationControl.value.trim()) < eval(parent.getAttribute("min"))) {

                            var msg = "The value you entered is less than expected.\nShould we keep the same value?";

                            var action = 'var i = ' + i + '; var id = "' + parent.id + '"; __$(id).setAttribute("min", "' +
                                validationControl.value.trim() + '"); __$("textFor" + id).setAttribute("min", "' +
                                validationControl.value.trim() + '"); ' + '__$("cell" + i + ".3").innerHTML = "<img src=\'' +
                                imgTick + '\' height=60 />"; gotoNext();';

                            showMsgForAction(msg, action);

                            return false;
                        }

                    }

                }

            }

            if (parent.getAttribute("regex") != null) {

                if (validationControl) {

                    var re = RegExp(parent.getAttribute("regex"));
                    
                    if (validationControl.value.trim().match(re) == null) {

                        if (parent.getAttribute("regex_message") != null) {
                            showMsg(parent.getAttribute("regex_message"));
                        }else{
                            showMsg("Please enter a value in the empty field.");
                        }

                        if (__$("cell" + i + ".3")) {

                            __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

                        }

                        return false;

                    }

                }

            }

            if (__$("cell" + i + ".3")) {

                if (parent.getAttribute("optional") == null) {

                    __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

                } else {

                    if (validationControl.value.trim().length > 0) {

                        __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

                    } else {

                        __$("cell" + i + ".3").innerHTML = "";

                    }

                }

            }

        }

    }

    validatingAlready = false;

    // checkConditions();

    return true;

}

function showMsg(msg) {

    showShield(undefined, true);

    if (!__$("shield")) {

        showShield(undefined, true);

    }

    var popup = document.createElement("div");
    popup.id = "popup";
    popup.style.position = "absolute";
    popup.style.minHeight = "200px";
    popup.style.top = "20%";
    popup.style.width = "330px";
    popup.style.left = ((window.innerWidth - 330) / 2) + "px";
    popup.style.backgroundColor = "#eee";
    popup.style.zIndex = 120;
    popup.style.border = "2px outset #eee";
    popup.style.borderRadius = "8px";

    document.body.appendChild(popup);

    var table = document.createElement("table");
    table.width = "100%";
    table.style.fontSize = "24px";

    popup.appendChild(table);

    var tbody = document.createElement("tbody");

    table.appendChild(tbody);

    var tr1 = document.createElement("tr");

    tbody.appendChild(tr1);

    var th = document.createElement("th");
    th.innerHTML = "Info";
    th.style.backgroundColor = "#345d8c";
    th.style.color = "#fff";
    th.style.borderTopLeftRadius = "8px";
    th.style.borderTopRightRadius = "8px";
    th.style.border = "2px outset #23538a";
    th.colSpan = "2";
    th.style.padding = "5px";

    tr1.appendChild(th);

    var tr2 = document.createElement("tr");

    tbody.appendChild(tr2);

    var td1_1 = document.createElement("td");
    td1_1.colSpan = "2";
    td1_1.style.padding = "5px";
    td1_1.style.paddingTop = "15px";
    td1_1.style.paddingBottom = "15px";
    td1_1.align = "center";
    td1_1.innerHTML = msg;
    td1_1.style.lineHeight = "120%";
    td1_1.style.fontSize = "20px";

    tr2.appendChild(td1_1);

    var tr3 = document.createElement("tr");

    tbody.appendChild(tr3);

    var td2_2 = document.createElement("td");
    td2_2.align = "center";
    td2_2.style.padding = "10px";
    td2_2.colSpan = "2";

    tr3.appendChild(td2_2);

    var btnYes = document.createElement("button");
    btnYes.className = "blue";
    btnYes.innerHTML = "OK";
    btnYes.style.width = "120px";
    btnYes.style.cursor = "pointer";
    btnYes.style.fontSize = "24px";
    btnYes.style.minHeight = "60px";

    td2_2.appendChild(btnYes);

    btnYes.onmousedown = function () {

        if (__$("popup")) {

            document.body.removeChild(__$("popup"));

        }

        if (__$("shield")) {

            document.body.removeChild(__$("shield"));

        }

    }

}

function showMsgForAction(msg, action, width, title, noAction) {

    showShield(undefined, true);

    if (!__$("shield")) {

        showShield(undefined, true);

    }

    var popup = document.createElement("div");
    popup.id = "popup";
    popup.style.position = "absolute";
    popup.style.minHeight = "200px";
    popup.style.top = "20%";
    // popup.style.width = (width == undefined ? "330px" : width);
    popup.style.left = ((window.innerWidth - 330) / 2) + "px";
    popup.style.backgroundColor = "#eee";
    popup.style.zIndex = 120;
    popup.style.border = "2px outset #eee";
    popup.style.borderRadius = "8px";

    document.body.appendChild(popup);

    var table = document.createElement("table");
    table.width = "100%";
    table.style.fontSize = "24px";

    popup.appendChild(table);

    var tbody = document.createElement("tbody");

    table.appendChild(tbody);

    var tr1 = document.createElement("tr");

    tbody.appendChild(tr1);

    var th = document.createElement("th");
    th.innerHTML = (title == undefined ? "Info" : title);
    th.style.backgroundColor = "#345d8c";
    th.style.color = "#fff";
    th.style.borderTopLeftRadius = "8px";
    th.style.borderTopRightRadius = "8px";
    th.style.border = "2px outset #23538a";
    th.colSpan = "2";
    th.style.padding = "5px";

    tr1.appendChild(th);

    var tr2 = document.createElement("tr");

    tbody.appendChild(tr2);

    var td1_1 = document.createElement("td");
    td1_1.colSpan = "2";
    td1_1.style.padding = "5px";
    td1_1.style.paddingTop = "15px";
    td1_1.style.paddingBottom = "15px";
    td1_1.align = "center";
    td1_1.innerHTML = msg;
    td1_1.style.lineHeight = "120%";
    td1_1.style.fontSize = "20px";

    tr2.appendChild(td1_1);

    var tr3 = document.createElement("tr");

    tbody.appendChild(tr3);

    var td2_1 = document.createElement("td");
    td2_1.align = "center";
    td2_1.style.padding = "10px";

    tr3.appendChild(td2_1);

    var td2_2 = document.createElement("td");
    td2_2.align = "center";
    td2_2.style.padding = "10px";

    tr3.appendChild(td2_2);

    var btnNo = document.createElement("button");
    btnNo.className = "blue";
    btnNo.innerHTML = I18n.t("forms.buttons.no_button");
    btnNo.style.width = "120px";
    btnNo.style.cursor = "pointer";
    btnNo.style.fontSize = "24px";
    btnNo.style.minHeight = "60px";

    td2_2.appendChild(btnNo);

    var btnYes = document.createElement("button");
    btnYes.className = "blue";
    btnYes.innerHTML = I18n.t("forms.buttons.yes_button");
    btnYes.style.width = "120px";
    btnYes.style.cursor = "pointer";
    btnYes.style.fontSize = "24px";
    btnYes.style.minHeight = "60px";

    td2_2.appendChild(btnYes);

    btnYes.onmousedown = function () {

        if (__$("popup")) {

            document.body.removeChild(__$("popup"));

        }

        if (__$("shield")) {

            document.body.removeChild(__$("shield"));

        }

        eval(action);

    }

    btnNo.onmousedown = function () {

        if (__$("popup")) {

            document.body.removeChild(__$("popup"));

        }

        if (__$("shield")) {

            document.body.removeChild(__$("shield"));

        }

        if (noAction != undefined) {

            eval(noAction);

        }

    }

    if (__$("popup")) {

        var c = checkCtrl(__$("popup"));

        // [w, h, t, l]

        if (c[1] > 240) {

            __$("popup").style.top = ((window.innerHeight / 2) - (c[1] / 2)) + "px";

        }

        if (c[0] > 330) {

            __$("popup").style.left = ((window.innerWidth / 2) - (c[0] / 2)) + "px";

        }

    }

}

function checkConditions() {

    //showSpinner();

    // clearTimeout(validityTmr);

    var fields = navigablefieldsets[currentPage];		// fieldsets[currentPage].elements;

    incomplete = false;

    for (var i = 0; i < fields.length; i++) {

        if (fields[i].getAttribute("condition") != null) {

            if (!eval(fields[i].getAttribute("condition"))) {

                if (__$("textFor" + fields[i].id)) {

                    __$("textFor" + fields[i].id).value = "";

                    fields[i].id.value = "";

                    __$("textFor" + fields[i].id).setAttribute("disabled", true);

                    if (__$("cell" + i + ".3")) {

                        __$("cell" + i + ".3").innerHTML = "";

                    }

                } else if (fields[i].type == "radio") {

                    fields[i].checked = false;

                    if (__$("btn" + fields[i].id)) {

                        __$("btn" + fields[i].id).setAttribute("disabled", true);

                        __$("btn" + fields[i].id).className = "button gray";

                    }

                }

                if (__$("cell" + i + ".0")) {

                    __$("cell" + i + ".0").style.opacity = "0.4";

                }

                fields[i].setAttribute("disabled", true);

            } else {

                if (__$("textFor" + fields[i].id)) {

                    __$("textFor" + fields[i].id).removeAttribute("disabled");

                } else if (fields[i].type == "radio") {

                    if (__$("btn" + fields[i].id) && __$("btn" + fields[i].id).getAttribute("disabled")) {

                        __$("btn" + fields[i].id).removeAttribute("disabled");

                        __$("btn" + fields[i].id).className = "button blue";

                    }

                }

                if (__$("cell" + i + ".0")) {

                    __$("cell" + i + ".0").style.opacity = "1";

                }

                fields[i].removeAttribute("disabled");

            }

        }
    }

   // hideSpinner();

}

function clearMarks(section) {

    var fields = navigablefieldsets[section];

    for (var i = 0; i < fields.length; i++) {

        if (__$("cell" + i + ".3")) {

            __$("cell" + i + ".3").innerHTML = "";

        }

    }

}


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function submitAfterSummary() {

    /*summaryHash = {
     "Child's Name" : ["child_first_name", "child_middle_name", "child_last_name"],
     "Mother's Name" : ["child_mother_first_name", "child_mother_middle_name", "child_mother_last_name"],
     "Father's Name" : ["child_father_first_name", "child_father_middle_name", "child_father_last_name"]
     }*/

   // showSpinner();

    var msg = "";

    var parent = document.createElement("div");

    var div = document.createElement("div");
    div.style.height = "200px";
    div.style.overflow = "auto";

    parent.appendChild(div);

    var table = document.createElement("table");
    table.style.width = "100%";

    div.appendChild(table);

    var tbody = document.createElement("tbody");

    table.appendChild(tbody);

    var keys = Object.keys(summaryHash);

    for (var i = 0; i < keys.length; i++) {

        var tr = document.createElement("tr");

        tbody.appendChild(tr);

        var td1 = document.createElement("th");
        td1.align = "right";
        td1.innerHTML = keys[i];

        tr.appendChild(td1);

        var td2 = document.createElement("td");
        td2.innerHTML = ":";

        tr.appendChild(td2);

        var td3 = document.createElement("td");

        var label = "";

        for (var j = 0; j < summaryHash[keys[i]].length; j++) {

            if (__$(summaryHash[keys[i]][j])) {

                if (label.trim().length > 0) {

                    label = label.trim() + " " + toTitleCase(__$(summaryHash[keys[i]][j]).value);

                } else {

                    label = toTitleCase(__$(summaryHash[keys[i]][j]).value.trim());

                }

            }

        }

        label = (label.trim) ? label.trim() : label.replace(/^\s+/,'');

        if (label == '')
          label = "<span class='blank'>N/A</span>"

        if (keys[i].match(/weight/i))
          label = label + " Kg"

        td3.innerHTML = label;

        tr.appendChild(td3);

    }

    var pos = checkCtrl(parent);

    msg = parent.innerHTML;

    var action = "document.forms[0].submit();";

    //hideSpinner();

    showMsgForAction(msg, action, "600px", "Captured Data Summary");

}

function gotoNext() {

    if (__$("cell" + cursorPos + ".3")) {

        __$("cell" + cursorPos + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";

    }

    if (clickCanGo())
        gotoQuestion(cursorPos, currentPage);

}

function dontGo() {

    if (__$("cell" + cursorPos + ".3")) {

        __$("cell" + cursorPos + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";

    }

    navigateTo(cursorPos, currentPage);

}

function processLabelText(text){

    return I18n.t('forms.labels.' + text.toLowerCase().trim().split(' ').join('_'));

}
setTimeout("checkScrolls()", 500);

// init();
