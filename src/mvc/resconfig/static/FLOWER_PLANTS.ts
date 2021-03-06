export default class FLOWER_PLANTS {
  public static plants = [
    {
      'id': "hh01",//'花卉ID',
      'name': "红玫瑰",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "1",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "0",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "10",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "50",//'增加花田经验数',
      'exp2': "50",//'增加玩家经验数',
      'pic': "ui://base/pic_3_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_3_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "10000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_3_3",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "10000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_3_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "10000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_3_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_3_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_3_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
      'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:
    },
    {
      'id': "hh02",//'花卉ID',
      'name': "勿忘我",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "1",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "10",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "15",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_4_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_4_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "20000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_4_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "20000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_4_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "20000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_4_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_4_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_4_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh03",//'花卉ID',
      'name': "百合",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "3",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "20",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "20",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_2_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_2_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "24000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_2_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "24000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_2_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "24000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_2_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_2_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_2_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh04",//'花卉ID',
      'name': "紫罗兰",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "3",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "30",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "20",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_5_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_5_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "25000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_5_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "25000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_5_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "25000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_5_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_5_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_5_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
      'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static': 1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '4', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh05",//'花卉ID',
      'name': "红花",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_6_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_6_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_6_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_6_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_6_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_6_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_6_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh06",//'花卉ID',
      'name': "澳洲腊梅",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_10_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_6_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_6_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_6_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_6_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_10_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_10_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh07",//'花卉ID',
      'name': "粉玫瑰",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_6_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_6_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_6_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_6_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_6_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_8_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_8_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh08",//'花卉ID',
      'name': "向日葵",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_1_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_1_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_1_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_1_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_1_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_1_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_1_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh09",//'花卉ID',
      'name': "雏菊",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_9_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_6_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_6_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_6_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_6_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_9_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_9_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh10",//'花卉ID',
      'name': "白桔梗",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_11_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_6_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_6_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_6_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_6_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_11_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_11_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    },
    {
      'id': "hh11",//'花卉ID',
      'name': "香槟玫瑰",//'花卉名称',
      'grade': "1",//'花卉等级',
      'grade2': "4",//'要求用户最底等级',
      'grade3': "100",//'要求用户最高等级',
      'gold': "40",//'种子价格',
      'num': "1",//'花卉正常产量',
      'num2': "30",//'浇水减少生长时间',
      't': "20",//'花卉正常生长时长',
      'speed': "100",//'正常生长速度',
      'exp': "100",//'增加花田经验数',
      'exp2': "100",//'增加玩家经验数',
      'pic': "ui://base/pic_7_5",//'花卉种子图片',
      'ain': "",//'花卉种子动画',
      'time': "0",//'种子时长',
      'pic2': "ui://base/pic_6_1",//'花卉发芽期图片',
      'ain2': "",//'花卉发芽期动画',
      'time2': "30000",//'花卉发芽期时长',
      'pic3': "ui://base/pic_6_2",//'花卉生长期图片',
      'ain3': "",//'花卉生长期动画',
      'time3': "30000",//'花卉发芽期时长',
      'pic4': "ui://base/pic_6_3",//'花卉花苞期图片',
      'ain4': "",//'花卉花苞期动画',
      'time4': "30000",//'花卉发芽期时长',
      'pic5': "ui://base/pic_6_4",//'花卉成熟期图片',
      'ain5': "",//'花卉成熟期动画',
      'time5': "0",//'花卉成熟期时长',
      'pic6': "ui://base/pic_7_6",//'花卉收获时图片',
      'ain6': "",//'花卉收获时动画',
      'pic7': "ui://base/pic_7_6",//'花卉在仓库时图片',
      'ain7': "",//'花卉在仓库时动画',
      'next_mature_time':"20", //下一阶段成长时间
       'grow_time_tol':'60', //生长总时间
      'mature_time':'20', //当前成熟时间
      'grow_static':1,//当前生长状态 1发芽期、2生长期、3花苞期、4成熟期
      'water_time': '3', //可以浇水时间
      'is_water': '1', //是否可以浇水 1是2否:"10"
    }
  ]
  public static getPlants(id) {
    for (var i in this.plants) {
      if (this.plants[i].id == id) {
        return this.plants[i]
      }
    }
  }
}