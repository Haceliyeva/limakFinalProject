import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './NewsDetail.module.scss';
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Footer from '../../HomePage/Footer/Footer';
import { FaHeart } from "react-icons/fa";
import ToggleMenu from '../../ToggleMenu/ToggleMenu';



const NewsDetail = () => {

  const navigation = useNavigate()

  const { id } = useParams();

  const newsDetail = {
    1: {
      id: 1,
      title: "Xarici onlayn saytlardan düzgün hədiyyə seçimi",
      content: "Sevdiklərimizi hədiyyələrlə sevindirək. Ətrafımızdakı insanlara sevgimizi və dəyərimizi göstərməyin ən gözəl yollarından biri onlara hədiyyə almaqdır. Hədiyyə vermək qarşıdakı insanı xoşbəxt etmək və münasibətimizi gücləndirmək üçün ideal yoldur. Hədiyyə seçimi insanın qarşı tərəfi nə qədər yaxından tanıdığına, onun maraqlarına və zövqünə uyğun olmalıdır. Birlikdə keçirilən zaman, həmin insanın maraq və hobbiləri, onun üçün ən uyğun hədiyyənin hansı olduğunu göstərən işarələrdəndir.\n\nDüzgün hədiyyə seçməyin yolları\n\nYaxınlarımıza hədiyyə seçərkən nəyi nəzərə almalıyıq? Gəlin, birlikdə nəzər salaq:Hobbi və maraqlar: İnsanların hobbi və maraqlarına uyğun hədiyyələr seçmək. Məsələn, musiqini sevən biri üçün sevdiyi müğənninin konsertinə bilet ala bilərik.Şəxsi yaddaşlar: Özəl anlar və paylaşılan xatirələr ən qiymətli hədiyyələrdən biridir. Birlikdə çəkilmiş şəkillərdən hazırlanmış albom və ya xüsusi bir şəxsi əşyadan hədiyyələr çox unikal və xoş təəssürat bağışlayır. Təcrübələr: Qeyri-standart hədiyyələr də düşünə bilərik. Spa günləri, yemək dəvətləri, idman kursları və s. insanların yeni təcrübələr yaşamasına kömək edir. Bu cür sürprizlər insanların yaddaşında bir ömür qalaraq onları xüsusi hiss etdirir.\n\nMəişət və texnologiya: Hədiyyə alarkən praktik və istifadəsi asan olan əşyaları nəzərdə saxlaya bilərik. Bu, məsələn, məişət cihazları, mobil aksesuarlar və s. ola bilər.\n\nHədiyyə seçimində əsas olaraq hədiyyənin özündəki məna vacibdir. Bir marka seçərkən məhsulun keyfiyyəti, müştəri xidməti və rəylərə əhəmiyyət verilməliyik. Türkiyə saytlarından ideal hədiyyələr\n\nHər kəsə məlumdur ki, online alış-veriş günü-gündən artmaqdadır. Artıq insanların əksəriyyəti ehtiyaclarını mağazalardan deyil, internet vasitəsi ilə asanlıqla əldə edirlər. Çiçek sepeti: Türkiyənin ən məşhur saytlarından biridir. Burada hədiyyə, çiçək, şokolad setləri və hədiyyə alacağımız insanın adına özəl məhsullar sifariş etmək olur. Trendyol: Hər növ məhsulu asanlıqla tapmaq mümkündür. Alıcıların məhsul barədə göndərdikləri şəkil və fikirlər sayəsində sifarişin bizə uyğun olub-olmadığını asanlıqla müəyyən edə bilərik.Hediye sepeti: Hər növ kreativ hədiyyələr var. Bu saytda kimə hədiyyə alacağımızdan tutmuş, (ana, uşaq, həkim, mühəndis və s.) nə alacağımıza qədər bol hədiyyə seçimləri təklif edilir. Muhiku.com: 50-dən çox kateqoriya, 2000-dən çox hədiyyə ilə axtardığımız kreativ məhsulları əldə edə bilərik. Limak.az ilə Amerikadan kreativ hədiyyə sifarişi.Amerikadan məhsul sifariş etmək indi çox asandır. Çünki Limak karqo şirkəti olaraq Amerika sifarişlərinizi güvənli və sürətli şəkildə çatdırırıq. Sizə Amerikadan hədiyyə ala biləcəyiniz ən məşhur markaları topladıq: Shein: Milyonlarla insanın istifadə etdiyi bu saytda hər növ geyim, ayaqqabı, aksesuar, makiyaj vasitələri və s. tapmaq mümkündür.ASOS: 800 brenddən çox bu saytda axtardığımız geyim, ayaqqabı, üz-bədən məhsulları və digər məhsullar ala bilərik.Etsy: Kreativ və standart olmayan hədiyyələrin ünvanı Etsy saytındadır. Burada bir-birindən maraqlı uşaqlar və böyüklər üçün unikal, əl işi hədiyyələr var. Amazon: Amerikanın ən məşhur saytı Amazonda geyim, ayaqqabılardan əlavə, video oyunlar, ev dekorasiyaları və s. uyğun qiymətə əldə etmək olar. Wallmart: Hədiyyə seçimi üçün çox fikirləşməyin. Axtardığımız istənilən məhsulu münasib qiymətə Wallmart-dan tapa bilərik. Əzizlərinizi sevindirmək üçün xüsusi günləri gözləməyin. İstədiyiniz hədiyyələri seçin, Limak.az sürətli sizə çatdırsın! Seçdiyiniz məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edin. Amerika və Türkiyədən gələn bağlamalarınızı filiallardan, kuryerlərimizdən və ya kargomatlardan təhvil ala bilərsiniz. Trendyolsifarişlərinizin də birbaşa ünvana çatdırılmasında güvənli və sürətli Limak sizinlədir. Uzağı yaxın etdik!",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171768033940340.png.jpeg",
      date: "2024-06-06 17:25:39",

    },
    2: {
      id: 2,
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171690338367025.png.jpeg",
      title: "Məşhur markaların gün eynəkləri",
      date: "2024-05-28 17:36:24",
      content: "Niyə gün eynəyi taxmalıyıq? Günəş eynəyi yalnız günəş işığının zərərli təsirlərindən qorunmaq üçün deyil, həm də insanın üslubunu əks etdirən əvəzolunmaz bir parçadır. Günəşin yaydığı ultrabənövşəyi şüalar göz sağlamlığına təhlükəlidir. Bu təhlükədən qorunmaq üçün gün eynəyindən mütləq istifadə etməliyik. Aksesuar olaraq da istifadə edilən gün eynəkləri arasından tərzimizə uyğun modeli seçərək həm riskləri azalda, həm də stilimizi qoruyub saxlaya bilərik. Original günəş eynəklərini necə müəyyən edə bilərik?  İlk növbədə eynək alarkən tanınmış brendlərin satış mağazalarına müraciət etməliyik. Gucci, Calvin&Klein, Armani, Ray-Ban, Prada, Miu Miu, Burberry, Versace kimi markalar original və ən çox tələb olunan markalardır. CE işarəsi onun Avropa İttifaqı standartlarına uyğun istehsal edildiyi barədə məlumat verir. Original gün eynəklərində bu işarənin olduğundan əmin ola bilərik. Günəş eynəyi seçərkən UV təbəqəsi və polarizasiya sistemli şüşə xüsusiyyətli eynəkləri nəzərə almalıyıq. Çünki onlar gözlərimizi günəşin zərərli şüalarından qoruyur. Orijinal eynəklər şaquli obyektləri qırılmalara səbəb olmadan görməyə imkan verir. Eynəyin orijinal olub-olmadığını yoxlamaq üçün şaquli naxışa baxa bilərik. Üstəlik, keyfiyyətli eynəklər üzə mükəmməl uyğunlaşır. Ən yaxşı günəş eynəyi markalarının üzərində marka loqosu var. Çox kiçik bir loqo olsa belə, onu işığa tutduğunuz anda görə bilərik. 2024-cü ilin trend eynəkləri hansılardır? Trendə uyğun gün eynəkləri arasında üz formamıza uyğun olanları seçməliyik. Bu, həm stilimizi tamamlayacaq, həm də üz cizgilərimizi balanslaşdıracaq. Sizin üçün fərqli üz formalarına uyğun trenddə olan günəş eynəyi modellərini aşağıda sıralamışıq: Kvadrat və ya Düzbucaqlı Çərçivələr: Bucaq çərçivələr üzümüzün dəyirmi strukturunu tarazlaşdırmaq üçün çox yaxşı seçim ola bilər.Böyük və ya Görkəmli Çərçivələr: Üzümüzün daha incə və uzun görünməsi üçün böyük çərçivələr mütləqdir. Eni və Hündürlük balansı: Dəyirmi və ya oval çərçivələr üzümüzün kəskin xəttlərini yumşaltmaq üçün çox yaxşı seçimdir. Çərçivə Kənarındakı Detallar: Çərçivə kənarında yuvarlaqlaşdırılmış və ya oval detalları olan modellər üz cizgilərimiz üçün daha uyğundur. Xaricdən eynək sifarişi | Ən son texnologiyalar və Limak.az ilə sürətli daşınma xidməti Xəyallarınızdakı eynəkləri tapmaq artıq çox asandır! Eynək seçiminizi daha asan və əyləncəli etmək üçün ən son texnologiyalar və yenilikləri bu məqalədə oxuya bilərsiniz. Virtual sınaqdan reallığa qədər hər şey barədə məlumat toplaya və Limak.az ilə eynəklərinizi sürətli və etibarlı şəkildə əldə edə bilərsiniz. Artıq mağazalara getmədən, eynəkləri üzərinizdə necə göründüyünü yoxlaya bilərsiniz. Warby Parker və Zenni Optical kimi onlayn mağazalarda bu texnologiya mövcuddur. İstədiyimiz eynəyi seçib, üzümüzdə necə göründüyünü vizual olaraq test edə bilərik.  Amazon və eynəklər üzrə ixtisaslaşmış saytlar 3D modelləşdirmə texnologiyasından istifadə edərək, eynəklərin fərqli baxış bucaqlarından necə göründüyünü göstərir. Artırılmış reallıq (AR) texnologiyası ilə eynəkləri real vaxtda üzümüzdə sınaqdan keçirə bilərik. Bu texnologiya, xüsusilə tətbiqlər vasitəsilə mobil cihazlarda istifadə edilir. Keyfiyyətli və rahat eynəkləri necə seçmək olar? 1. Keyfiyyət və Marka: Tanınmış brendlərdən eynək seçmək, həm üslub, həm də göz sağlamlığı baxımından vacibdir. Gucci, Calvin&Klein, Armani, Ray-Ban və Prada kimi markalar yüksək keyfiyyəti ilə seçilir.2. Linzaların Xüsusiyyətləri: Mavi işıq filtrli və polarizə linzalar, gözlərinizin rahatlığını və təhlükəsizliyini təmin edir. 3. Rahatlıq və Uyğunluq: Eynəyin üz quruluşunuza uyğun olması vacibdir. Bu, uzun müddət istifadədə rahatlıq təmin edir. Limak.az ilə eynək sifarişi: tez, etibarlı və asan! Limak.az, xaricdən eynək sifarişlərinizi Azərbaycana təhlükəsiz və tez bir şəkildə çatdırır. Bizim xidmətlərimiz:- Tez və Etibarlı Çatdırılma: Eynəklərinizin tez bir zamanda və zərər görmədən çatdırılması təmin edilir.- Geniş Əhatə Dairəsi: ABŞ və Türkiyədən istənilən məhsulu sifariş edə bilərsiniz.- Müştəri Dəstəyi: *9595 çağrı mərkəzi və sosial media platformalarında peşəkar müştəri xidmətləri ilə yüksək məmnuniyyət təmin edirik. Seçdiyiniz məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edin. Amerika və Türkiyədən gələn bağlamalarınızı filiallardan, kuryerlərimizdən və ya kargomatlardan təhvil ala bilərsiniz. Trendyolsifarişlərinizin də birbaşa ünvana çatdırılmasında güvənli və sürətli Limak sizinlədir. Uzağı yaxın etdik! "
    },
    3: {
      id: 3,
      title: "Trend eynəklər onlayn sifarişlə əlinizin altında",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169504100263443.png.jpeg",
      date: "2023-10-25 11:28:27",
      content: "Geyimdən elektron cihazlara, kitabdan qida məhsullarına qədər hər növ məhsulu almaq üçün onlayn alış-verişdən istifadə edə bilərsiniz. Onlayn alış-veriş istədiyiniz məhsullara əlçatanlığı təmin etsə də, təhlükəsizlik vacibdir. Buna görə alış-veriş etməzdən əvvəl diqqətlə araşdırmaq və etibarlı mənbələrdən satın almaq və çatdırılma üçün düzgün vasitəçi seçmək vacibdir. Limak.az  Azərbaycan qanunvericiliyi ilə qadağan olunmamış hər növ yükün xarici ölkələrdən Azərbaycana və ölkə daxilində qapıya çatdırılması ilə məşğul olur. Şirkət müştərilərinə anbar, havayolu karqo, ünvanda təhvil vermə, kütləvi göndərişlərin çatdırılması və qida maddələrinin daşınması xidmətlərini təklif edir. Eyni zamanda kosmetik məhsulları, baxım vasitələrini geyimlər  və aksessuarlar sifariş edə bilərsiniz. Bəzən sözü gedən məhsullar və müəyyən çeşiddə olan aksessuarlar fəsil dəyişkənliyi ilə əlaqədar aktuallıq qazanır, məsələn, günəş eynəkləri yay fəslinin ən trend aksessuarlarından biri hesab oluna bilər. Günəş eynəkləri niyə vacibdir. Günümüzdə həm moda aksessuarı kimi, həm də sağlamlıq məqsədi ilə istifadə olunan günəş eynəkləri eyni zamanda gözlərinizi ultrabənövşəyi şüaların təsirinə qarşı qoruyan ən ideal vasitədir. Günəşdən gələn zərərli şüalardan gözləri qorumaq sağlamlığımız üçün çox əhəmiyyətlidir. Bu eynəklər adətən şüşə, plastik və ya metal materiallardan müxtəlif rənglərdə və fərqli dizaynlarda hazırlanır. Günəş eynəklərinin ən əsas funksiyası gözlərinizi  ultrabənövşəyi şüaların təsirindən qorumaqdır. Uzun müddət birbaşa olaraq bu şüaların təsirinə məruz qalmaq həm cildinizə, həm də gözlərinizə ciddi zərər verə və qatarakt, makula zədələnməsi kimi göz problemlərinə səbəb ola bilər. Bunlardan əlavə səyahət və ya idman təlimlərində, güclü günəş işığı altında olarkən, bu şüalar ətrafı görməyinizə mane olur. Günəş eynəkləri bu problemləri də həll edərək ətrafı daha rahat görməyə imkan yaradır. İnsanlar öz üslublarını tamamlamaq üçün eynəklərdən moda aksessuarı kimi istifadə edir. Müxtəlif  çeşidləri, rəngləri və dizaynları ilə günəş eynəkləri fərqli zövqlərə sahib insanların əvəzolunmaz seçiminə çevirilib. Günəş eynəkləri alarkən hansı məqamlara diqqət etməliyik?Günəş eynəkləri seçərkən bir neçə məqama diqqət etməkdə fayda var. İlk olaraq, göz sağlamlığınızı və rahatlığınızı nəzərə almalısınız. Bunun üçün  linzaların materialı, rəngi, eyni zamanda eynəyin ölçüsü və rahatlığı ön planda olmalıdır. Eynəklərin qiymətləri isə növü və brendinə görə dəyişir. Əlbəttə ki, uzunmüddətli göz sağlamlığınızı təmin etmək üçün yüksək keyfiyyətli eynəklərə üstünlük vermək daha doğru olardı.Şüalardan ən yaxşı mühafizə edən, yüksək keyfiyyətli günəş eynəkləri almağın ən yaxşı yolu tanınmış və güvənli brendlərə müraciət etməkdir. Məsələn, İtalyan moda brendi  Dolce&Gabbana eynəkləri ilə fərqli çeşidlər və rənglər arasından şəxsi üslubunuza uyğun ən yaxşı seçimləri edə bilərsiniz.Dünyaca məşhur idman brendi Nike bütün tələblərə cavab verən hər çeşiddə eynəklər təklif edir. Bu eynəklər gündəlik həyatda və idmanda istifadə etmək üçün idealdır.Zara  şuxluq və rahatlığı birləşdirərək ən son moda trendlərinə uyğun olan eynəklər təklif edir. Zara eynəklərində geniş rəng və dizayn seçimi mövcuddur. Siz istər klassik, istərsə də modern üsluba uyğun dizaynı seçə və istənilən üslubda tərz yarada bilərsiniz.Stradivarius  gənc ruhlu insanlar üçün yaradıcı dizaynlarla müxtəlif məhsullar təklif edən bir brenddir. Stradivarius eynəklərində rəngləri və fərqli detalları tamamlayıcı bir şəkildə birləşdirilmişdir, bu da onları daha cazibədar və gözəl edir.Bershka  modanı addım-addım izləyən gənc və enerjili auditoriyanın ehtiyaclarını qarşılamağı hədəfləyir və geyim, ayaqqabı, aksessuar və kosmetika kimi müxtəlif moda məhsulları təklif edir. Siz də eynəklərinizi bu brenddən seçərək keyfiyyət və tərzi birləşdirə bilərsiniz.  Limak.az-la günəş eynəklərini necə sifariş edək? Bəzən vaxt məhdudiyyəti və digər səbəblərdən mağazalara baş çəkmək və uyğun məhsulları əldə etməkdə problemlər yaranır. Bu kimi problemlərinizi həll etmək və ehtiyacınız olan bütün məhsulları sizin üçün əlçatan etmək məqsədilə Limak.az olaraq sizə “Sifariş et” xidmətini təklif edirik.  Bu xidmətdən istifadə edən hər kəs üçün xarici elektron ticarət platformalarından rahat və tam təminatlı alış-veriş edilir, bağlamaların Azərbaycanda seçilmiş anbara, Kargomat ağıllı poçt terminalına çatdırılması və ya ölkədaxili kuryer xidməti vasitəsilə ünvanda təslim edilməsi təmin edilir. Eyni zamanda  Limak.az   saytı vasitəsilə rəsmiləşdirilən bütün sifarişlərdə təhlükəsizlik qaydalarına tam əməl edilməsi, məlumatların qorunmasına təminat verilir. Peşəkar  müştəri xidmətlərimiz *9595 çağrı mərkəzi və bütün sosial platformalardakı onlayn xidmətləri ilə yüksək müştəri məmnuniyyətini təmin edir. Uzağı yaxın etdik!"
    },
    4: {
      id: 4,
      title: "Kargomat xidmətindən istifadə ödənişli olacaq",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169277271683791.png.jpeg",
      date: "2023-10-25 10:38:36",
      content: "Hörmətli müştərilər, avqust ayının 24-dən  etibarən kargomat xidmətindən istifadə ödənişi 1 azn təşkil edəcək. Kargomat ağıllı poçt terminalları ilə bağlamalarınızı 7/24, növbə gözləmədən, anbarların və kuryerlərin iş qrafikindən asılı olmadan təhvil ala bilərsiniz.  Limak kargomatlarının sayı gün-gündən artır və təhvilalma işinizi asanlaşdırır. Bağlamalarınızı rahatlıqla, vaxt itirmədən əldə etməyinizə xidmət edirik. «Kargomat»-ın iş prinsipi çox sadədir: sizə ən yaxın KARGOMAT-ı seçirsiniz, bağlamanız çatdırıldıqda sizə SMS göndərilir. SMS-də siz karqomat üçün unikal kodu əldə edirsiniz, KARGOMAT-a yaxınlaşıb ekranda kodu daxil edirsiniz və açılan qutudan bağlamanızı götürürsünüz! Uzağı yaxın etdik!"
    },
    5: {
      id: 5,
      title: "Qurban bayramında qeyri-iş günləri",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171827962798462.png.jpeg",
      date: "2024-06-13 15:53:47",
      content: "Qurban bayramında qeyri-iş günləri. Hörmətli müştərilər, Qurban bayramı ilə əlaqədar olaraq, 17 və 18 iyun tarixlərində Limak ofislərində qeyri-iş günləridir. Bağlamalarınızı 19 iyun-dan etibarən filiallarımıza yaxınlaşaraq, rahat təhvil ala bilərsiniz. Limak komandası güvənli alış-veriş və sürətli çatdırılma ilə xidmətinizdədir. Uzağı yaxın etdik!"
    },
    6: {
      id: 6,
      title: "Ramazan bayramında qeyri-iş günləri",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-171256877480420.png.jpeg",
      date: "2024-04-08 13:32:56",
      content: "Ramazan bayramında qeyri-iş günləri. Əziz və hörmətli müştərilər, Ramazan bayramı ilə əlaqədar olaraq,10 və 11 aprel tarixində Limak ofislərində qeyri-iş günləri olacaq. Sifariş et xidmətimiz isə fəaliyyətini fasiləsiz davam etdirəcək.Türkiyədən bayrama qədər olan son göndərişimiz 09 aprel tarixində, bayramdan sonra ilk göndərişimiz isə 13 aprel tarixində həyata keçiriləcək. Limak komandası rahat alış-veriş və sürətli çatdırılma ilə xidmətinizdədir. "
    },
    7: {
      id: 7,
      title: "Biznes qadınları üçün zövqlü geyimlər Amerika və Türkiyədən",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170869741148645.png.jpeg",
      date: "2024-02-23 18:10:11",
      content: "Biznes qadınları üçün zövqlü geyimlər Amerika və Türkiyədən. Geyim – bir qadının, bəzən də bütün kitabın ön sözüdür. © Sebastian-Roche Nicolas de Chamfort. Geyim insan haqqında fikir formalaşdıran ən vacib amillərdən biridir. Belə bir deyim də var; insanı geyiminə görə qarşılayıb, ağlına görə yola salarlar. Hər kəsin özünəxas stili olmasına baxmayaraq, zövqlü geyinmək tamam ayrıca bir mövzudur. Çünki dəb dəyişə bilər, stil isə aktuallığını saxlayır. Coco Chanel-in də dediyi kimi; “qadının əynində hansı paltar olduğunu xatırlaya bilmirsənsə, o zaman mükəmməl geyinmişdi.”Xarici saytlardan online shopping. Xoşbəxtlikdən, rəqəmsal əsr geyim üçün alış-veriş etməyi həmişəkindən daha asanlaşdırdı. İnsanlar artıq istənilən yerdən, bəyəndikləri məhsulları sifariş edə bilirlər. Onlayn satıcılar və seçilmiş moda veb-saytları saysız-hesabsız seçimlər təklif edir ki, bu da məşğul insanlara bir neçə kliklə qarderoblarını rahat şəkildə yeniləməyə imkan verir. Bunun müsbət tərəflərinin çox olmasına baxmayaraq, mənfi tərəfləri də var. Məsələn, sifariş edilən məhsulun səhv gəlməsi, ölçüsünün uyğun olmaması və ya məhsulun zədəli olması və s. kimi məsələlər müştərilərdə ruh düşkünlüyü yarada bilir. Bir çox karqo şirkətlərində sifariş Azərbaycana çatdıqda, təəssüf ki, onun iadəsi olmur. Lakin bu, Limak.az-da problem deyil. Xaricdən sifariş olunan bağlamaları necə iadə etmək (geri qaytarmaq) olar? Sifarişiniz firma tərəfindən yanlış göndərilibsə, dərhal müştəri xidmətlərimizə məlumat verməyiniz xahiş olunur. Satıcı tərəfindən yanlış və ya qüsurlu göndərilən məhsulların Limak şirkəti vasitəsilə iadə edilməsi mümkündür. İadə edilmə xidməti yalnız Türkiyədən olan sifarişlərə aid edilir. Amerikadan sifarişlərin iadə edilməsi isə yalnız məhsul Limakın Amerika anbarında olarkən müştəri istəyinə uyğun həyata keçirilir. İş qadınlarının seçimi - “business lady style” İlk təəssüratların vacib olduğu və inamın əsas olduğu sürətli iş dünyasında iş qadınının geyimi çox şeydən xəbər verir. İdarə heyəti iclaslarından tutmuş şəbəkə tədbirlərinə qədər, zövqlü və peşəkar geyim uğurun tonunu təyin edir. Buna görə də zövqlü və keyfiyyətli iş geyimlərini asanlıqla tapıb sifariş edə bilməyiniz üçün Limak.az sizə bəzi brend saytlar təklif edir. İstər Türkiyə, istərsə də  Amerikadan gözəlliyinizə gözəllik qatacaq markalardan sifarişlərinizi sürətli və güvənli əldə edə bilərsiniz.Sizin üçün favorilədiyimiz Türkiyə və Amerika brendləri  ADL: Keçmişdən bu günə özünə güvənən, müstəqil qadınların seçimi olmağı hədəfləyən və moda ilə klassikanın ön planda olması istiqamətində önəmli addımlar ataraq sənayedə fərqli yer qazanıb. Bu gün adL Şimali Kipr, Səudiyyə Ərəbistanı, Dubay, İordaniya, Azərbaycan, və Gürcüstanda dəbi şərh edən brenddir. İPEKYOL:İllərdir geyim sənayesində bir çox uğurlu qadınların ilk seçimi olmağı bacarmış və günümüzün ən prestijli hazır geyim markaları arasında yerini almışdır. Uğurlu dizaynerlər Zeynep Tosun, Hakan Yıldırım, Özgür Masur və Yasemin Özilhan ilə birlikdə hazırladığı kolleksiyalar sayəsində hər mövsüm modaya rəhbərlik edib. NOCTURNE: Adını Frederik Şopenin kompozisiyasından götürən Nocturne 2012-ci ildən orijinal dizaynları, keyfiyyətli parçalar və zərif naxışları ilə şəhər qadınlarının qarderobunda özünə yer tapır. Kolleksiyalarında sadəlövh cizgiləri dəbli detallarla birləşdirərək, ahəngdar stil yaradan Nocturne, moda ilə yanaşı iş və sənət dünyasının da diqqətini çəkməyə davam edir. NETWORK: Hər dizaynı ilə özünüzü xüsusi hiss etdirən və məhdud sayda istehsal edilən NetWork Limited seriyası üsluba fərqli dəyər qatır. NetWork Türkiyədə zamansız moda anlayışı ilə orijinallığı və keyfiyyəti geyimlərində əksetdirən bir markadır.Amerika brendləri: (Amerikadan rahat karqo) GIZIA:Gizia güclü, heyrətamiz, mükəmməl qadınlara xas dizayn yanaşması və yüksək moda baxışı ilə əbədi zəriflik təqdim edən kolleksiyaları canlandırır. CLUB MONACO: Club Monaco özünə güvənən, şık xanımların seçimi və dünyada 140-dan çox ölkədə filialı olan lüks Kanada brendidir. MASSİMO DUTTİ: İspaniya markası olan Massimo Dutti yüksək keyfiyyətli geyim sektorunda fəaliyyət göstərir və moda sahəsində lüks parçalardan hazırlanan geyimləri ilə seçilir. BANANA REPUBLİC:Zövqlü, eleqant xanımların seçimi olan Banana Republic, Gap-a məxsus lüks Amerika brendidir. Keyfiyyətli parçaları və gözoxşayan modelləri ilə yarandığı gündən, moda dünyasında öz yerini tutmağı bacarıb. Seçdiyiniz məhsulların linkini göndərin, sifarişlərinizi SifarişEt xidmətimiz həll etsin. Amerika və Türkiyədən gələn bağlamalarınızı filiallardan, kuryerlərimizdənvə ya sizə ən yaxın kargomatlardan təhvil ala bilərsiniz. Trendyol sifarişlərinizində birbaşa ünvana çatdırılmasında güvənli və sürətli Limak sizinlədir.Uzağı yaxın etdik!"
    },
    8: {
      id: 8,
      title: "Yeni il bayramınız mübarək!",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383622116394.png.jpeg",
      date: "2024-12-29 11:50:21",
      content: "Limak.az ailəsi olaraq xalqımızı 31 dekabr Dünya azərbaycanlılarının həmrəylik günü və qarşıdan gələn Yeni il bayramı münasibətilə təbrik edirik! Bayram günlərində də onlayn alış-veriş edərək endirim fürsətlərini dəyərləndirin. Amerika və Türkiyədən sifarişləriniz Limak.az vasitəsilə sizə ən qısa zamanda sürətlə çatdırılacaq. Trendyol sifarişlərinizin Azərbaycana birbaşa çatdırılmasını da həyata keçiririk. Bağlamalarınızı filiallardan, sizə ən yaxın kargomtlardan və kuryerlərimiz vasitəsilə təhvil ala bilərsiniz. Uzağı yaxın etdik!"
    },
    9: {
      id: 9,
      title: "Limak anbarlarında qeyri-iş günü olacaq",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383551669065.png.jpeg",
      date: "2023-12-29 11:34:46",
      content: "Hörmətli müştərilər, nəzərinizə çatdırırıq ki, 31 dekabr Dünya Azərbaycanlılarının Həmrəylik günü və Yeni İl bayramı ilə əlaqədar olaraq 31 dekabr - 2 yanvar tarixlərində Limak anbarlarında qeyri-iş günləridir. 2 yanvar tarixindən etibarən “Sifariş et” xidmətimiz standart iş qrafikində fəaliyyətini davam etdirəcək. Türkiyədən sifarişlərin bu il üçün ən son göndərişi 29 dekabra nəzərdə tutulur. Amerikadan göndərişlər standart qaydada davam etdiriləcək. Uzağı yaxın etdik!"
     },
  10: {
      id: 10,
      title: "Axtardığınız kitablar Amerikadan birbaşa qapınıza gəlsin",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170350665917947.png.jpeg",
      date: "2023-12-25 16:05:33",
     content: "Onlayn alış-veriş dünyanın fərqli ölkəsindən daşınması mümkün olan məhsulları əlçatan edir. Burada satışı olmayan, yaxud axtardığınız hər hansı məhsulu müxtəlif mağazalardan daha münasib qiymətə tapmaq imkanı verir. Yenilənən, dəyişilən fikir dünyasına qapı açmaq, kitab kəşfinə çıxmaq istəyirsinizsə, Amerikadan sifariş edə biləcəyiniz kitab alış-veriş saytlarında sizi geniş seçimlər gözləyir. Burada siz asanlıqla axtardığınız kitabları əldə edə bilərsiniz. Üstəlik, bunun üçün çox vaxt sərf etməyinizə də ehtiyac yoxdur. Bildiyiniz kimi, şirkətimiz müştərilərinə anbar, karqo, ünvanda təhvil vermə, kütləvi göndərişlərin çatdırılması və qida maddələrinin daşınması xidmətlərini təklif edir. Xidmətlərimiz sayəsində siz bir-birindən fərqli kosmetik məhsulları, baxım vasitələrini, geyimləri, aksessuarları və s. sifariş edə bilərsiniz. Limak.az karqo şirkəti Amerikadan müxtəlif saytlardan kitabların sifarişini və çatdırılmasını da həyata keçirməkdədir. Bu, xüsusilə də kitab həvəskarları və kolleksionerləri üçün olduqca sevindirici bir haldır. Burada siz çətin tapılan, ölkəmizdə satışı olmayan və büdcənizə uyğun seçimləri əldə edə bilərsiniz. Amerikadan hansı saytlardan sifariş etmək olar? Amerikadan kitab sifariş edə biləcəyiniz bir çox kitab saytları var. Geniş kütlələrə xitab edən, çeşid çoxluğu ilə fərqlənən, müxtəlif kateqoriyalardan kitabların cəmləşdiyi ən məşhur kitab saytlarından bəzilərini bu bloqda sizlərə təqdim edirik: Amazon. “Amazon” çap və elektron formatda kitab seçimləri olan ən böyük onlayn pərakəndə satıcılarından biridir. Siz həmçinin “Amazon Marketplace”də istifadə edilmiş və ya nadir tapılan kitabları əldə edə bilərsiniz. Barnes & Noble. Bu yeni kitablar, audiokitablar, elektron kitablar və müxtəlif kitab aksesuarları təklif edən böyük kitab mağazası şəbəkəsi və vebsaytıdır. Books-A-Million Sayt kitablar, oyuncaqlar və kitab aksesuarlarının geniş seçimini təklif edir. Burada dünyanın hər bir yerindən sifarişlər qəbul olunur. Book Depository “Amazon”a məxsus olan bu sayt beynəlxalq kitab daşınması üzrə ixtisaslaşmışdır və müxtəlif dillərdə kitabların geniş seçimini təklif edir. Powell's Books “Powell's” Oreqon ştatının Portlend şəhərində böyük, müstəqil kitablar şəbəkəsidir. Bu mağazanın vebsaytı hər kəsə yeni və istifadə olunmuş kitabları təklif edir. Alibris Sayt yeni və işlənmiş kitablar, audiokitablar və kolleksiyalar üçün onlayn bazardır. ThriftBooks. Bu sayt işlənmiş kitablar üzrə ixtisaslaşıb və aşağı qiymətlərlə geniş kitab seçimi təklif edir. Better World Books. Bir-birindən maraqlı və nadir tapılan kitabları məhz bu saytdan sifariş edə bilərsiniz. Saytın əsas xüsusiyyəti isə yeni və işlənmiş kitabların satışını həyata keçirərək, qazancın bir hissəsini xeyriyyəçiliyə ayırmasıdır. BookFinder. Bu sayt qiymətləri müqayisə etməyə və nadir kitabları tapmağa imkan yaradan, kitablar üçün meta-axtarış sistemidir.Bu saytlar kitab sifariş etmək üçün müxtəlif seçimlər təqdim edir və adətən həm yeni, həm də istifadə olunmuş kitabların geniş seçiminə malikdir. Ehtiyaclarınıza, seçimlərinizə və büdcənizə daha uyğun olan saytı seçə bilərsiniz. Limak.az-la kitab sifarişini necə gerçəkləşdirmək olar?Əgər yerli mağazalarda istədiyiniz kitabı tapa bilmirsiniz, qiymətlə bağlı problem yaşayırsınız və ya axtarış üçün kifayət qədər vaxtınız yoxdursa, onlayn sifariş sizin köməkçiniz olacaq. Limak.az olaraq əsas məqsədimiz bütün məhsulları sizə əlçatan etməkdir. Sifariş etmək isə olduqca asandır. Bunun üçün mövcud profilinizə Amerikada yerləşən anbarımızın ünvanını yazmağınız və ya “Sifariş et” xidmətimizdən istifadə etməyiniz kifayətdir. Bağlamaların Azərbaycanda seçilmiş anbara, Kargomat ağıllı poçt terminalına çatdırılması və ya ölkədaxili kuryer xidməti vasitəsilə ünvanda təslim edilməsi təmin edilir. Qeyd edək ki, Limak.az saytı vasitəsilə rəsmiləşdirilən bütün sifarişlərdə təhlükəsizlik qaydalarına tam əməl edilməsinə, məlumatların qorunmasına təminat verilir. Uzağı yaxın etdik!"
    },
 11:  {
      id: 11,
      title: "Yeni ünvanlarda xidmətinizdəyik!",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170229001039888.png.jpeg",
      date: "2023-12-11 12:19:45",
        content: "Hörmətli müştərilər, Limak.az anbarları müştəri məmnuniyyətinin artırılması məqsədi ilə Azərbaycanın digər bölgələrində də fəaliyyətini genişləndirir. Artıq Gəncə və Balakən şəhərlərində olan Limak.az anbarları yeni ünvanda fəaliyyət göstərəcək. Belə ki, yeni ünvanlarımız: Gəncə şəhəri: Nəriman Nərimanov, 1 və 3 saylı binaların arası, “Köhnə Yevlax Avtovağzalı”nın yaxınlığı Balakən şəhəri: H. Əliyev prospekti 20 a, Loqedex dayanacağı, Yusif Aptekin yaxınlığı. Eyni zamanda Trendyol sifarişlərinizdə də “Gəl al nöqtəsi” olaraq “Limak”ı seçə bilərsiniz. Siz də ehtiyacınız olan hər şeyi sifariş edərək ən qısa zamanda LİMAK-dan təhvil alın və ya məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edin. Amerika və Türkiyədən olan bağlamalarınız sürətlə və güvənlə sizə çatdırılacaq. Bağlamalarınızı filiallardan, kuryerlərimizdən və ya kargomatlardan təhvil ala bilərsiniz. Uzağı yaxın etdik!"
     }, 
 12: {
      id: 12,
      title: "Yeni il atmosferini necə yaratmaq olar?",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170229681812672.png.jpeg",
      date: "2023-12-11 15:58:26",
        content: "Yeni il üçün geri sayım artıq başladı. Bu isə o deməkdir ki, əsl bayram ab-havasına bürünməyin vaxtıdır. İstər geyim və aksesuarlarda, istərsə də ev dekorasiyası və eksteryerdə Yeni il ansamblınız sadəcə heyranedici olmalıdır. Bu bloq yazısında sizi Yeni il geyimləri, dekor və aksessuar dünyasına səyahətə çıxararaq, bayramınızı unudulmaz edəcək tendensiyaları üzə çıxaracağıq. Geyimlər. Yeni il ərəfəsində bir çox məşhur brendlər bayrama uyğun kolleksiyalar çıxararaq, sizlərə təqdim edirlər. Bu kateqoriyaya köynək, corab, əlcək, papaq, pijamalar və hətta alt geyimlərini misal göstərmək olar. Yeni başlanğıcın sevincini və intizarını əks etdirən bu geyimlər əsl bayram simvoluna çevriləcəklər. Bəzək əşyaları. Bayram obrazınızı göz oxşayan bəzək əşyaları ilə tamamlayın. Yeni ili təmsil edən parlaq rəngli və teksturalı sırğa, boyunbağı, qolbaq və ya saç aksessuarı mükəmməl, son toxunuş ola bilər. İndividual üslubunuzu əks etdirən parçalar seçin və ansamblınıza dram əlavə edin. Dekorasiya və fərqli aksesuarlar. Əlbəttə ki, Yeni ilin ən böyük simvolu gözəl və rəngarəng oyuncaqlarla bəzədilmiş şam ağacıdır. Lakin bununla yanaşı, digər interyer elementlərini və dekorasiyalarını unutmaq olmaz. Məsələn, möhtəşəm bayram süfrəsi üçün cəlbedici elementlərlə maraqlı kompazisiya hazırlanması kimi. Masaya metal və parlaq materiallardan hazırlanmış dekor elementləri, şamlar və salfet üzükləri əlavə etmək olar. İnteryer üçün həmçinin, naxışlı corabları və parlaq simli işıqları da xüsusilə qeyd etmək lazımdır. Bu aksesuarları yaşayış yeriniz boyunca yerləşdirin və ya müəyyən sahələri vurğulamaq üçün istifadə edin. Əminik ki, bu tövsiyələrə uyaraq evinizdə möhtəşəm bayram ab-havası yarada biləcəksiniz. Kosmetik məhsullar. Dünyanın müxtəlif kosmetika brendləri də bu möhtəşəm bayrama uyğun kolleksiyalar yaradırlar. Həmin brendlər bayram ab-havasından ilhamlanaraq ətirlər, bədən spreyləri, dodaq boyaları və digər kosmetik məhsullar istehsal edirlər. Bu məhsullar adətən bayram ərəfəsində satışa çıxarılır və ilin digər vaxtı satışda olmur. Ona görə öz sevimli məhsullarınızı vaxtında əldə etməyinizi tövsiyə edirik. Hədiyyələr və ən vacib ünsürlərdən biri olan hədiyyələr. Bu bayramda hər kəs bir- birinə maraqlı hədiyyələr edərək sevindirir. Ən gözəli isə geniş hədiyyə seçiminin olmasıdır. Bu, kitab, cəlbedici Yeni il köynəyi, dekorasiyası və ya qapı çələngi ola bilər. Bir sözlə, hər zövqə uyğun seçimlər edə bilərsiniz. Yaxınlarınızı sevindirmək üçün hərəkətə keçməyin əsl vaxtıdır.Yeni il şənliyini yaddaqalan etmək üçün hər detal vacibdir. Seçdiyiniz geyimdən tutmuş məkanınızı bəzəyən dekorasiya və görünüşünüzü tamamlayan aksesuarlara qədər hər bir element yeni başlanğıcın sevincinə və həyəcanına töhfə verir. Bütün bu məhsulları Shein, Amazon və Trendyol kimi saytlarından bizim vasitəmizlə sifariş edə bilərsiniz. Biz isə öz növbəmizdə sifarişlərinizi tez və etibarlı şəkildə sizə çatdıracağıq. Yeni ilə əsl bayram ruhuna bürünərək addımlayın!"
     },
 13: {
      id: 13,
      title: "“Trendyol”dan birbaşa Azərbaycana necə sifariş etmək olar?",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170186316192085.png.jpeg",
      date: "2023-12-06 15:18:21",
        content: "Son bir neçə ildə internetin və digər texnologiyaların inkişafı ilə əlaqədar olaraq onlayn alış-veriş də bir çox başqa sahələr kimi tərəqqi edir. İnsanlar internet saytları və mobil tətbiqlər vasitəsilə dünyanın istənilən yerində olan məhsulları və xidmətləri almaq üçün onlayn alış-veriş etməyə başlayıblar. Onlayn alış-veriş platformaları müxtəlif məhsulların geniş və çeşidli seçimini təqdim edir. İnsanlar müxtəlif ölkələrdəki mağazaların məhsullarını müqayisə edə bilirlər və ən yaxşı qiymət və keyfiyyəti seçirlər. Son zamanlarda bir neçə alış – veriş saytı xüsusi ilə məşhurluq qazanıb. Hətta bu saytlardan bəzilərində Azərbaycana birbaşa çatdırılma da mümkündür. Məsələn, “Trendyol” Azərbaycana birbaşa çatdırılma xidmətini həyata keçirir.Noyabr ayından etibarən isə artıq“Limak.az” və “Trendyol” onlayn satış platforması rəsmi əməkdaşlığa başladı. Belə ki, artıq “Limak.az” məntəqələri “Trendyol” platformasından olan sifarişlər üçün “Gel al noktası” olaraq da fəaliyyət göstərir. Bundan sonra müştərilərimiz Azərbaycana birbaşa çatdırılma zamanı da“Limak.az”ın xidmətlərindən istifadə edə biləcəklər. Bunun üçün bir neçə sadə addımı yerinə yetirmək kifayətdir.1.“Trendyol” tətbiqini yükləyib tətbiqə daxil olur. 2. “Azərbaycandan Birbaşa Al” butonuna klikləyin və ya Şəxsi “Hesabım” hissəsindən seçilən ölkəni “Azərbaycan” olaraq qeyd edin. 3. Ünvan məlumatlarını əlavə edin. 4. Sifariş etmək istədiyiniz məhsulları seçin. 5. Azərbaycana çatdırılmağa uyğun məhsulları səbətə əlavə edin. 6. Daha sonra bağlamaları əldə etmək üçün 2 üsuldan birini, yəni “ünvana çatdırılma” və ya “Gəl al nöqtəsi” olaraq“Limak”dan təhvil almağı seçin. 7. Son olaraq ödəniş edib, sifarişinizi tamamlayın. Siz də müxtəlif çeşidli məhsulları “Trendyol”dan sifariş edərək ən qısa zamanda LİMAK-dan təhvil alın. Eyni zamanda məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edə bilərsiniz. Bağlamalarınız sürətlə və güvənlə sizə çatdırılacaq. Amerika və Türkiyədən bağlamalarınızı filiallardan, kuryerlərimizdən və ya sizə ən yaxın kargomatlardan təhvil ala bilərsiniz.“Trendyol”dan birbaşa çatdırılmada sizin də seçiminiz Limak olsun!"
     },
  14: {
      id: 14,
      title: "Amerikadan Azərbaycana necə məhsul sifariş etmək olar",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170106901117608.png.jpeg",
      date: "2023-11-27 11:02:09",
        content: "Günümüzdə xaricdən onlayn alış-veriş, istifadəçilərə məhsulları istənilən vaxt və istənilən yerdən sifariş etməyə imkan verir. Bu onlayn platformalardan alış-veriş etmək xüsusilə əlavə vaxt itirməyin qarşısını alır. Hal-hazırda fərqli ölkələrə məxsus onlayn mağazalar aktuallıq qazanır. Onlardan ən məşhurlarına “Amazon”, “ebay”, “Shein”, “Trendyol”kimi platformaları nümunə göstərmək olar. Amerikanın məşhur alış-veriş saytlarından biri “Shein” qadın və kişi geyim kolleksiyaları, uşaq geyimləri, aksesuarlar, çantalar, ayaqqabılar və bir çox fərqli kateqoriyada məhsullar təqdim edir.“Shein.com”2008-ci ildən bəri fəaliyyət göstərir və bu gün də ən çox sifariş olunan qlobal alış-veriş saytları sırasında yer alır.  Daim geniş məhsul seçimi təklif edən “Shein”də istənilən zövqə uyğun məhsulları tapmaq mümkündür. Eyni zamanda mağaza həm keyfiyyətli, həm də göz oxşayan geyim və aksessuarları uyğun qiymətlərlə təklif edir. Bundan əlavə, müxtəlif endirimlər və kampaniyalar sayəsində büdcəyə daha çox qənaət etmə imkanı da mövcuddur. Məsələn, hal-hazırda platformada noyabr ayı boyunca davam edəcək“Black Friday”endirimləri aktivdir. Növbəti aydan etibarən isə bir ay boyunca davam edəcək “Yeni il” endirimləri aktiv olacaq.“Shein.com”dan necə sifariş etmək olar? “Shein” platformasından sifarişlərihttps://us.shein.com/saytı üzərindən həyata keçirmək mümkündür. Hal-hazırda bu platformdan Azərbaycana birbaşa sifariş etmək imkanı olmasa da,Limak.azilə sifarişlərinizi həyata keçirə bilərsiniz. Belə ki, aşağıdakı addımları izləyərək rahat şəkildə sifarişlərinizi edə bilərsiniz. 1) Qeydiyyat üçün e-mail və şifrə təyin edin;2) Əvvəlcə “My profile” bölümünə, daha sonra sol paneldə “Address Book” bölümünə keçid edin. Bu hissədə “ADD NEW ADDRESS” klikləyin və “Limak.az”ın “ünvanlar” hissəsindən Amerika adresini seçərək xanaya əlavə edin;3) “First Name” və “Last Name” olaraq ad və soyadınızı qeyd edin;4) “Country” (ölkə olaraq): “United States” seçin;5)  “Phone” bölümündə “Limak.az”ın Amerika ünvanları hissəsində olantelefon nömrəsiniqeyd edin;6) “ADRESS FINDER” bölümündə “Limak.az” saytında “Address Line” hissəsində olan məlumatları qeyd edin;7) “Address Line 2” bölümündə müştəri kodunuzu qeyd edin;8) “ZIP/Postal Code” bölümündə “Limak.az”ın Amerika ünvanlarında olanməlumatları qeyd edin;9) Sifariş ediləcək məhsulu “Səbət”ə əlavə edin və “View Cart” bölümünə keçid edin;10) “Checkout Now” bölümünə keçid edib ödəniş edərək sifarişinizi tamamlayın. Ehtiyacınız olan bütün məhsulları sifariş edərək ən qısa zamanda LİMAK-dan təhvil ala bilərsiniz. Eyni zamanda məhsulların linkini bizə göndərməklə sifarişlərinizi SifarişEt xidmətimizə həvalə edə bilərsiniz. Bağlamalarınız sürətlə və güvənlə sizə çatdırılacaq. Amerika və Türkiyədən bağlamalarınızı filiallardan, kuryerlərimizdən və ya sizə ən yaxın kargomatlardan təhvil ala bilərsiniz. Uzağı yaxın etdik! Amerikadan karqo - Amerikadan sifariş qaydasi."
    },
  15: {
      id: 15,
      title: "“Limak” anbarlarında iş günüdür",
      imageUrl: "https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-169943015026639.png.jpeg",
      date: "2023-11-08 11:55:50",
        content: "Hörmətli müştərilər, nəzərinizə çatdırırıq ki, 8, 9, 10, 11 və 12 noyabr tarixlərində bütün “Limak” anbarlarında iş günləridir.  Müştəri xidmətləri və “sifariş et” xidmətimiz standart iş qrafikində fəaliyyətini davam etdirir. Onlayn mağazalardan və brendlərin satış mərkəzlərindən alış-veriş edərək istədiyiniz məhsullara tez bir zamanda qovuşun. Bağlamalarınız sürətlə və güvənlə çatdırılacaq. Amerika və Türkiyədən çatdırılmada Limak təcrübəsinə güvənin. Uzağı yaxın etdik!"
    },
  };



 const selectedNews = newsDetail[id];
    


  return (
    <div className={styles.sections}>
       <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.container}>
            <div className={styles.iconTexts}>
              <div className={styles.iconText}>
                <li><IoLocationSharp /></li>
                <p>Səbail rayonu, Lermontov küç. 40A</p>
              </div>
              <div className={styles.iconText}>
                <li><FaClock /></li>
                <p>Bazar ertəsi-şənbə</p>
              </div>
              <div className={styles.iconText}>
                <li><FaPhoneVolume /></li>
                <a href="#">*9595</a>
              </div>
            </div>
            <div className={styles.icons}>
            <a href="https://www.facebook.com/Limakaz/"><IoLogoFacebook /></a>
                        <a href="https://www.instagram.com/limak.az/"><FaInstagram /></a>
                        <a href="https://t.me/limak_az"><FaTelegram /></a>
                        <a href="https://www.youtube.com/channel/UCz0okQvJ53Ml9agfGGjgyVg"><AiFillYoutube /></a>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>   
          <div className={styles.container}>
            <img src="https://limak.az/new_front/assets/logo.svg" alt="img" />
            <div className={styles.nav}>
              <ul>
                <li><a href="/tariffs">TARİFLƏR</a></li>
                <li><a href="/calculator">KALKULYATOR</a></li>
                <li><a href="/stores">MAĞAZALAR</a></li>
                <li><a href="/updates">XƏBƏRLƏR</a></li>
                <li><a href="/contact">ƏLAQƏ</a></li>
                <li><a href="/kargomat">KARGOMAT</a></li>
                <div className={styles.order}>
                </div>
              </ul>
            </div>
            <div className={styles.userBars}>
              <div className={styles.headerBottomRight}>
                <div className={styles.country}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="img" />
                  <p>RU</p>
                </div>
                <ul>
                  <li onClick={() => navigation('/basket')}><a href="#"><FaCartShopping /></a></li>
                  <div className={styles.user}>
                    <li onClick={() => navigation('/profile')}><a href="#"><FaRegUser /></a></li>
                  </div>
                </ul>
                <div className={styles.button}>
                  <p>DAXİL OL</p>
                </div>
              </div>
              <div className={styles.bars}>
              <ToggleMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newsDetail}>
        <div className={styles.container}>
          <div className={styles.newsTopTexts}>
            <h2>ÖLKƏLƏR ÜZRƏ TARİFLƏR</h2>
            <div className={styles.homePageTexts}>
              <a href="/homepage">Ana səhifə</a>
              <li><IoIosArrowForward /></li>
              <p>Tariflər</p>
            </div>
          </div>
          <div className={styles.newsCart}>
            <img src={selectedNews.imageUrl} alt="img" />
            <div className={styles.bottomTexts}>
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.content}</p>
              <div className={styles.newsTexts}>
                <img src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="Tarih" />
                <p>{selectedNews.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsDetail;
