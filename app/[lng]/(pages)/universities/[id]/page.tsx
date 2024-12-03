import { getData } from "@/lib/data";
import CardUniOne from "@/components/universities/template/CardUniOne";
import CardVideo from "@/components/universities/template/CardVedio";
import CardConfessions from "@/components/universities/template/CardConfessions";
import CardRank from "@/components/universities/template/CardRank";
import CardTableData from "@/components/universities/template/CardTableData";
import CardLanguage from "@/components/universities/template/CardLanguage";
import CardConditionsAndRegistration from "@/components/universities/template/CardConditionsAndRegistration";
import CardFaqs from "@/components/universities/template/CardFaqs";
import CardDetails from "@/components/universities/template/CardDetails";
import CardHouse from "@/components/universities/template/CardHouse";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import Navbar from "@/components/universities/template/NavbarForUniversity";

const universityData = {
  data: {
    university: {
      id: 40,
      slug: "atilim-university",
      category_id: 13,
      country: "2",
      city_id: 2,
      type: "3",
      international_rate: 1000,
      local_rate: 1000,
      student_count: 10000,
      teachers_count: 450,
      national_count: 21,
      logo: "http://admin.itqaneducation.com/storage/universities/IzUa0wBpzpqmuo99KHJyxIYCO7Lnb1dUN3KzX8Be.png",
      image:
        "http://admin.itqaneducation.com/storage/universities/nY4chpB42uPDRL1c8DbIgOyUQv68yOvfwghLxuc8.jpg",
      video: "https://www.youtube.com/watch?v=wGBDWdTGDxE",
      is_featured: 0,
      photo_album: [],
      confessions: [
        {
          name: "iLEDAK",
          image:
            "http://admin.itqaneducation.com/storage/confensions/TvDd5P3t99jl1QaZtTXn2UWOMwW0AEV2QJm7caDI.png",
        },
        {
          name: "MUDEK",
          image:
            "http://admin.itqaneducation.com/storage/confensions/jsgS3It92c0CM4sSAVUUd1JzWgkCgT2YgtL5K781.png",
        },
        {
          name: "CEA",
          image:
            "http://admin.itqaneducation.com/storage/confensions/ULWDkxw0CdLMfd2yx3V7JkvzTGhynPwstqCrqeP9.png",
        },
      ],
      languages: [
        {
          name: "التركية",
        },
        {
          name: "الانجليزية",
        },
      ],
      found_year: 1997,
      global_rank: 250,
      name: "جامعة اتيليم",
      description:
        "<p>تأسست جامعة أتيليم في العاصمة التركية أنقرة في 15 يوليو 1997، وتعد من أبرز الجامعات الخاصة في تركيا. تشتهر الجامعة بتركيزها على البحث العلمي المتقدم وتطوير التكنولوجيا، مما جعلها وجهة متميزة للطلاب الباحثين عن التعليم ذو الجودة العالية.</p>\r\n\r\n<p>تتميز جامعة أتيليم بدمج التعليم النظري مع البحث والتطبيق العملي، لتضمن تجهيز طلابها بالمعرفة والمهارات اللازمة للمنافسة في سوق العمل. كما تهدف إلى إعداد جيل من الخريجين القادرين على المنافسة على المستوى العالمي في مختلف المجالات، مع التركيز على تطوير القدرات الأكاديمية واكتساب الخبرات العملية.</p>\r\n\r\n<p>للحصول على توجيهات ودعم خلال رحلتك الدراسية، يمكنك الاعتماد على فريق إرشاد متخصص يساهم في تحقيق نجاحك الأكاديمي والمستقبلي.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>تصنيف جامعة أتيليم أنقرة: التميز والريادة في التعليم والبحث</h3>\r\n\r\n<p>جامعة أتيليم في أنقرة تُعتبر من أبرز الجامعات الخاصة في تركيا، حيث حققت مكانة مرموقة في التصنيفات الدولية والمحلية بفضل جودة التعليم والبحث العلمي المتميز.</p>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><strong>تصنيف &quot;تايمز للتعليم العالي&quot; (THE):</strong></p>\r\n\r\n\t<ul>\r\n\t\t<li>حازت على المركز الثاني بين الجامعات التركية في أبحاث العلوم الفيزيائية.</li>\r\n\t\t<li>جاءت في المرتبة الرابعة بشكل عام بين الجامعات التركية.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>تصنيف &quot;SCIMAGO&quot;:</strong></p>\r\n\r\n\t<ul>\r\n\t\t<li>احتلت المرتبة 21 بين الجامعات التركية.</li>\r\n\t\t<li>جاءت في المركز السادس بين الجامعات الخاصة.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>تصنيف &quot;URAP&quot; و&quot;Webometrics&quot;:</strong></p>\r\n\r\n\t<ul>\r\n\t\t<li>تمركزت في المرتبتين 42 و43 على التوالي، مما يعكس قوة حضورها الأكاديمي والبحثي.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>تصنيف &quot;QS&quot;:</strong></p>\r\n\r\n\t<ul>\r\n\t\t<li>صُنّفت ضمن أفضل 250 جامعة في منطقة &quot;أوروبا الناشئة وآسيا الوسطى&quot;، مما يدل على مكانتها الإقليمية المتميزة.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>الجامعات الريادية والمبتكرة:</strong></p>\r\n\r\n\t<ul>\r\n\t\t<li>حازت على المركز الأول في تصنيف الجامعات الريادية والمبتكرة الذي أصدرته وزارة العلوم والصناعة والتكنولوجيا التركية.</li>\r\n\t</ul>\r\n\t</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>اعترافات جامعة أتيليم أنقرة</h3>\r\n\r\n<p>جامعة أتيليم تُعد واحدة من الجامعات التركية المرموقة التي تحظى باعتراف دولي واسع، إلى جانب مشاركتها في برامج تبادل طلابي عالمية مثل برنامج إيراسموس+:</p>\r\n\r\n<p><strong>برنامج إيراسموس+</strong></p>\r\n\r\n<ul>\r\n\t<li>جامعة أتيليم عضو فاعل في برنامج Erasmus+ الشهير للتبادل الطلابي.</li>\r\n\t<li>يوفر البرنامج فرصًا للطلاب للدراسة في أكثر من 33 دولة أوروبية، مما يتيح لهم تجربة أكاديمية وثقافية مميزة على المستوى الدولي.</li>\r\n\t<li>الطلاب المسجلون في الجامعة يمكنهم التقديم لهذا البرنامج، مما يمكنهم من متابعة دراستهم لفصل دراسي أو عام كامل في جامعات أوروبية مرموقة.</li>\r\n</ul>\r\n\r\n<p><strong>الاعترافات الدولية والعربية</strong></p>\r\n\r\n<ul>\r\n\t<li>الجامعة تحظى باعتراف العديد من الدول العربية، ومنها:\r\n\t<ul>\r\n\t\t<li>مصر، لبنان، سوريا، الأردن، اليمن، قطر، وفلسطين.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>كما أنها معترف بها رسميًا في دول الاتحاد الأوروبي، مما يجعل شهادتها مقبولة عالميًا في سوق العمل والتعليم العالي.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>تخصصات البكالوريوس في جامعة اتيليم:</strong></p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<p>&nbsp;الطب البشري</p>\r\n\r\n<p>&nbsp;التمريض</p>\r\n\r\n<p>العلاج الطبيعي وإعادة التأهيل</p>\r\n\r\n<p>هندسة الطيران</p>\r\n\r\n<p>هندسة الفضاء الجوي</p>\r\n\r\n<p>إدارة الطيران</p>\r\n\r\n<p>هندسة الكمبيوتر</p>\r\n\r\n<p>هندسة نظم المعلومات</p>\r\n\r\n<p>هندسة الكهرباء والالكترون</p>\r\n\r\n<p>هندسة التصنيع</p>\r\n\r\n<p>الهندسة المدنية</p>\r\n\r\n<p>الهندسة المعمارية</p>\r\n\r\n<p>الهندسة الكيميائية و الكيمياء التطبيقية</p>\r\n\r\n<p>الهندسة الميكانيكية</p>\r\n\r\n<p>هندسة الميكاترونكس</p>\r\n\r\n<p>هندسة السيارات</p>\r\n\r\n<p>هندسة نظم الطاقة</p>\r\n\r\n<p>هندسة البرمجيات</p>\r\n\r\n<p>هندسة المعادن والمواد</p>\r\n\r\n<p>الطائرات الكهربائية الالكترونية</p>\r\n\r\n<p>الاقتصاد</p>\r\n\r\n<p>العلاقات العامة و الدعاية و الإعلان</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>إدارة الأعمال</p>\r\n\r\n<p>العلاقات الدولية</p>\r\n\r\n<p>السياحة و إدارة الفنادق</p>\r\n\r\n<p>إدارة الأعمال</p>\r\n\r\n<p>العلوم السياسية و الإدارة العامة</p>\r\n\r\n<p>الإدارة</p>\r\n\r\n<p>المالية</p>\r\n\r\n<p>الاقتصاد</p>\r\n\r\n<p>التغذية و علم التغذية</p>\r\n\r\n<p>التصميم الجرافيكي</p>\r\n\r\n<p>العمارة الداخلية و التصميم البيئي</p>\r\n\r\n<p>علم النفس</p>\r\n\r\n<p>اللغة الانجليزية و آدابها</p>\r\n\r\n<p>الترجمة</p>\r\n\r\n<p>الحقوق</p>\r\n\r\n<p>التجارة الدولية والخدمات اللوجستية</p>\r\n\r\n<p>الإدارة السياحية</p>\r\n\r\n<p>صيانة هياكل الطائرات والمحركات</p>\r\n\r\n<p>علم التغذية و البرامج الغذائية</p>\r\n\r\n<p>تصميم الأزياء</p>\r\n\r\n<p>الرياضيات</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>البحث العلمي في جامعة أتيليم أنقرة</h3>\r\n\r\n<p>تولي جامعة أتيليم اهتمامًا كبيرًا بالبحث العلمي، وتتبنى برامج ومبادرات متميزة لدعم الطلاب والباحثين في مجالات مختلفة، منها:</p>\r\n\r\n<p><strong>برنامج تنظيم مشاريع أبحاث البكالوريوس (LAP)</strong></p>\r\n\r\n<p>هذا البرنامج يُعد من أبرز برامج الجامعة، حيث يهدف إلى:</p>\r\n\r\n<ol>\r\n\t<li>تدريب الباحثين من الطلاب المبدعين: يعمل البرنامج على تعزيز مهارات البحث والابتكار لدى الطلاب من خلال تنفيذ مشاريع بحثية هادفة.</li>\r\n\t<li>الدعم المالي: يُقدم البرنامج منحًا دراسية تصل إلى 1000 ليرة تركية لكل طالب، وميزانية إجمالية لكل مشروع تصل إلى 15,000 ليرة تركية.</li>\r\n\t<li>تنفيذ مشاريع متعددة: يشمل البرنامج ثلاثة مجالات رئيسية:\r\n\t<ul>\r\n\t\t<li>البحوث الأساسية.</li>\r\n\t\t<li>التطوير التجريبي.</li>\r\n\t\t<li>المنتجات المبتكرة.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>التعاون والمشاركة: يتم عرض المشاريع النهائية في معارض وعروض تقديمية سنوية، مما يتيح للطلاب فرصة التعاون مع الشركات داخل الجامعة وخارجها.</li>\r\n</ol>\r\n\r\n<p>مركز التميز لتشكيل المعادن (MFCE)</p>\r\n\r\n<p>يُعتبر مركزًا بحثيًا فريدًا في تركيا وأحد أكثر المراكز تطورًا في أوروبا:</p>\r\n\r\n<ol>\r\n\t<li>التأسيس: أُنشئ المركز عام 2010 بدعم من وزارة التنمية التركية وجامعة أتيليم.</li>\r\n\t<li>الريادة: يُعد المركز البحثي الأول والوحيد في تركيا المتخصص في تشكيل المعادن.</li>\r\n\t<li>الأهداف:\r\n\t<ul>\r\n\t\t<li>دعم صناعة تشكيل المعادن التركية.</li>\r\n\t\t<li>تطوير تقنيات تصنيع متقدمة ومكونات ذات قيمة مضافة عالية.</li>\r\n\t\t<li>تصنيع مواد جديدة ومتطورة.</li>\r\n\t\t<li>استكشاف خيارات تصنيع موفرة للطاقة.</li>\r\n\t</ul>\r\n\t</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>الإجراءات والأوراق المطلوبة للتسجيل في جامعة أتيليم أنقرة</h3>\r\n\r\n<p>لإتمام عملية التسجيل بنجاح في جامعة أتيليم بأنقرة، يجب تقديم الوثائق التالية:</p>\r\n\r\n<p>1. <strong>جواز السفر</strong></p>\r\n\r\n<ul>\r\n\t<li>نسخة من جواز السفر مع إحضار الأصل للفحص (يُعاد للطلاب بعد التدقيق).</li>\r\n</ul>\r\n\r\n<p>2. <strong>صور شخصية</strong></p>\r\n\r\n<ul>\r\n\t<li>تقديم 6 صور شخصية حديثة.</li>\r\n</ul>\r\n\r\n<p>3. <strong>شهادة الثانوية العامة</strong></p>\r\n\r\n<ul>\r\n\t<li>نسخة مترجمة إلى اللغة الإنجليزية أو التركية ومصدقة من جهة معتمدة.</li>\r\n</ul>\r\n\r\n<p>4. <strong>شهادات اللغة</strong></p>\r\n\r\n<ul>\r\n\t<li>شهادة أصلية لإجادة اللغة الإنجليزية (معترف بها دوليًا) إذا كانت مطلوبة للبرنامج، بشرط أن تكون معتمدة من كلية اللغات الأجنبية في جامعة أتيليم.</li>\r\n\t<li>شهادة أصلية لإجادة اللغة التركية إذا كان البرنامج يتطلب الدراسة باللغة التركية.</li>\r\n</ul>\r\n\r\n<p>5. <strong>اختبار Y&Ouml;S</strong></p>\r\n\r\n<ul>\r\n\t<li>لا يُشترط اجتياز اختبار Y&Ouml;S عند التسجيل في الجامعات الخاصة مثل جامعة أتيليم.</li>\r\n</ul>\r\n\r\n<p><strong>ملاحظات مهمة</strong></p>\r\n\r\n<ul>\r\n\t<li>تأكد من أن جميع المستندات مستوفاة وصحيحة لتجنب أي تأخير في عملية التسجيل.</li>\r\n\t<li>الالتزام بالمواعيد النهائية التي تحددها الجامعة لتقديم الطلبات.</li>\r\n</ul>",
    },
    faqs: [
      {
        id: 62,
        question: "ما هي تكاليف الدراسة في جامعة أتيليم؟",
        answer:
          "<p>&nbsp;</p>\r\n\r\n<p>تختلف التكاليف حسب البرنامج الدراسي. تقدم جامعة أتيليم برامج بكاليروس ودراسات عُليا، ويختلف رسوم الدراسة حسب التخصص. للحصول على تفاصيل دقيقة حول الرسوم، يُنصح بزيارة الموقع الرسمي للجامعة أو الاتصال بمكتب القبول.</p>",
      },
      {
        id: 63,
        question: "هل توفر الجامعة برامج تعليمية باللغة الإنجليزية؟",
        answer:
          "<p>&nbsp;</p>\r\n\r\n<p>نعم، تقدم جامعة أتيليم العديد من البرامج الدراسية باللغة الإنجليزية في مجالات مثل الهندسة، إدارة الأعمال، والاقتصاد. يجب على الطلاب إثبات مهاراتهم في اللغة الإنجليزية من خلال شهادات معترف بها مثل TOEFL أو IELTS.</p>",
      },
      {
        id: 64,
        question: "هل تقدم جامعة أتيليم منحاً دراسية؟",
        answer:
          "<p>&nbsp;</p>\r\n\r\n<p>تقدم الجامعة بعض المنح الدراسية للطلاب المتفوقين والتي تتراوح بين خصومات على الرسوم الدراسية إلى منح جزئية. للحصول على معلومات أكثر حول المنح الدراسية، يُنصح بمراجعة مكتب المنح في الجامعة.</p>",
      },
    ],
    study_programs: [
      {
        level_id: 3,
        level_name: "Bachelor 11",
        programs: [
          {
            id: 103,
            specialization_id: 6,
            specialization_name: "الهندسة",
            study_years: 5,
            study_language: "en",
            fees: "8000.00",
            annual_fees: 9165,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 104,
            specialization_id: 9,
            specialization_name: "إدارة الأعمال",
            study_years: 4,
            study_language: "en , tu",
            fees: "8000.00",
            annual_fees: 9800,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 105,
            specialization_id: 10,
            specialization_name: "الاقتصاد",
            study_years: 4,
            study_language: "en , tu",
            fees: "8000.00",
            annual_fees: 9800,
            has_grant: null,
            old_fees: null,
          },
        ],
      },
      {
        level_id: 4,
        level_name: "ماجستير",
        programs: [
          {
            id: 149,
            specialization_id: 8,
            specialization_name: "الصيدلة",
            study_years: 3,
            study_language: "ar",
            fees: "233.00",
            annual_fees: 322,
            has_grant: 1,
            old_fees: 233,
          },
        ],
      },
    ],
    conditions: [
      {
        level_id: 3,
        level_name: "Bachelor 11",
        conditions: [
          {
            id: 43,
            conditions:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
      {
        level_id: 4,
        level_name: "ماجستير",
        conditions: [
          {
            id: 44,
            conditions:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
      {
        level_id: 7,
        level_name: "الدكتوراة",
        conditions: [
          {
            id: 45,
            conditions:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
      {
        level_id: 8,
        level_name: "معهد سنتين",
        conditions: [
          {
            id: 46,
            conditions:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
    ],
    registration_dates: [
      {
        level_id: 3,
        level_name: "Bachelor 11",
        conditions: [
          {
            id: 43,
            registration_dates:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
      {
        level_id: 4,
        level_name: "ماجستير",
        conditions: [
          {
            id: 44,
            registration_dates:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
      {
        level_id: 7,
        level_name: "الدكتوراة",
        conditions: [
          {
            id: 45,
            registration_dates:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
      {
        level_id: 8,
        level_name: "معهد سنتين",
        conditions: [
          {
            id: 46,
            registration_dates:
              "<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق &quot;ليتراسيت&quot; (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل &quot;ألدوس بايج مايكر&quot; (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>",
          },
        ],
      },
    ],
    student_housings: [
      {
        id: 39,
        capacity: 500,
        type: "male_housing",
        price: "2000.00",
        city: "2",
        beds: 250,
        meals: 3,
        internet: 2000,
        name: "السكن الجامعي في جامعة اتيليم",
        description: "<p>السكن الجامعي في جامعة اتيليم</p>",
        images: [
          "http://admin.itqaneducation.com/storage/universities/o91IOah6YE4HZ68nkSjbeo2x0hiHAdu1mX5Xi6ZL.webp",
        ],
      },
      {
        id: 52,
        capacity: 122,
        type: "male_housing",
        price: "1233.00",
        city: "2",
        beds: 321,
        meals: 123,
        internet: 321,
        name: "جامعة جيدك",
        description: "<p>testtest</p>",
        images: [
          "http://admin.itqaneducation.com/storage/universities/Ji9Z5hu1SwpY3nQq6FUJ0dQBUEQhCY6kFOehchFG.jpg",
          "http://admin.itqaneducation.com/storage/universities/7ipzUKBzkuiE6VvRrvtu17H3eqDbZ5IZ0YgnXUQB.jpg",
        ],
      },
    ],
    specifications: {
      "1": {
        id: 539,
        name: "جامعة اتيليم",
      },
    },
  },
};

export default async function UniversityInfo({
  params,
}: {
  params: { lng: string; id: string };
}) {
  const { lng, id } = params;
  const {t} = await useTranslation(lng, "university_details")
  let data: any = null;
  const response = await getData(`/universities/${id}/details`, lng);
  data = response?.data;

  if (data && data?.university) {
    const { university, faqs, study_programs, student_housings } = data;
    return (
      <div className="text-start text-base text-gray-500 scroll-smooth">
        <section className="my-12 px-4 lg:px-0">
          <h1 className="text-xl md:text-2xl font-bold text-gray-500 text-center">
            {university.name}
          </h1>
        </section>
          <Navbar lng={lng} name={university.name}/>
        <div className="container lg:max-w-[85vw] mx-auto px-4 py-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-500">{t("university.info")} {university.name}</h2>
        </div>
        <CardUniOne university={university} lng={lng} />
        <div id="photos">
          <CardVideo university={university} lng={lng} />
        </div>
        {/* <div className="space-y-7 text-gray-500 mt-10 py-10">
          <h1 className="text-lg md:text-xl font-bold px-4">
            {t("university.features")}
          </h1>
          <div className="w-4/5 mx-auto">
            <Card className="flex items-center border-none shadow-none gap-4 p-3 md:gap-6 group hover:shadow-2xl">
              <CardHeader className="p-0">
                <div className="size-12 text-xl rounded-full bg-primary text-center flex items-center justify-center text-white group-hover:bg-secondary">
                  1
                </div>
              </CardHeader>
              <CardContent className="p-0">
                lorem kjf kmwefomefw wefnwe fowef
              </CardContent>
            </Card>
          </div>
        </div> */}
        {university && (
          <div id="recognitions" className="scroll-mt-96">
            <CardConfessions university={university} lng={lng} />
          </div>
        )}
        {university && (
          <div id="numbers" className="scroll-mt-96">
            <CardRank university={university} lng={lng} />
          </div>
        )}
        {study_programs && study_programs.length > 0 && (
          <div id="specializations" className="scroll-mt-96">
            <CardTableData study_programs={data.study_programs} lng={lng} />
          </div>
        )}
        {university && <div id="languages" className="scroll-mt-96">
            <CardLanguage university={university} lng={lng} />
          </div>}

        {data && (
          <div id="terms" className="scroll-mt-96">
            <CardConditionsAndRegistration data={data} lng={lng} />
          </div>
        )}
        {university.description && (
          <div id="details" className="scroll-mt-96">
            <CardDetails university={university} lng={lng} />
          </div>
        )}
        {faqs && student_housings && study_programs && (
          <div id="faqs" className="scroll-mt-96">
            <CardFaqs
              faqs={faqs}
              student_housings={student_housings}
              study_programs={study_programs}
              lng={lng}
            />
          </div>
        )}
        <CardHouse student_housings={student_housings} lng={lng} />
      </div>
    );
  } else
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <h1 className="text-2xl text-gray-500 font-bold">
          University Not Found
        </h1>
      </div>
    );
}


