/**
 * 阿嬤還記得｜田野資料採集與成果管理平台
 * 系統設定
 */
const CONFIG = Object.freeze({
  APP_NAME: '阿嬤還記得｜田野資料採集與成果管理平台',
  ROOT_FOLDER_ID: '19Mq_FqPnrUPvKXYwaq0wV_wnlJe2rfJ7',
  DATABASE_NAME: '阿嬤還記得_資料蒐集平台_主資料庫',
  TIMEZONE: 'Asia/Taipei',
  MAX_INLINE_UPLOAD_MB: 9,
  CASE_PREFIX: {
    banqiao: 'BQ',
    zhongliao: 'ZL'
  },
  CASE_STATUS: [
    '草稿', '填寫中', '待審查', '退回補件', '審查通過', '已鎖定'
  ],
  FOLDER_MAP: {
    permission: '01_同意授權',
    audio: '02_訪談音檔',
    transcript: '03_逐字稿與田野札記',
    portrait: '04_人物照片',
    food: '05_料理與食材照片',
    place: '06_地方照片',
    video: '07_影片素材',
    story: '08_故事與料理資料',
    translation: '09_AI與成果轉譯',
    other: '10_其他補充資料'
  },
  MODULES: [
    { key: 'case_index', name: '1.個案主索引', weight: 4, type: 'object', required: ['field','respondentDisplayName','interviewDate','collector','location'] },
    { key: 'respondent', name: '2.受訪者人物資料', weight: 7, type: 'object', required: ['birthDecade','currentLocation','residenceYears','occupation','familyRole','foodRole','publicBio'] },
    { key: 'interview', name: '3.訪談場次與原始證據', weight: 10, type: 'object', required: ['date','location','interviewer','recorder','durationMinutes','audioFileId','transcriptFileId','fieldNotes'] },
    { key: 'stories', name: '4.人物生命故事', weight: 12, type: 'array', minItems: 2, itemRequired: ['title','period','place','people','event','emotion','quote','timecode','summary'] },
    { key: 'dishes', name: '5.代表料理與飲食文化', weight: 12, type: 'array', minItems: 1, itemRequired: ['name','category','ingredients','source','season','steps','occasion','leftoverHandling','story'] },
    { key: 'food_path', name: '6.食物路徑', weight: 8, type: 'object', required: ['production','acquisition','transport','storage','cooking','sharing','leftovers','memory'] },
    { key: 'comparison', name: '7.城市—農村比較欄位', weight: 6, type: 'object', required: ['ingredientSource','foodDistance','cookingStyle','mealFrequency','mealMembers','leftoverMethod','festivalFood','transmission','memoryTaste','modernChange'] },
    { key: 'waste', name: '8.惜食與永續智慧', weight: 7, type: 'array', minItems: 1, itemRequired: ['methodName','material','steps','reason','knowledgeSource','urbanApplicability','sustainabilityMeaning'] },
    { key: 'map_nodes', name: '9.地方空間與地圖節點', weight: 7, type: 'array', minItems: 1, itemRequired: ['name','type','area','story','publicPrecision'] },
    { key: 'media', name: '10.媒體素材', weight: 10, type: 'media', requirements: { portrait: 2, food: 3, place: 2, audio: 1, videoVertical: 2, videoHorizontal: 1 } },
    { key: 'permissions', name: '11.授權與公開分級', weight: 7, type: 'object', required: ['textPermission','photoPermission','audioPermission','videoPermission','namePermission','aiPermission','locationPermission','derivativePermission'] },
    { key: 'translation', name: '12.成果轉譯資料', weight: 10, type: 'object', required: ['storyTitle','personBio','storySummary','cardCopy','exhibitCopy','quotes','topicTags','emotionTags','aiQa','imagePrompt','audioScript','videoScript','teachingQuestions'] }
  ]
});
