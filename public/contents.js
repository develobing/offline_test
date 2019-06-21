// 프리로딩할 컨텐츠를 추가하는 파일
let IMAGES = [
  "https://www.canon.co.nz/-/media/new-zealand/stories/rach-stewart/rach-stewart-6-flowers-ocean.ashx",
  "https://www.heritagecouncil.ie/content/projects/_project/landscapes.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMofDhzl8qzk5jiEg9vsT8K4XpSDl4SNxXK2TV0YVYgVuBm6L",
  "https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
  "https://www.invisibleinkradio.com/wp-content/uploads/2017/07/Famous-Landscape-Artists.jpg",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
  "http://markinternational.info/data/out/129/219731953-natural-landscape-wallpapers-hd.jpg",
  "https://stmed.net/sites/default/files/landscape-wallpapers-27931-2257698.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx4K3zqFqhGXk8biCqFx6WfmMjm9GSRziAiONbYw2btfIoghbBQ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s5EZTCKYRsV9Yu_LgzR4YQKUfB8_dAvbJiUGY1R3tGkTgGx2Yg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMXw6e6-D2huNh_ywzmSwb_-fW19G1Sh4Wbmv_8k0gsr7Ajlv",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
]

let AUDIOS = [
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-01.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-02.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-03.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-04.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-05.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-06.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-07.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-08.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-09.mp3",
  "https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-10.mp3"
]

let VIDEOS = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
]

// CSS 내부에 미리 로딩해야하는 컨텐츠들
let CSS_CONTENTS = [
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
  "http://localhost:8080/img/img01.jpg",
  "http://localhost:8080/img/img02.jpg"
]
