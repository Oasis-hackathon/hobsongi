/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import HomePage from '../MainPage/HomePage';
import HobbyListPage from '../MainPage/HobbyListPage';
import HobbySharePage from '../MainPage/HobbySharePage';
import WebViewPage from '../WebViewPage/WebViewPage';
import WebViewOnlyLinkPage from '../WebViewPage/WebViewOnlyLinkPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

const MainDrawerNav = ({ user }) => {
  const [hobby] = useState([
    {
      name: '보석십자수',
      description:
        '실로 수를 놓는 일반 십자수와는 달리 보석으로 수를 놓는 십자수 방식으로 집중력 향상에 도움을 준다.',
      link:
        'https://search.shopping.naver.com/search/all?where=all&frm=NVSCTAB&query=%EB%B3%B4%EC%84%9D%EC%8B%AD%EC%9E%90%EC%88%98',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTZfMjc5%2FMDAxNTk3NTYyNjkxMjIw.ZoOcTDBaDUBqFmlFxf6BgmF3jjOujO3CU53SnxDd5Fgg.WWqdq-PXFuqLAx7z_wrvgzbBIghF4wGZ4PtEvexAyIYg.JPEG.hshs4024%2F1597562691869.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjNfNDMg%2FMDAxNjA2MTA3NjgwNTY3.0dmh36Ntn8CxUOukg-ydWw6QBl6ElAkYGuBlCQFkSj8g.u2jVHORHxO-AeuXTL66M6AP85bF2OaWhPuGpR8rGFbkg.JPEG.fhzkxms%2FKakaoTalk_20201123_140002812.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTBfOTYg%2FMDAxNjA0OTUyMDMyNDkw.RcsvR9DiAcbt_3OwNhRHK1CHuub9qnTiHwHj3egrozsg.o05xuIJ0uvbEu45ZFdxH-jbdbgikjtIYSt0y5ztCeWcg.JPEG.windsinkeita%2FKakaoTalk_20201110_045851031_11.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTNfMTcx%2FMDAxNjAyNTY1NTExOTMz.jb-O80ZsJH8haw7Tsx_3tr48JpTJT4I8dd09ZWDLNuUg.9rjTscZDujQGrC2IHZ2cuMvNx5vYcSIBNsBFy17wBdYg.JPEG.jsmy2002%2F1602565509996.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDJfMTI5%2FMDAxNjA2OTE2MTk0NjQ1.F8J4mDSF4goe2IBFTXnmNMRu2_AzAgWrwWp3Jln30QUg.-xBqyqH4qtjB72qm4_VRAGBCfKaHga4dZkwLSdEvYi8g.JPEG.yurikkyuri%2FIMG_7263.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDEyMDJfMTAg%2FMDAxNjA2ODc4NzQ5NjAx.IUq9A-7ZWfi2Owb31W2uOIan0q_qvKUWnL7I9LaV6AMg.0s7Yk4e8WPIiPw4RbiIy1jfuyXn82q0shbx7Oid5Cf8g.JPEG%2FexternalFile.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjRfMjIy%2FMDAxNTg3NzExNTQ2OTAw.zqtDAoUgsEC1QBjoy3i5FtxAZ7zcHp1M2tSkxkAQMiAg.n9rQp7thNoU5-fBTJVO4r04MQKimNs8euKX8BudCTh4g.JPEG.qhrejddlcks%2F1587711547983.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTRfNiAg%2FMDAxNjA3OTIyNDQ1NzAy.2MJBmjne6JGzxOsnidYTOPpmiHszE_ATavXB5yJUUw4g.V6wWtq24Hofqw-ALd8Wg-zZdtr-SV8ciVYUSQ4mHA-Ag.JPEG.zlemans%2F1607922442657.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjlfMjkz%2FMDAxNjA2NjE1OTM5ODQx.4Y6TOy2iRWXN2XP__rrtPjoPjwwkI2iNVBi3TIovmTkg.IYOd3fmyF9QrpjqvWeXEsDv0h4iurJQWXrDVc9Rtni8g.JPEG.gloomy6552%2FPB244112_-3.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjBfODUg%2FMDAxNTk3ODgwNDYwODgy.97DSbqRi4NCSC52_-YWNhDjcCra8rM05cEUTsjoNv2Eg.hrw-JviJy6IAI12L5Qeh5Q78ULunlxK9ULYR1El6R3gg.JPEG.oogaa107%2F%25BA%25B8%25BC%25AE%25BD%25CA%25C0%25DA%25BC%25F6.jpg&type=sc960_832',
      ],
    },
    {
      name: '미니어처',
      description:
        '사물을 실제보다 작은 크기로 만드는 것을 뜻하며 음식, 하우스, 오르골 등 다양한 종류의 미니어처 만들기가 있다. 모형의 크기가 작아 섬세함이 필요한 취미 중 하나이다.',
      link:
        'https://search.shopping.naver.com/search/all?query=DIY%20%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98&frm=NVSHATC&prevQuery=%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTZfMjIy%2FMDAxNjAyODIzMDkzNTA4.ZEu_dQnfK_d_5Y-ZI5suIWt0hyjwiBet3CDv9tavzskg.MG9dGY2xiWlzQ2ZpRNZcJgCWw59VzbJNHLx1MKbtL4Mg.JPEG.dmswls6755%2FDIY_%25B9%25CC%25B4%25CF%25BE%25EE%25C3%25B34.jpg&type=sc960_832',
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F2d%2Fae%2F83%2F2dae83958e6331e0b87296908fed4331--tree-trunks-fairies-garden.jpg&type=sc960_832',
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F86%2Fb1%2F14%2F86b1141c97dd639ecc79590f5587f607.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTlfMzgg%2FMDAxNjAwNDk4MzM2MzUw.Y_6bKzPk4KPQkNv3G8tMXGXQEgTZzwELTGqc0XCEKzYg.bY_tcmO8WoBGNASbc6PKcRXw8ufO47ndRMomJmzxaaAg.JPEG.ryuvia%2FKakaoTalk_20200919_151503767_10.jpg&type=sc960_832',
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.ggumim.co.kr%2Fcache%2Ffurniture%2F600%2F20200203143410sJQoBTvnlf.png&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTdfMTkz%2FMDAxNjA4MTM3MDQ4NTc0.4Rj5K0AX0jWcSu_1yLcUyAyHZxmY0Bf3X68Q6Jb4VQQg.HFkODCFya8imgEQsCz3vtOL2VN_cGSJElDCEzIwCsaMg.JPEG.justine17%2F4f16614fc8734ce4d04721bcfe2cce2c.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDVfMjcg%2FMDAxNTk2NTU1NDcyNzM4.FgMc4zzFsRX-azHV2zQumO6SBSwljpoSS_D1W5_OfLQg.rhhP5b6dbaNiZo0mCYFviUD_1PVzhb5uxhaeWC0typ8g.JPEG.sr3580%2F1596555472095.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTRfMTk0%2FMDAxNjAyNjM4NDk3NDMx.v5uWwIokF9bYKeed5VbQNeWoRknUA6RUt_ZdWu-9BpMg.gg4XYIRwQZcjTBHOPH_-x86qVisAJchmbHyRjJxZ4K0g.JPEG.lss7502%2F1602638496602.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_2213701%2F22137012811.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2020_08_08_1388%2Fa4e24aab-d986-11ea-8bda-48df379ccacc_01.jpg&type=sc960_832',
      ],
    },
    {
      name: '프랑스 자수',
      description:
        '십자수와 비슷한 수예의 일종으로 다양한 스티치법을 이용해 모양을 만들어 수를 놓는 취미이다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%94%84%EB%9E%91%EC%8A%A4%EC%9E%90%EC%88%98&frm=NVSHATC&prevQuery=DIY%20%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98',
      image: [
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F03%2F56%2F6c%2F03566cdcfc1aed1408aaf6268cd8fc27.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjBfMjUw%2FMDAxNjA4NDIzNjYwNDA4.CNaGo1TM5PMseVBi5wiqvjKHjuyk8Nu_WFfOPklF4-kg.uMyD07v_XB5ejfVS6hmTL8f1ytn6jB_hCpT3-uYWh-Ug.JPEG.abskaka%2FIMG%25A3%25DF20201218%25A3%25DF085543%25A3%25DF081.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjBfODYg%2FMDAxNjA4NDIzNTk3MTc5.1iGQu0ZecEjRT9DXymnskd5swIfeHYafYO0R2DCJQVUg.IZlcn7deMKfOXvIrS3aGigLME4LJrrjoCamM3mfA_uQg.JPEG.abskaka%2FIMG%25A3%25DF20201206%25A3%25DF153730%25A3%25DF869.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MThfMjAw%2FMDAxNjAwMzg2MzgyODk4.w_nucrTbxGVoZo_JOfGssoPK4xPwxWrhK__GJ52JQBMg.2ui4pL6m0FJ_BqYKG5HcMrLX844TLRwLdBkSzyvZBHkg.JPEG.zocvit71%2F1600386383125.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201228_100%2F1609150447441Af3mY_JPEG%2F10286227064291011_1430221876.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MjFfMjIy%2FMDAxNTI5NTYwMDU0OTE1.hip1imGVbWGTg2i4SMCBKH9CcmV9F_4Bw_QAIs58ZAgg.iLUEvJHRXEQTp88C3SRIvqvej50yBAKKPIFfgIL19n0g.JPEG.rosae007%2FIMG_20180615_125923_593.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA2MTNfMjMz%2FMDAxNTYwNDM2NTMwMjAz.BbhwfIVthMdQnC_LhkF5qO24X8rzEHqZ_kfx2MgaF4Qg.R1YRvLuAG9Rn0RrXWfJT2s0BcRTHJum69HcvH-uKPh8g.JPEG.tkftkf00%2FIMG_1683.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MDlfMTAx%2FMDAxNTU3NDEzMDYxMzQx.2ZB5hlAAsXaDUN8CI0GabBWsJDewKzHe0RKa-YElMlQg.W3yoBq7YzyyD32Vidhx3Q1-fawKIO3DGdhSjG1GlvzUg.JPEG.hanshin0306%2F1557411467815.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjFfMjA3%2FMDAxNjA4NTUzMDcyNTc0.JQfvhl_VFbP40W5IUKLdycDANMfvBDxkStiM7-4tZjUg.kpr-KD5066RLVrGiaOroywaSp6IEfs2-CNwJIwIycWEg.JPEG.conectshobby%2F1%25B0%25AD.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201125_106%2F1606289057641bjowH_JPEG%2F7424836838423064_1750969009.jpg&type=sc960_832',
      ],
    },
    {
      name: '테라리움 만들기',
      description:
        '유리 용기 속에 흙을 채우고 크고 작은 다양한 식물을 조화롭게 배치하여 기르는 원예활동으로 이끼, 미세먼지 정화식물 등 다양한 종류의 식물을 이용하여 즐길 수 있다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%85%8C%EB%9D%BC%EB%A6%AC%EC%9B%80%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%ED%85%8C%EB%9D%BC%EB%A6%AC%EC%9B%80',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MTBfMjc2%2FMDAxNTkxNzc0MzE2Nzc4.geLBHaCOa8S9SHbdZ5CfwphP-2yFNS1wjk9yvlIG8Ysg.fAdm6tDTAivynQjBNSgt7kenTz4-0HEDuBdkM6NEIPAg.JPEG.blessing4734%2F20200603_150456.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMzBfODMg%2FMDAxNjA0MDQ3NjA3Mzkx.82aaDiylHscmZfP6TPwKbpT8688u6CGklndbp5bXNEsg.yolk_etmtwsFQ9Exm6KqwKlbuS_HU8nrBZCAoyOlV-0g.JPEG.ggdesign2018%2FNCYP_Tabletop_Glass_Geometric_Terrarium_Container_Decor_Flower_Pot_Planter_D.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjZfMTUz%2FMDAxNjA2MzE3MjE0NTI5.XIND4JV6LfltObgHN4u4r0bGNYcb4_otyek08J8t0tkg.21_FJhDbGdRJlRHjg94P6NtMKrEo30gPtYmVP7c1x94g.JPEG.soshee7300%2F1606317201597.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjZfMTk5%2FMDAxNjAzNzA1OTg2MDIw.qBNqRJTB-2y8DpuMniFstEeD4UDTNO-dj28Ca7lQ-fEg.weyP4dy2uyM70EgQWqbnsBonXrIaEsn00uli4Z7M0pwg.JPEG.h264175%2FKakaoTalk_20201026_183340625.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjFfNjIg%2FMDAxNjA4NTAxNTE4MDkx.REafuNOpjOuNvekCgFQGV-FsPkGQzTdIaIjal4ePrFAg.YIyldaQZPIUuNNQMMXCP9P0zbNVfvh3_UqCJYkVGwPIg.JPEG.gayoung4441%2FIMG_1709.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjZfMjkw%2FMDAxNjAzNjgxMzQ4NjE2.pTk8SsIqxiTeAyj-BL27p-dEksSwMgEaWTSuTK6agyAg.az8kj7tP5iMmMHR6cHFAk0MACoXzPnRQpo90PYijiNMg.JPEG.soshee7300%2F1603681333437.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzA3MDdfMjI0%2FMDAxNDk5NDM2MjQzNTE4.jbMJwF0V00eqnyQgqDDemnPFTFSEiKnkUHqbacLRXz0g.jJxnxeGNnpI41flacKXSvXoupFTY8qUohnQj6Qz0MmEg.JPEG.bos014%2F20170707_163606.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MzBfMjA1%2FMDAxNTY5ODM3MDk2MTc4.Exb7GLqmy_1Sna-HQD2PEexvOhIy5fY4-fL4T9Q6B4og.kY489X8MrEhkxrpvjVmR3qo01iEYCoHLrxZ50pEnVqgg.JPEG.bbbbang80%2FIMG_8632.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201125_226%2F1606232270506gF6Em_JPEG%2F7368050186459341_1266143662.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTdfMTgw%2FMDAxNjAwMzUyOTg0ODQ4.haXjdv664CYaElc2-Fm3NsZInaiqMW7ESa_QV_wvMSYg.Q2vaBa1vXQqB4__p0ZBvEU37EOpaNTz14yV86I9e4Osg.JPEG.sysweety27%2FIMG_0787.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTJfMjQ2%2FMDAxNjA1MTExNjEyODQ0.ZR61aIVXnqQTmMwKcGucTtS7-0HEB8B4LK3es1kJJiYg.RJ_pHVWc-A73jZ1Fm4hRgf3oMWzXrIf5y56-awL7gPog.JPEG.soshee7300%2F1604915188121%25A3%25AD23.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDNfNzUg%2FMDAxNjA0MzMzODA4MTc5.TmxO4YfJoM2OSmrYgAfp4aRCqc1vEKH4AoZmO8yPPqIg.PLSp8sWuMRguSe155jkDuboM5VDIob4iZaGyYPMeN0gg.JPEG.soshee7300%2F1604075001698%25A3%25AD16.jpg&type=sc960_832',
      ],
    },
    {
      name: '펀치 니들',
      description:
        '특수 제작된 펀치 니들에 실을 끼워 원단에 바느질하듯 찔러 넣으면서 일정한 모양을 만들어내는 활동이다. 실의 길이와 간격을 조절해 다양한 모양을 만들 수 있고 용도에 따라 완성된 원단의 앞뒤 모두 사용이 가능하다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%8E%80%EC%B9%98%EB%8B%88%EB%93%A4&frm=NVSHATC&prevQuery=%ED%85%8C%EB%9D%BC%EB%A6%AC%EC%9B%80%ED%82%A4%ED%8A%B8',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201029_97%2F16039523377440dEBq_PNG%2F5088183450188635_857594790.png&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201216_100%2F1608090990059A9BVV_JPEG%2F9226835778503783_74541936.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjZfMjMw%2FMDAxNjA4OTczOTUxMzYx.LLlgD3vuG9j931IBHe5UQD9lf0_yYSQVCxwkkgUKEDMg.Q3643uFGGbrKG43T_OKIIhRAX7P6yaavEpWfGZjkeR0g.JPEG.edelt%2FIMG%25A3%25DF20201220%25A3%25DF115733%25A3%25DF490.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201117_54%2F16055956731871SbXT_JPEG%2Fbd93d27ecaa84cb5aae1a6b67569cc53.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201224_176%2F1608759450675eLJ5G_JPEG%2FO1CN01xxNXCQ1pCRIT4vMBx_0-item_pic.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMDdfMTEg%2FMDAxNTc4Mzc4NTQ0MjAx.mcdrI4mOJ7F8y84PJnH4xlNu1SYU3u8rpKCA_4_1-H0g.VXsiSK4tzaYZNSrSP1Cs12qwk1UPcGhQlE5g0RvXj7Qg.PNG.i101do%2Fimage.png&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDJfNzIg%2FMDAxNjA0MzI4MjM5NjU2.U9vZqetOQMXACZZ06R95vek3jm4ljBhDPUmpT_Ok5K8g.FAcXpOCg63_TY7Y6LjxuUH1S_taSdLccihI4VThlvqQg.JPEG.2ndeun%2Foutput_4187206747.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201028_74%2F1603847283096DUT2u_JPEG%2FO1CN01fWufdx1tWMyfSaNhA_733355909.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201228_149%2F1609087042922NQWDd_JPEG%2F10222876742378428_970146156.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2444499%2F24444991508.20201013220730.jpg&type=sc960_832',
      ],
    },
    {
      name: '페이퍼 커팅 아트',
      description:
        '한 장 또는 여러 장의 도면이 그려진 종이를 칼로 잘라 아름다운 그림을 만드는 취미로 결과물을 무드등으로 활용하기도 한다. 이는 집중력을 요하는 취미에 속한다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%8E%98%EC%9D%B4%ED%8D%BC%20%EC%BB%A4%ED%8C%85%20%EC%95%84%ED%8A%B8&frm=NVSHATC&prevQuery=%EB%B3%B4%EC%84%9D%EC%8B%AD%EC%9E%90%EC%88%98',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDdfMjkg%2FMDAxNjA3MzUwMDkwNzYz.znJUXciyrubzIEB-XEVxlGW2_pST8IE4tqe77tijk-Qg.ycp7rc1F1LhEyBH7N3fHbdy8rApaONyrK8fG_V6Bbxkg.JPEG.humanities_arts%2FKakaoTalk_20201207_230603353.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjhfMjIx%2FMDAxNjAxMjcyNzg1Nzc2.Gx4REZ3mp7y7fh3-Y3kMeBCJrE_z5_4Cyq9UtlcV0dMg.7777rJBqSHTySz6ZH6OHsw1BodnxiadTwxMXrdzwkhkg.JPEG.softtofu2020%2FSE-7be8e076-9ef3-4932-9c15-8a5175367257.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA1MDhfMTIz%2FMDAxNTg4OTQ5NjA0NjE1.-q0eT82-CSg46hyzwL9LkHbmtt2g9KprxcpkaAj-f4kg._6qGFBQikLgs8B6mJ-n_0q-_Zs56puPPehNLzRs5TpQg.JPEG%2FexternalFile.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MjdfMzIg%2FMDAxNDk1ODY2ODc5NTE2.z2w-gTftZxOw0yTClwI3lCAagl3SM61ECya8eHRX6hgg.wZ15GFG5Qwt2dA9ALf7GifosgpwQg1A_ikLoiZd4IKUg.JPEG.myhahajy%2Fa806b208-1d8f-4300-bae2-163882c8dc88.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNjEwMjVfMTk4%2FMDAxNDc3Mzg0MTg5ODk3.tVhmHgu6eOaYz0AQ8-wnNY2oDGcNBOftTZa5hlUVJO0g.75efBpQed_-J7qEUkC2PgEvJnJkt35wT5TsNGxK66Zwg.JPEG%2FIDP1fRT44QEkp8m8_1i-BTsI7nOY.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MDNfODcg%2FMDAxNTYyMTA4OTU1OTA1.ZXNGYgL21bdZtwwP-xbTwhwUzXK5ZlpJQxEnhHQeS-wg.Rpp5HBKh8aOM762C9wYpHs-eJyKNu5I6erc74SWuqgIg.JPEG.pupu1970%2FCYMERA_20190604_231251.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MjVfMjUx%2FMDAxNTI3MjU3NTc5MDkx.3SxgPSuf27_tZWklNRTqua3j7Isqu_1iE2c2pa773QIg.9GjDDTuyqeZ7AHy2oG9PCRMKR42b-0PVAxZcb-HzFJkg.JPEG.jjuni6428%2F20180408_023806.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201017_21%2F1602940614862AEDm2_JPEG%2F4076513561030403_947263605.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200911_45%2F1599814070034RGtE7_JPEG%2FTB2MUH5dBcXBuNjt_biXXXpmpXa_3039962413.jpg&type=sc960_832',
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe5%2Fa5%2F9b%2Fe5a59b00d38bf8ea4e0e80b5cbe5c1e4.jpg&type=sc960_832',
      ],
    },
    {
      name: '홈베이킹',
      description:
        '집에서 직접 빵을 만드는 활동으로 홈베이킹이 쉽게 가능하도록 시중에서 다양한 믹스가 판매되고 있다. 다양한 난이도의 베이킹 기법이 존재한다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%99%88%20%EB%B2%A0%EC%9D%B4%ED%82%B9%20%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%ED%8E%98%EC%9D%B4%ED%8D%BC%20%EC%BB%A4%ED%8C%85%20%EC%95%84%ED%8A%B8',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMTlfNjQg%2FMDAxNTg0NTQ4MTk3Njg5.rtsP7EhTUW9nmb6FNpCFxuETaCxeqrp6D9w1LGHqQ9sg.Yu8vInJDumoZK3Fi7n8UviTY42mHTlqYp-GwDJT_nTog.JPEG.lucy__choi%2FIMG_4608.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTBfMjAz%2FMDAxNTk5NzQ2MTU0NTg1.IQrT81zFXl2FyCCHLyZXNdzwqDBzts6NxZ60VUvPPw4g.oNRQjnOdyIhOgvpSFCireSVnDeXB8OsgbupPzlTal7Ug.JPEG.coronatapa%2F1599746153188.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTBfMjEz%2FMDAxNjA3NTc3Njg5NzQy.zlWdRZ59mlUJ9xQYhVQxypBm_G-pNE_eSZsPJEEcm14g.i62GctHhgowKfWKTvlHlh7vCVc5d-KI6plr5DbrOnLYg.JPEG.wonee14%2F20201209%25A3%25DF212443.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTRfMjIw%2FMDAxNTk3MzMzODIyMDg2.sOFHRb7YCiVBFRq1Ylzg7tnyrYS1u1Czs0Z6NmR0EBkg.SVxb6xOrmY2EjThZGRMUr2NqGNmPrWKnB5qViBZRJ3Yg.JPEG.jeoni7601%2FIMG_9503.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MDlfNDkg%2FMDAxNTU3MzM1NDE5ODAz.pYfOjlYOyoQV5WlxnaI-_FfMkiCASCFui35qWUS_9wog.tm-8q7J-n1HncRAOnRH4LLJUcvPb5nJjpZVn9yAURpIg.JPEG.kos9907%2F40E22BB5-D8DD-490E-BEE2-30E887D0C045.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjhfMzEg%2FMDAxNTk1OTExOTk1NTA1.OK46u2pFterW_1VlFoxkLtxfs4N2J0gMp1jsFFgqhREg.GrW792kjO-_EUbrzx1hUuzdHZKGclsTcEH3MRGykLtkg.JPEG.pja0359%2F20191225_152301.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMDhfMTE1%2FMDAxNTgzNjc3MDEwODIx.dxjw2H_hsUEwuApGl9uObBQu2XUEG3VyDLw7n06FsKYg.rIoRuqER4vtzgYIN_TfUHAEP3WPFWz1rPDY_oiNFb8wg.JPEG.lee03271111%2FKakaoTalk_20200308_224055492_16.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAxMTNfMjI2%2FMDAxNTc4ODc1MTg2NDI0.PymjhOmOLEGokdT-PwpLgEnLWyU4Wb84DVlYAao9DFIg.rY-uVbT377oIZb4hhyDFldY2HL_ibXDts2FNSKQSgLIg.JPEG%2FexternalFile.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDNfMTUx%2FMDAxNjA0NDEyNDI0NzY2.PosZCkLqwmhpKqQUKz-IjHijnFKNj7nyHOpOcfNvBfcg.7j54wBEZjPuDt6_2bniSkXbsfLEwj7Bsr5C7birwhywg.JPEG.dlqhfk9696%2FIMG_3817.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjRfMjAx%2FMDAxNjA4Nzk1MjQ4Nzg2.an5fajtGutZhaMgBjj4Qr-fEZW5-zDmuERF7wVXlepcg.evHwTU02NrIInUC1wbwmT6wGNl-bTKcvO315aiIZOUAg.JPEG.nyj8701%2FKakaoTalk_20201224_161756381.jpg&type=sc960_832',
      ],
    },
    {
      name: '니들 펠트',
      description:
        '양모 슬리버를 도안에 놓아 펠트용 바늘로 찔러 서로 엉기게 하는 축융을 이용하여 인형을 만드는 취미이다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EB%8B%88%EB%93%A4%ED%8E%A0%ED%8A%B8&frm=NVSHATC&prevQuery=%ED%99%88%20%EB%B2%A0%EC%9D%B4%ED%82%B9%20%ED%82%A4%ED%8A%B8',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2512076%2F25120764354.20201206201820.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200807_162%2F159679297607153ugG_JPEG%2F34154518726469281_1450782563.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDNfMjY0%2FMDAxNjA0MzgwNTg5MDE1.0e1T9vfTWxhTqiqZh8-OzvicsG4hBzIMhAp0S-L6Bekg.cBhEpsR-Som04G6FMMOd08ha6dixKkHrLMoFeU6UhxAg.JPEG.jungnam018%2F1604380588070.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDZfNSAg%2FMDAxNTk2NzAzNjA3MDIw.V2vG6tdHoJSOsLucFMgn5l8ptRHkje1Z6iT0WG2Ye44g.cvZJs43WyRw7442IkTrfTkCQRWghIBB0yQiOODHvZGsg.JPEG.hisoka100%2F0.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDlfMTIx%2FMDAxNjA3NDc3NjU0NTgz.FygzhUHru-hOJ3jgBRcZ7z0fILDovNEkueAUY5xNhmEg.rugfzitpQvMRtcSorcnYqcgaNqfnqoazs9-slJ5yetIg.JPEG.jungnam018%2F20201209%25A3%25DF100324.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201126_150%2F16063596968070t4qW_JPEG%2F7495480513883635_623491440.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201102_256%2F1604256582546J6yuc_JPEG%2Fno_0.440159888159948661604148539686.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTNfNTAg%2FMDAxNjAyNTU4NDMyNzUx.1aPkzgIvd_zRMAggx45swaVMW51Z_G2TmmTle2eOz7Ug.pt-NoPNArTk0RDPWzLDfD2GlhvpPPk8gPwoxvgX-N30g.JPEG.nalja_ppyo%2FDSC08513.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTlfMTkg%2FMDAxNjA4MzQ5NzM2NjQ5.Z2fHbSJ7Boc-4kpZ3PGUuM3YXpMXbQ2D4QSTfR0iBIcg.6qToCPRgKYWxIKDlYYX4lqRy12Jwk2ohkHtmhjQUm7cg.JPEG.papasbaby%2F20201214131720_IMG_7610.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200814_35%2F1597396421810CVaED_JPEG%2F34759810332028365_1942622466.jpg&type=sc960_832',
      ],
    },
    {
      name: '실크스크린',
      description:
        '자신이 원하는 그림으로 판을 자른 후 그 위에 실크를 올려 망사 사이로 잉크가 새어나가게 하여 원하는 그림을 찍어내는 기법을 이용한 취미로 티, 카드 등 다양한 소품에 그림을 찍어낼 수 있다. 이 취미는 난이도가 높은 편에 속한다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EC%8B%A4%ED%81%AC%EC%8A%A4%ED%81%AC%EB%A6%B0%20%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%EC%8B%A4%ED%81%AC%EC%8A%A4%ED%81%AC%EB%A6%B0',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MDNfNTUg%2FMDAxNDkxMjA0ODEyMzE1.SYqKVgJ0addCYbhQCzH8CswmCInBlHK08FjwxiKmXWQg.RXmdvbaUAhfvhzRosW3J6YGxUeuK9hBfnM17RWuf2FIg.JPEG.lottegallery_anyang%2FNaverBlog_20170403_162809_04.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjhfMTUx%2FMDAxNTk4NTg2MzA0NDc4.bzIcc-p2TF0d7EuL-hr5WjmW7VrL1II6HL5jeut4Fjcg.kUJIUYMTKFxr8zUf09mZVPDSurjCVdrNZ4Ltn5t3l54g.JPEG.printstudio_777%2F10.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MTlfMTQ4%2FMDAxNTkyNTUxMTQzMjAy.RGF94vcx5iUcImZdufgl_YjQenPpdYM-2g6W_-TStAQg.L57pqQz5pHuOpjurA8sExkNFaD94eXb77RTwPgTaNfYg.JPEG.aepal%2FIMG_7969.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDNfODkg%2FMDAxNTg4NDkyMjE0MDU5.Y4ce5pzcb8kPkvkrdip3BIi7K73AJ3A15OLz-RVrPaQg.qFVXOakWWpCbNfsKxrZI67xs8ATyO3UT-Of1Ecgt1Uog.JPEG.art409%2FIMG_9221.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMDlfNDkg%2FMDAxNTc4NTAzNjE2NzM2.CpvpfAHGFgrSvelEfyWztqD-L96_WxKZuQJI0G_vjvcg.4XyJAPGMIqDAmXLbaOEiMnM0vcnE0q5XbhoPVwxB0hkg.JPEG.tongvely217%2F1578503616562.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MThfMjQ0%2FMDAxNTg3MjE2MTg4MTk5.oYcu-Zw-GW14iWNKjAfq8xCnXabzOofLJCzS10CauTIg.vjzqqBuNwi8vxYhiHuJmH41B0yVg1uYWh1t_f7EkPCMg.JPEG.violet7651%2FIMG_5492.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2019_11_17_3181%2Fa6178c2b-093c-11ea-ac3e-505dac8c3639_01.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTdfMTE5%2FMDAxNjA1NjAyNTEwNTU5.IGnxnE1kE6J1wTWfbwp2_mgoA6aA_dtgLBzcBscWSKYg.PLjPCcs2gTDoY-eR-V8soibB7WPwqGh8Tnw50sLFfwMg.JPEG.art409%2FIMG_0770.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MDVfMTkz%2FMDAxNTMzNDI2MjMyOTIz.sl2PN4nuWiifdVTAJeJOnGT02tVICRMF0IEfNdNRSoQg.9ecRZ5VKT-gE1vpZ3MizMFkn3NgLPTL1QBNjapc6wBwg.JPEG.printground%2FIMG_1061.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTlfMjQ0%2FMDAxNTk3NzczMzg0MzQ1.s3x8crRaKANPl7Z_YWjYNr8FqLxAtpA1szkne4F0HFAg.cv_eRxGNobuX-DQTSSDu0Hku0RgmxR9IGkquUjOv9ccg.JPEG.bullsiartstudio%2F1597773384425.jpg&type=sc960_832',
      ],
    },
    {
      name: '비누 만들기',
      description:
        '녹인 비누 베이스를 몰드에 부어 비누를 만드는 활동으로 난이도가 쉬운 취미에 속한다. 녹차 등 다양한 재료를 첨가하여 자신의 취향에 맞게 결과물을 만들 수 있다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EB%B9%84%EB%88%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%EB%B9%84%EB%88%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDEyMDFfMTIy%2FMDAxNjA2ODExNTQ2MzAy.lz7jzBPmqwqoVY88ft4FLYdlnb-TBC0Eg16hLaiMQYcg.l0Lfz-QG0VYmvgmF_dtXxmu8yzelapfnwjo6mruxHvYg.JPEG%2FIdjsDLshBH8LEmT-QOFuSS2WQvYY.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTRfMzgg%2FMDAxNjA1MzM0NzY5NDU4.vQ01YGMfezrQlqv5DDD1rPxMm6so4dBTC_6eTpjl3wsg.n_03N8alatJHZLZ_cMDQfiSrA_fMB2LFOrxKRpBucUog.JPEG.dbfk562%2Foutput_2663302339.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200722_286%2F159542367149591ThT_JPEG%2F32784410129320648_2125223666.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjJfMzgg%2FMDAxNTk4MDg0ODQyOTU0.a50dY7HCcTWmrPPXX5L8khER3g4FZJGHf1yKkmLgYy0g.bIPMAefHmFYZTiqyMDb2AlROliiSCcXVEXCLXYGzJxog.JPEG.paradise11_03%2F2020-08-20-00-31-50-840.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMDVfMTI0%2FMDAxNjAxODkxODMxNTEy.cKkP1b_yGbQ5giALXl8A3DX7Oi9xQ3FIu7dNdvjzhBAg.hsa6Xx6NLGnXbcc03oNz8qWGuAWZg-P5KsRzJ8lKV5Qg.JPEG.lemon7502%2F20201005_144309.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjdfMTQ1%2FMDAxNTk1ODM0MTk0MDA1.6KQ4-uEBkMGj3ifLFt2Hf8T2V23BxswaZolDVx2HuGQg.xEYKfQhGHwU0iMir6IaSRRt10zjZV5keYHfKiQ05q1Qg.JPEG.mr0831%2FIMG_8963.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjBfMjM2%2FMDAxNjAzMTY0NDE4OTQ4.YAWqCc-wC5zYFb-uzpJdTn_LnwKLOKN3voOXR0oNa7Ig.orik6xcitE8-bXJjwqvicR6qVw9_IEUF2VtZNQy9KQQg.JPEG.dj54321%2FKakaoTalk_20201020_122641047.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MThfNjEg%2FMDAxNTk3NzU0MzI1MzA0.dcy12KtQkd6iuCdJRX8Z4hjQEOm7EUllscqc1woU0Icg.jVZAl6224z1r_30g9lH_5BRoqt54OSIUXxT3NK85Er4g.JPEG.sfona%2F1597754324026.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTFfNjcg%2FMDAxNjA3NjE2MTczNDA1.E9qZuPZE8NdmhThmUq_DEy1VoM9PdRpNkuzXsMtzr4Ag.tjIv22VahHPyFT-j1c1t16eSZrNYLv_LVsqBPoMRM1cg.JPEG.khseo0073%2F20201202%25A3%25DF181611.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMDdfMTM1%2FMDAxNTUxOTY1OTUwMzc4.P3-SAWUm8Ne26htIvkQCMjwHtJoSiZCpGja6DFvL8T4g.093ybYn40I_bUPall7JnKFFiJEkh2SsyINJWac4jOsYg.JPEG.wjdtjs0617%2F20190219_110028.jpg&type=sc960_832',
      ],
    },
    {
      name: '향초 만들기',
      description:
        '녹인 왁스를 유리병에 붓기만 하면 되는 취미로 비교적 쉬운 편에 속한다. 자신의 취향에 따라 다양한 향과 장식을 첨가할 수 있으며 인테리어 소품으로도 활용이 가능하다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%96%A5%EC%B4%88%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%EB%B9%84%EB%88%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%ED%82%A4%ED%8A%B8',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjRfMjQ4%2FMDAxNjA2MjAyNzk3NDQ0.CQ5_gkE3Dg_yt_CdiilhjVzRcjNCeoHzJo6oZ3daMHsg.4Pi-XKr_m0Yo_RXp8LKcUE_o2gqVn7XYCP74shnbxCwg.JPEG.cmr0824%2F20201124%25A3%25DF150624.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjBfMTE0%2FMDAxNjA4MzkxMTQ1NDg5.4IwoG9rxLRqLYktA5cwN_5pm-r40SLNAJnb33xSmdXwg.nOIwyRdTuvtvz0oGgMQR23VUJDUbgwREKeurqDGsLnYg.JPEG.lodymd337%2F20201219%25A3%25DF092633.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjVfMTEz%2FMDAxNjAxMDQzMDAyMjUz.MCEvr6MJmhfyQt6Oz3rG5E5zBaSqwpHuCBWqNAXvnO4g.2q4_otYTEqnUU3sNoZFSQHAZQQHa6ROa0iyH_A0pIsMg.JPEG.knsolchoi%2FKakaoTalk_20200925_203544089_18.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTFfMjcz%2FMDAxNjA1MDgyMzg5MjI3.l5JEZA0vIiHWJdTEQIUe9QOvnMd3_gPfngJYsoz-YvIg.yY--LJMWAxmoefOgGO70X4Oqu4zApyxewm-4Dh3e6Fcg.JPEG.mulsj%2F20201111%25A3%25DF164724.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA4MjJfMTcy%2FMDAxNTk4MTA2NDcyNzIx.70TZNE-oX9DJIetbWAtQdPW0SfhQ1dLCcc8EEOJkvFMg.kPQPL5g2whODAnLLYdo88qpjwQvvi6DFBDGxKNrFTP8g.JPEG%2FexternalFile.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MzFfMjcx%2FMDAxNTk2MTc3MDE1NzMy.8UyP_qKDjb1-TeCFPVGZ15q2iLfuvoCCP4U1u8oeRtog.xDGQX6gNteEfpIIykKnl97D_OmYsgnYQ13DCqZKMrvog.JPEG.kjsc1234%2FKakaoTalk_20200731_111030291.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MTFfMzIg%2FMDAxNTg5MTc0OTAyMTcz.3wqRGTYwkp540r0xVOT4FfpYPBq_hkC0f13gLo0VACkg.LdkURt4U6oMw40KrGGX6M62a2kv_I0awwugfkEg4_PAg.JPEG.clear281%2FIMG_5752.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjNfNzUg%2FMDAxNTA2MTY1ODk0MDk4.2V90FbwUw8TdP08rl0drOQ7vexD0koOJ0VdUENupF3Mg.6hV-TVdFmwQ_kg9eSyiy76fmHrsq4Xcz6kprUFzkTJog.JPEG.hysun1004%2FNaverBlog_20170923_202453_02.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MjBfODcg%2FMDAxNTU1NzYzMjA2MTAw.WTtQd6Bl3AAmPUTo2QXEbZZTvU3Hgb2DQXe4BQ3f4ycg.gM-OJcIoNkjW2dSJL3FWIOoYpoGE6YBKV0QNswFkZlEg.JPEG.kksshh3872%2FIMG_9264.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160907_14%2Fmisy36_1473209205014wEmin_JPEG%2F20160829_152219.jpg&type=sc960_832',
      ],
    },
    {
      name: '코바늘 뜨기',
      description:
        '뜨개질의 종류 중 하나로 대바늘이 아닌 코바늘을 이용하여 뜨는 활동으로 인형, 수세미 등 다양한 물건을 만들 수 있다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EC%BD%94%EB%B0%94%EB%8A%98%20%EB%9C%A8%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%96%A5%EC%B4%88%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%ED%82%A4%ED%8A%B8',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTFfMTQ1%2FMDAxNjAyMzQ5ODY3Njkz.fQhnAmGkjdE2cXGIyRZZWuaWDuHYX0njGpZjL2yRWxgg.kyHJMtJaXbqTdYb2YlHewMdI6A_UqWukq1qqN9hjpp8g.JPEG.j6613%2F1602349868661.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDdfMjcy%2FMDAxNjA0NzU5MTA3NzMw.JASEdUPbwFHSL0iVQitTIHl6BHpYzS9l1bOFhxpqjSYg.zFQOruJQktX3q-l2iVd_V4fiPsyGF4RGlB7HExpY9c4g.JPEG.3816qwer%2F20201106%25A3%25DF231121.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjlfMTk3%2FMDAxNjAzOTMzMDg4NDkw.lGYzh7hDAb6S5vD5ETav8CglVMmCnUKUnRaM5FQsBIAg.TMcTJZERYLsWz01dJqTnq4ALhAS3Pqx77Mqv4OtdLUsg.PNG.class101_official%2F%25C0%25CC%25B9%25CC%25C1%25F6_51.png&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjVfNzAg%2FMDAxNjA2MzAwNTY4ODA2.hgF_tZxmvIyBrsbJewYRrYcRAVUYDUwc9bdCWkGlH24g.1yiluteBMW5SYDb1VIR2cEuc4dhXciiBPyAk9cXwx8Ig.JPEG.yuying502%2F1606300567685.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDlfNjAg%2FMDAxNjA3NDc1ODI2Njkx.R_GjK4eUPfg_6Ofkma-Z0JD5sbNvLKhxL72BtRiSAR8g.CMQmcw3m0shMZQhK8rHhlp8s2SCFz76SeSRfyF1lwKcg.JPEG.tiso1914%2F1607475816181.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjJfMjg3%2FMDAxNTk4MDM3OTc0MDc1.qwj2nKy8yqRLHxqoJcelr6CuDkxoydGjYvHqTnbuYokg.P9NmcBs7I0LfJHf8y0juyXGFbVPuqhwy53PiSTQY5ggg.JPEG.sws7535%2F1598037972839.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMzBfMTU1%2FMDAxNjA5Mjg3NTMwMzE2.uaU9pljgoeRZzstDlpF2MS-c4XnhWZYEffa7taMSo34g.mWoGlyTRRyaR5qG7o3tyn-l-GuKTC25Sq0iWNQV_BsMg.JPEG.mskk2000%2FIMG_8535.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjBfNDEg%2FMDAxNjA1ODM5MzU5NTE2.yPRM7pMZAVkOoRut_xWuo3PolLPZyMzGZyEc90pv45Ug.go8Vct1UAEd-O_WOsZMOS28NeXARSOkTGV6ozUBNglEg.JPEG.82ssook%2F20200520_110627.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8277617%2F82776173644.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201215_203%2F1608013618333WPUuQ_JPEG%2F9149453142213886_708917275.jpeg&type=sc960_832',
      ],
    },
    {
      name: '레진아트',
      description:
        '레진 재료를 틀에 부은 후 굳혀 다양한 키링, 귀걸이 등 악세사리를 만드는 활동으로 크리스탈 레진, uv 레진, 알콜 레진과 같은 다양한 종류가 있다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EB%A0%88%EC%A7%84%EC%95%84%ED%8A%B8%20%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%EB%A0%88%EC%A7%84%EC%95%84%ED%8A%B8',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDVfOTEg%2FMDAxNjA0NTc1NzM0ODg5.Xe61UGYcj5KA67K1E9N7DbbqlDSpjrEHBS6jbK3cBk4g.EHeY_n8ra_JxQICfnuUPefenfUWwyoYPsezydx09B4Yg.JPEG.sheistree%2F1604575609537.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201222_247%2F1608604240849jKGgP_JPEG%2F125539bb-4f9c-4431-aad5-b28ee398f188.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTdfMTYz%2FMDAxNjA4MTczMTc0Mjc1.rvJVtASHxpLMe3XX-p-TuvnGYUlFW3C6CXqvqZ_58KQg.2648laoenmYSgRyLyYlVHObSMBck3UDFLsBDokm3XlIg.JPEG.rulljin22%2F5.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTVfMzIg%2FMDAxNjAyNzQwMzgyODI3.HqEaKuyHWXYO5dEZjZ48FC1XweWrvynTklXFvWYMZE0g.K4jMvaODlG7zREMcRUnx-IbTFi8KkHT6_3ZUm_WFa1og.JPEG.esl222%2FPicsArt_12-11-07.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTVfMjIy%2FMDAxNTk3NDczNjI0NzEx.r_RclnHsT9X89O3wmLLjKse2ur4TmiR6R8UbiwXCtEwg.jK8U-2JWodKO6CrdkDmyNu7MRvr9H4xzzyEzlatjyckg.JPEG.hjtoolz%2F1597473624142.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjJfMTQw%2FMDAxNjAwNzM3NjA5Njgz.dAOMFHipYpK__0_skUnt86re7wzy5Xhe5fPAzhEyp1Ig.sfP-3dBe70vzDkQJZQ5YVgw_6a9tJ7xw9w2wODmaycog.JPEG.spider6789%2F1600737356539.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMDNfNDEg%2FMDAxNTgwNjkxMTQ4NzQz.sGDCFzgqHlcM1-SDkgo0eMKIoSt0VFrFE_5soLGgcjwg.exaDqLKfbzAQ9YqRViaZ5d79Kuzq0LJsTh1nqmZ253cg.JPEG.gongunni%2F1580691148341.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMDVfMjIw%2FMDAxNTIwMjYwODA5Mjc0.7bDhfdJNplDfXNhjWyIyWWEybd9kSUt8RSBeAgmyCbEg.xrhSxvPwK1ENgCak1LP16JHK74e5ms7a5fn56jE-zZgg.JPEG.muounga007%2FIMG_20180304_175036_774.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTRfMTA1%2FMDAxNDg0Mzc0OTY5NDE5.WBYk5HvPNgaNaPuQIRbCCOgyhpWoxsguFh-HfVqUGxUg.R80lxSsBS88Z6KtZdw_AeetoLy3bY8NkzcD331FDkfkg.JPEG.luxsue%2FKakaoTalk_Moim_5XSPBTagMBTIFEQYEaLXguYb3AtWqm.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTRfMTA1%2FMDAxNDg0Mzc0OTY5NDE5.WBYk5HvPNgaNaPuQIRbCCOgyhpWoxsguFh-HfVqUGxUg.R80lxSsBS88Z6KtZdw_AeetoLy3bY8NkzcD331FDkfkg.JPEG.luxsue%2FKakaoTalk_Moim_5XSPBTagMBTIFEQYEaLXguYb3AtWqm.jpg&type=sc960_832',
      ],
    },
    {
      name: '캘리그라피',
      description:
        '글씨나 글자를 아름답게 쓰는 기술을 이용한 취미로 익힌다면 일상생활에서 유용하게 사용할 수 있는 취미이다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EC%BA%98%EB%A6%AC%EA%B7%B8%EB%9D%BC%ED%94%BC&frm=NVSHATC&prevQuery=%EC%BA%98%EB%A6%AC%EA%B7%B8%EB%9D%BC%ED%94%BC',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDFfMjQ3%2FMDAxNjA2ODAyOTUyNDUx.VgC8mEslJRZQyS78RP5hKLONqU9x0oMWsg8_H-l-wKQg.CZrRRF0PmpC36-BvUFAIJHp3QyhsV4Qf69FoeSLIyFcg.JPEG.sunnywjds%2F1606802950095.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjBfNDQg%2FMDAxNjAzMTUzMTg0MjI1.quUNP7TpqJBF4JIRykAdSlEoUoWYEKyUBWHxDvvQj04g.UYsaYPHHZfFrDbnH2EFx79FXXlsohZs-DHHZaVsuMX4g.JPEG.eun072988%2F1603153183717.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTVfMTkx%2FMDAxNjA1NDQzMzk5MjIx.QqofC5rtpLN6DmYyQKa-s86kSY2GhIkZ_qjdcOnldB4g.8YskEq4CdfDw4HMYcRTCVexPIzidT0856On5EQcXa4sg.JPEG.boranaby7%2F1605443401476.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMzFfMTIg%2FMDAxNjA0MTQzMjUyMDM1.pV2v_oY8_uCf9qalvkDl9TDr2xKsgM0TrfCCaP2LH1Ag.VJomf_PuQceFq3FDFrf7nNeMHHwA2GdgoAziD5o612cg.JPEG.yy2082%2F20201031%25A3%25DF153657.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA0MDlfMjk4%2FMDAxNTg2NDE0MzkwNzUz.47oU9O78MXzrrUK9Dj7_IZah2oeb5JeFJpRKwAOJxaIg.16Ca1S8soGo5_7r0SIy3pzCdCNsqSKnOsere0gt1Aeog.JPEG%2F20200406_225213.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjVfMjg3%2FMDAxNTk4MzQ2MDcxOTAx.AAiSS86E4urQNpl4L1FOnfoMFzmobEK66mDaHZB9o2Yg.yohEHPJZ8bclnXKq3jlZsiATtcp0yoZ6otGhMXulMXIg.JPEG.ccamcong2%2F1598326284666.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjVfMTcx%2FMDAxNjAzNjI1NzgxNDAy.ob3MA6vXbWvFe6AW87Z2SaU11W_GJ2QHokvyIisOBkMg.I9A9qEmrG_IPMhIfQLE6OJLyRljKIfr-bnI_nM0X3tIg.JPEG.snow_young%2Fstore%25A3%25DFcarmera%25A3%25DF20201025%25A3%25DF202658%25A3%25DF981.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjRfMjAx%2FMDAxNjA4Nzk1MzkxNTk3.dM2F58Vlw37_9jAEOk0C9xugafY42qnxrP47KzHScAwg.ZdtF-zdA_DmzWvlI_AY6LRowOUXK6D0vBMTQ4BhoVLYg.JPEG.woon6477%2F20201224%25A3%25DF112644.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTFfNDMg%2FMDAxNjA1MTAzNzkwNjY0.o2nTsl2lSaynOX4Qr_BGQH9Yw82O150RQLC1If7DV-Yg.py6zhrJQ899Tn1Y55KD5eL3u4DU-hwzC-V0lEplMZiMg.JPEG.htlswngks321%2F%25C0%25D6%25B4%25C2%25B1%25D7%25B4%25EB%25B7%25CE%25B3%25CA%25B8%25A6_%25BB%25E7%25B6%25FB%25C7%25D8.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMjRfMTAg%2FMDAxNTc5ODE1NzYxMzk3.wxpFnIercl_j2OWw1c3l0w-ceWdvXZeWM3P5Bsvh1q0g.UjogIVH2Kqa-dX7CIOiSmuNx3OR2zFwgu4ZbZyZ2vz4g.JPEG.sese688%2F1579815760562.jpg&type=sc960_832',
      ],
    },
    {
      name: '피포 페인팅',
      description:
        '캔버스 도면 위 적힌 번호에 맞는 유화물감을 칠해 그림을 완성하는 것으로 퍼즐 페인팅이라고도 불린다. 정해진 위치에 정해진 색을 칠하면 되므로 일반 그림 그리기에 비해 난이도가 쉬운 편이다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%ED%94%BC%ED%8F%AC%ED%8E%98%EC%9D%B8%ED%8C%85&frm=NVSHATC&prevQuery=%EC%BA%98%EB%A6%AC%EA%B7%B8%EB%9D%BC%ED%94%BC',
      image: [
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8276194%2F82761946972.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTVfNjYg%2FMDAxNTM5NTcwNTg1MTAx.eZoQNicz-bebY2CqWHk-WCYCzOd_fODWAAPOA15pvbAg.ZLEacbJmGUzjsv90G73e1cb_Kb09kvOA2wMgl7WuZBkg.JPEG.junhee31%2FScreenshot_20181012-165453_Instagram.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8277284%2F82772841432.1.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMDdfOTYg%2FMDAxNjAyMDY5NDYwNTQ2.zJZmDpdXq05gK64xFni0C5biXgaHh0HDIzKUMqSCM_kg.3IsxoGCZgl-BZ6m9z2ukzFjXzJZ-rbHTBPWtJd0rJBog.JPEG.night930825%2FKakaoTalk_20201007_190206153.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200331_259%2F1585643019177FMOct_JPEG%2F23005352743719398_527067846.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8250653%2F82506532534.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_2504434%2F25044342463.20201130193644.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_2545190%2F25451903672.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTZfNzUg%2FMDAxNjAwMjY2OTgyMTg2.F1sAj_FUnpfZuQm6G9UpJFf6jciP5sAmxZhp0gl1xlsg.Dgk4J46NFgcYNi75e0svWsYouRlulmLaoWi-ObPrPAcg.JPEG.1128hannah%2Foutput_2912684813.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201112_165%2F1605192610528gFDov_JPEG%2FO1CN01OITTt528PhQVOyftX_4289337925-0-lubanu-s.jpg&type=sc960_832',
      ],
    },
    {
      name: '아크릴 무드등 만들기',
      description:
        '무지 아크릴판 위에 철펜이나 페인트 마카를 이용해 원하는 그림을 그린 후 led 등과 연결하여 무드등을 만드는 활동이다. 철펜은 실수가 생겼을 때 지우기 힘들기 때문에 초보자는 철펜보다 페인트 마카 사용하는 것을 추천한다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EC%95%84%ED%81%AC%EB%A6%B4%20%EB%AC%B4%EB%93%9C%EB%93%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0&frm=NVSHATC&prevQuery=%ED%94%BC%ED%8F%AC%ED%8E%98%EC%9D%B8%ED%8C%85',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMThfMjQx%2FMDAxNjA1NzAzNjgwMjQz.sq3KwYXYpsn1Edmmx1iWU937_-wR-4AaTf-AZLd7P6Ug.8phh8g6UaXcXGtNEpSXjnR1ES6ASq4xJkRMTDL9Ydtcg.JPEG.tnwkclsrn%2F%25BC%25D2%25C1%25F6%25BC%25B7_%25BE%25C6%25C5%25A9%25B8%25B1%25B9%25AB%25B5%25E5%25B5%25EE_%25BF%25EC%25BF%25AC%25BC%25F6%25C1%25FD_%252838%2529.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjlfMjQ4%2FMDAxNjA5MjIwNTAxOTE3.QkAKyIfPpBROcaHRvvnQcAljZG2bcU_cvyhxsT-0lIEg.mNhmQcG9wUdtYGFqe8aOaxqTbGeoLr9vpJ82jDe8qgEg.JPEG.danmi37%2FIMG_2430.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8284839%2F82848394108.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MjVfMjQ5%2FMDAxNTkzMDY3Nzk0MzY5.ByDh5FmcO4aHA265BXZvrt3CBEiWzyuwz_SBAnZmNC4g.lL1bvDO8NdmsX-bh7eJ9H_233vT3-TCB2dYnufCisiAg.JPEG.kulturewalk%2F%25C6%25E6%25BC%25C7%25BF%25F6%25C5%25A9%25BC%25A5%25B0%25AD%25C0%25C7_%25282%2529.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTdfMTY1%2FMDAxNjA1NjEwMTMzNjM0.0TCfsVppgIuutRD9pSQ1-MgZYnDUG8KNL39EGmeLGrgg.ozT9Qa11-lOyRIYxOM32Xd3ZQo4igPeR3ElfjwLALbog.JPEG.dlgodrma%2F1605609506102.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTVfMyAg%2FMDAxNjA1NDMzNzU4NDc4.HPNdBgrYpQtTAmRwm_CB9WXs12J3zAnIE_ESyl0ensAg.vs1fnuFOhhipsmtY2MDsHSYD7LKD4tZce_S0w_y6AR8g.JPEG.dlgodrma%2F1605432947461.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjlfMjI2%2FMDAxNjA2NjU1ODcxODM0.AV5BaNx8DHdWa2md4Yf44_wYUy4jyGKq7sZloMwAxvwg.YJeF5-KYP1pSpyVfVocCtqZCa6Wy30wJ_j2QA1QMxbMg.JPEG.51studio%2FP20201107_163018288_1ECE77C5-4353-435A-AA48-38F0866A9F33.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTlfNTYg%2FMDAxNjA1NzYzNTI2Nzcy.NUAaD9lPZ7-zFGljmqdvpD6YoGeSfhWYQYJ24HzDTX4g.gQw-DAhaWgnvBiq6C3XGJmM_4PIo4uwrUD4jP5TDjFQg.JPEG.bestsj2000%2FIMG_6139.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201230_141%2F1609295276780TX4fv_JPEG%2F10431060481006417_2021874766.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201230_102%2F1609295262683Y08Mg_JPEG%2F10431046388185158_115838516.jpg&type=sc960_832',
      ],
    },
    {
      name: '네온사인 만들기',
      description:
        '도안에 맞춰 네온사인을 배치시켜 원하는 형태로 만드는 취미로 결과물을 인테리어에 활용하기 좋다.',
      link:
        'https://search.shopping.naver.com/search/all?query=DIY%20%EB%84%A4%EC%98%A8%EC%82%AC%EC%9D%B8%20&frm=NVSHATC&prevQuery=%EB%84%A4%EC%98%A8%EC%82%AC%EC%9D%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDhfNTUg%2FMDAxNjA0Nzk2MTk1Njkz.jhg6NUDyNlykW6l09oBdq4usDJHoiDW1PGLjY76ox8Ag.cRXkA6W-7qjmGOioDNh5HQt-leHwEHziAY41TbcaeSMg.JPEG.yoonseo65%2FIMG_5709.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMDhfMjUw%2FMDAxNjAyMTUwMjQxMDYz.BA-BlR93sRvj3wMJN519NBja1ROrisrhdIKSUWHbUU8g.5clk_xSK0ntOo01sPLCtreuiL6duSp5r0KyGeAlPxAgg.JPEG.neon2513%2FKakaoTalk_20201008_180537759.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDJfMjEy%2FMDAxNjA2OTA0Mzc0MzU4.VzEK0qoqOOQs0Mr3KzPYcOxQ5qNsU4PehKaJebie6K4g.PhxOYfySErpOY_KFvVvzhn8qX8vAL5aKFcQJWz-3Fx4g.JPEG.51studio%2FIMG_6185.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMzFfMjQ4%2FMDAxNjA5MzkxNDU0MzA0.h8NmRnmY5s3VNAi__Ebs5aD3h2SJmQ0jS8S1Il8bLpog.U4KUNkJIVNZi6CqXMJswavqxXEdirquh3P8w1fOr0fMg.JPEG.axl7908%2FKakaoTalk_20201231_140719656.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTNfNDYg%2FMDAxNjA1MjI5OTcxMTk1.Q7dSN0dJ3kMHASsGb2i_mGhtG-7rlXr8mL5vYZpRiYcg.57jW60kHGvJAZc6g71X7A8Gytwqz6J3Ak6hCO8mrS3sg.JPEG.kulturewalk%2F%253F%2582%25AC%25EC%25A7%253F_2020._11._12._%253F%2598%25A4%253F%259B%2584_4_45_11.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjdfMjc4%2FMDAxNTk4NTAzMDM3MzUz.38Xs6f9DiCLoxOLSbJS0KT369GZWwCZl8PZJsGrAI64g.wS1VUomvmYajh-SgdFGQ-5cn78xrenMftidvG-kVJ1Ig.JPEG.nasoll1%2FIMG_2638.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MDNfMTEg%2FMDAxNTk5MTQwMDY2NDY0.nu7jjz2UAb3GMYIznq1nVmgbsFDNY6X8dfCpotv9dC8g.IgrX4RQKuApdCQKJB7RZXdi6FywNK7icoFuMg3FC2Ckg.JPEG.vldzmgid%2FSAM_1196.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201113_261%2F1605230618113f14fl_JPEG%2F6366445633057843_65473523.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTRfMTQz%2FMDAxNjAyNjAxODg1NzE3.sKMaiBRHVyp9rbOy4NGv5eucgfWzJ2Z-98xCas9ba8Ag.IhN0DLTAOZRiSSl3m7-sNUBP8RL89KcYwA4Sb53QjS8g.JPEG.kkm864%2F1602601885848.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTVfMjkw%2FMDAxNTk0NzM5Njc3Mjgz.8hg-dGK5t6TPafgoogbca41DjVKXuguMRI2A5pszZYcg.wQktGtq9m3fvz8tgDNrakUPnka3QlwGvFYYoLG1puUog.JPEG.jieun7845%2FIMG_9080.JPG&type=sc960_832',
      ],
    },
    {
      name: '석고 방향제 만들기',
      description:
        '석고를 녹여 향을 첨가한 후 몰드에 부어 굳혀 방향제를 만드는 취미로 자신의 취향에 맞게 다양한 모양으로 만들 수 있다.',
      link:
        'https://search.shopping.naver.com/search/all?query=%EC%84%9D%EA%B3%A0%EB%B0%A9%ED%96%A5%EC%A0%9C%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%ED%82%A4%ED%8A%B8&frm=NVSHATC&prevQuery=%EC%84%9D%EA%B3%A0%EB%B0%A9%ED%96%A5%EC%A0%9C%20%EB%A7%8C%EB%93%A4%EA%B8%B0',
      image: [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTFfMzUg%2FMDAxNjA3NjY5MjY4NDMx.sDECeuWNkUp_8fEWvZdJdd9dr3DDBMze28ZbaldSKtog.onQjxWiniXLO9yP9WT7pkZtKZrDkf9Lj9els4upOWC0g.JPEG.red164400%2F1607613624809%25A3%25AD0.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMDRfMTM1%2FMDAxNTgzMzMwMjUwMTcz.TDeAvfvuzo3ZkNHoecapaZk6NB55kVvSU-xZoc-XEhYg.minCM0RUsqSgCGMkwmOoZtIVlryeO0rstQd_jGCFg1Yg.JPEG.2annastory%2F20200228_114449.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDJfMzkg%2FMDAxNjA0Mjk4MTM2NzA3.hC2N_MM9OvmhtvL2MdiSw7c4CMU0rvSLsPiuOZIvncog.9iA32wiBWW6dxCX4OhA5P9Zy3IE7FH5w3VsfSFALJ9Yg.JPEG.syhy0908%2FDSC06891.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjlfMjgx%2FMDAxNTk4Njg2ODAyMzA2.WGb6pk5I7gpMSF5Wb6Qyl8OzHJDBl9XpuwtVlhbwEscg.y6XZJbhGv5mKZ6w3sZNdiAyFJQR9O3wC1OLBb1OIbyog.JPEG.charming2112%2F20190608_131647.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjJfMTQg%2FMDAxNTk4MDgyMzU3MTU4.GQ093OuSyuDZ31IYVr48ZhGdfCeI_D0T1stM6eO0zn4g.fMl-JA_-_G6REX_s5iHj6HZG5HA7DMGvsus4QWPitoEg.JPEG.lovely_craft16%2FIMG_02166.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MDNfMjIg%2FMDAxNTk5MTMzODE2MTI2.DJClcjBlaqb3wV-I3sMhCHecTaVOm6X23Deu78Q61vwg.fp23aJSuxN0X_kg0iFEZJw317IQcpxyCUM9TCzilkXsg.JPEG.shoutsky0517%2F1599133815015.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjRfMjky%2FMDAxNjAzNTQ2MDEzOTY4.5LgTbmUf1CZQ7AaNAXcZdCJACiB_i8GxjSjeBfMyTVsg.hMaO7v4SzO3QRHPAnvDQa73Lsh8dzdgqYTpSggjUO1Yg.JPEG.rgu1124%2F1603546012202.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAzMjdfMjUg%2FMDAxNDkwNjI0MTgzOTY1.PHKVbj4Uqb7OdJujuvfYn7QdkNGz2Nq62pSioftb41Eg.0v8Gy4X1e03PTTBPbw1sgx-hmPlRp0X-1B_b21MpQysg.JPEG.theharum%2F%25B4%25EB%25C0%25FC%25BC%25AE%25B0%25ED%25B9%25E6%25C7%25E2%25C1%25A6.JPG&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDJfMjA1%2FMDAxNjA2ODY3NjE2NTY4.-1ZTrFpNF3O2SLw6HXKJYwPwsK1XVOi5N-fS3HLVnv0g.W6-XWH1TTZwhgOjRmSpwmuXtRUv4-Cts0cYIpzWE7LAg.JPEG.cool7927%2F5.jpg&type=sc960_832',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTZfNTQg%2FMDAxNjA4MTI2NjcwMTA3.OyW_8VB2yTLMuOGZhxL27lpP0LaCfiW8L_SSiximeM8g.ginllumgIllDr8f-FMHmNfx6j6zrLEQMf5YtnjOhr0Qg.JPEG.young_gary%2F71A0AAEF-C95D-4DE1-B5A9-29143E37683F.jpg&type=sc960_832',
      ],
    },
  ]);
  const Drawer = createDrawerNavigator();
  const drawerWidth = Dimensions.get('window').width;
  const [randomNumberArray] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    for (let i = 0; i < hobby.length; i++) {
      randomNumberArray.push(i);
    }
    setRandomNumber(Math.floor(Math.random(randomNumberArray) * hobby.length));
  }, [hobby, randomNumberArray]);

  return (
    <Drawer.Navigator
      drawerStyle={{
        width: drawerWidth - 120,
      }}
      drawerContent={(props) => <DrawerContent {...props} user={user} />}>
      <Drawer.Screen name="HomePage">
        {(props) => (
          <HomePage
            {...props}
            user={user}
            hobby={hobby}
            randomNumber={randomNumber}
            randomNumberArray={randomNumberArray}
            setRandomNumber={setRandomNumber}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="HobbyListPage">
        {(props) => (
          <HobbyListPage {...props} hobby={hobby} randomNumber={randomNumber} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="HobbySharePage">
        {(props) => <HobbySharePage {...props} user={user} />}
      </Drawer.Screen>
      <Drawer.Screen name="WebViewPage" component={WebViewPage} />
      <Drawer.Screen
        name="WebViewOnlyLinkPage"
        component={WebViewOnlyLinkPage}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNav;
