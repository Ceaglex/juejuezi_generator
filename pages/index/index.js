// index.js
// 获取应用实例
var emoji = ['🖤', '🤎', '🙋‍♀️', '💙', '🌼', '🌸', '😊', '💦', '🎀', '💎', '👏', '💯', '🌸', '🖤🖤', '🖤🖤🖤', '🤎🤎', '🤎🤎🤎', '🙋‍♀️🙋‍♀️', '🙋‍♀️🙋‍♀️🙋‍♀️', '💙💙', '💙💙💙', '🌼🌼', '🌼🌼🌼', '🌸🌸', '🌸🌸🌸', '😊😊', '😊😊😊', '💦💦', '💦💦💦', '🎀🎀', '🎀🎀🎀', '💎💎', '💎💎💎', '👏👏', '👏👏👏', '💯💯', '💯💯💯', '🌸🌸', '🌸🌸🌸']
var first = ['分享開心', '忙里偷闲的生活碎片', 'name下班啦', '今日份name也营业啦']
var second = ['今天去verb&noce啦', '今天跟集美出去verb&noun啦', '今天又又又verb&noun鸭']
var third = ['这个noun也太🉑️了', '有被这个noun惊艳到']
var fourth = ['小狗勾暴风吸入👏']
var fifth = ['好verb到跺jiojio💎真的绝绝子💯💯', '这个noun也太牛了💯💯💯', 'noun yyds💯']
var sixth = ['今天和集美🌈又是name的一天🧚‍♀️🦄🥂💅💫💫🙊', '无语子，勇敢name，不怕困难！', '好想谈一场双向奔赴的恋爱哦', '今日份行程汇报结束 哈哈哈 散会', '好啦，星星月亮和我都要睡啦', '岁月漫长 那就一起拯救地球与乐趣吧', '不早啦，我是一面镜子 所以——晚安 我碎啦']
var verb_noun = ''
var verb = ''
var noun = ''

Page({
  data: {
    empty1: true,
    empty2: true,
    empty3: true,
    jjz: '示例：小仙女下班啦😊 今天又又又看电影鸭💙💙💙 这个电影也太🉑️了🌸🌸 小狗勾暴风吸入👏好看到跺jiojio💎真的绝绝子💯💯 不早啦，星星月亮和我都要睡啦💎'
  },
  // 随机数函数
  random(num) {
    var n = Math.ceil(Math.random() * (num + 1)); // 获取从1到num+1的随机整数 ，取0的概率极小。
    return n - 1
  },

  name: function (e) {
    self = this
    first[2] = e.detail.value + '下班啦'
    first[3] = '今日份' + e.detail.value + '也营业啦'
    sixth[0] = '今天和集美🌈又是' + e.detail.value + '的一天🧚‍♀️🦄🥂💅💫💫🙊'
    sixth[1] = '勇敢' + e.detail.value + ',不怕困难！'
    if (e.detail.value.length == 0) {
      self.setData({
        empty1: true
      })
    } else {
      self.setData({
        empty1: false
      })
    }
  },

  verb: function (e) {
    self = this
    verb = e.detail.value
    fifth[0] = '好' + e.detail.value + '到跺jiojio💎真的绝绝子💯💯'
    if (e.detail.value.length == 0) {
      self.setData({
        empty2: true
      })
    } else {
      self.setData({
        empty2: false
      })
    }
  },

  noun: function (e) {
    self = this
    noun = e.detail.value
    third[0] = '这个' + e.detail.value + '也太🉑️了'
    third[1] = '有被这个' + e.detail.value + '惊艳到'
    fifth[1] = '这个' + e.detail.value + '也太牛了💯💯💯'
    fifth[2] = e.detail.value + ' yyds💯'
    if (e.detail.value.length == 0) {
      self.setData({
        empty3: true
      })
    } else {
      self.setData({
        empty3: false
      })
    }
  },

  generate() {
    self = this
    verb_noun = verb + noun
    second[0] = '今天去' + verb_noun + '啦'
    second[1] = '今天跟集美去' + verb_noun + '啦'
    second[2] = '今天又又又' + verb_noun + '鸭'

    if (!self.data.empty1 && !self.data.empty2 && !self.data.empty3) {
      this.setData({
        jjz: first[self.random(3)] + emoji[self.random(38)] + ' \n ' +
          second[self.random(2)] + emoji[self.random(38)] + ' \n ' +
          third[self.random(1)] + emoji[self.random(38)] + ' \n ' +
          fourth[0] + fifth[self.random(2)] + ' \n ' +
          sixth[self.random(6)] + emoji[self.random(38)]
      })
      console.log(self.data.jjz)
    }
    else {
      this.setData({
        jjz: '请完成输入'
      })
    }
  },

  onLoad() { },
  // 用户点击右上角分享
  onShareAppMessage: function () { 
  },

  onShareTimeline: function () {

  }
})