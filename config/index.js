export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx1249a3b96b71e747",

    // 公众号APP_SECRET
    APP_SECRET: "694629afcaa6de6e3dc267d2b1e549d3",

    // 模板消息id
    TEMPLATE_ID: "rLtfsRRkMg_xa-4nDXBsp7kBABKSxd1-DdyeJI2grX4",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "",


    /**
     * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
     * [
     *   {name: '老婆0', id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk"}, 
     *   {name: '老婆1', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     * ]
     */
    USERS: [
      {name: '小菜', id: "o1kw56_P-NKICcbaq-XFZEKw8TSM"}, 
      {name: '小洋', id: "o1kw561qKvRMMcQvE3lAGQVVihB8"}],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "o1kw561qKvRMMcQvE3lAGQVVihB8"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "福建",
    // 所在城市
    CITY: "漳州",

    /** 重要节日相关 */

    /**
     * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
     * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
     * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
     * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
     */
    FESTIVALS: [
      {"type": "生日", "name": "小菜", "year": "2002", "date": "02-04"},
      {"type": "生日", "name": "小洋", "year": "2002", "date": "05-26"},
      {"type": "节日", "name": "纪念日", "year": "2021", "date": "06-01"},
      {"type": "节日", "name": "纪念日", "year": "2021", "date": "06-01"}
    ],

    /**
     * 限制重要节日的展示条目, 需要填写数字; 
     * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
     * 如果为0, 则默认展示全部
     */
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
      * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
      * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
      * */
    CUSTOMIZED_DATE_LIST: [
      // 在一起的日子
      {"keyword": "love_day", date: "2021-06-01"},
      // 纪念日
      //{"keyword": "brithday", date: "2020-02-04"},
      // 退伍日, 不用可以删掉
      //{"keyword": "ex_day", date: "2022-08-31"},
      // 6级日
      {"keyword": "sixexam_day", date: "2022-12-10"},
      // ... 
    ],

    /** 插槽 */

    /** 你可以在这里写超多的你想显示的内容了！
      * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
      * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
      * */
    SLOT_LIST: [
      // 这样配置的话，就会每次发送这句话
      {"keyword": "encourage_oneself", contents: "希望今天又是快乐的一天！"},
      // 这样配置的话，就会每次随机选一句话发送
      {"keyword": "lover_prattle", contents: [
        "因为太喜欢你，所以看谁都像是情敌。",
        "申请成为你爱里的永久居民。",
        "你很傻，你很笨，可我还是很羡慕你，因为你有我",
        "遇见你，就好像捡到了100斤的运气",
      ]},
    ],

    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
