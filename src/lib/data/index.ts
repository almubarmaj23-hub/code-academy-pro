import { Course, QuizQuestion, RoadmapStep, Stat, Article } from '@/types';

// ============================================================================
// دورات المنصة - 8 دورات شاملة
// ============================================================================
export const courses: Course[] = [
  {
    id: 'html-css',
    title: 'أساسيات تطوير الويب - HTML و CSS',
    description: 'دورة شاملة تُعلّمك أساسيات بناء صفحات الويب من الصفر، تبدأ بتعلم HTML5 لهيكلة المحتوى ثم CSS3 لتصميم وتجميل الصفحات، مع مشاريع عملية تُطبّق فيها ما تعلمته.',
    icon: '🌐',
    level: 'مبتدئ',
    duration: '24 ساعة',
    lessons: 48,
    rating: 4.9,
    category: 'web',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'javascript',
    title: 'JavaScript من الصفر للاحتراف',
    description: 'رحلة تعليمية شاملة في لغة JavaScript، تتعلم فيها الأساسيات من المتغيرات والدوال، إلى المواضيع المتقدمة مثل الـ Promises و Async/Await و التعامل مع الـ DOM و APIs.',
    icon: '⚡',
    level: 'متوسط',
    duration: '36 ساعة',
    lessons: 72,
    rating: 4.8,
    category: 'web',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'react',
    title: 'React.js - بناء تطبيقات ويب حديثة',
    description: 'تعلم مكتبة React.js الأشهر في العالم لبناء واجهات مستخدم تفاعلية، مع التركيز على Hooks و Context API و Redux وكيفية بناء تطبيقات متكاملة.',
    icon: '⚛️',
    level: 'متوسط',
    duration: '40 ساعة',
    lessons: 80,
    rating: 4.9,
    category: 'web',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'nodejs',
    title: 'تطوير الخوادم مع Node.js',
    description: 'دورة عملية في بناء خوادم الويب باستخدام Node.js و Express، مع تعلم كيفية إنشاء RESTful APIs والتعامل مع قواعد البيانات MongoDB والـ Authentication.',
    icon: '🟢',
    level: 'متوسط',
    duration: '30 ساعة',
    lessons: 60,
    rating: 4.7,
    category: 'backend',
    gradient: 'from-green-600 to-emerald-500',
  },
  {
    id: 'python',
    title: 'Python الشامل من الصفر',
    description: 'تعلم لغة Python من البداية، بدءاً من الأساسيات والمتغيرات، مروراً بالـ OOP والتعامل مع الملفات، ووصولاً إلى بناء تطبيقات ويب مع Django.',
    icon: '🐍',
    level: 'مبتدئ',
    duration: '45 ساعة',
    lessons: 90,
    rating: 5.0,
    category: 'backend',
    gradient: 'from-blue-600 to-yellow-400',
  },
  {
    id: 'flutter',
    title: 'تطوير تطبيقات الموبايل مع Flutter',
    description: 'ابنِ تطبيقات iOS و Android بتطبيق واحد باستخدام Flutter و Dart، مع التعلم كيفية تصميم واجهات جميلة والتكامل مع Firebase للـ Backend.',
    icon: '📱',
    level: 'متوسط',
    duration: '40 ساعة',
    lessons: 75,
    rating: 4.8,
    category: 'mobile',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'sql',
    title: 'قواعد البيانات SQL',
    description: 'تعلم لغة SQL للتعامل مع قواعد البيانات العلائقية، من إنشاء الجداول والاستعلامات الأساسية إلى الـ JOINs المتقدمة والإجراءات المخزنة.',
    icon: '🗄️',
    level: 'مبتدئ',
    duration: '20 ساعة',
    lessons: 40,
    rating: 4.8,
    category: 'backend',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'ai-python',
    title: 'الذكاء الاصطناعي مع Python',
    description: 'ادخل عالم الذكاء الاصطناعي وتعلم الآلة باستخدام Python، مع التركيز على مكتبات NumPy و Pandas و Scikit-learn لبناء نماذج تنبؤ ذكية.',
    icon: '🤖',
    level: 'متقدم',
    duration: '50 ساعة',
    lessons: 85,
    rating: 4.9,
    category: 'ai',
    gradient: 'from-purple-500 to-pink-500',
  },
];

// ============================================================================
// بيانات الدروس مع فيديوهات عربية حقيقية
// جميع الفيديوهات من قنوات عربية موثوقة مثل Elzero Web School
// ============================================================================

export interface LessonDetail {
  num: number;
  title: string;
  description: string;
  dur: string;
  free: boolean;
  videoUrl?: string;
  codeExample?: string;
}

export const lessonsData: Record<string, LessonDetail[]> = {
  // ==================== HTML - دورة HTML من Elzero Web School ====================
  html: [
    {
      num: 1,
      title: 'مقدمة في HTML ومفهوم الويب',
      description: 'في هذا الدرس ستتعرف على مفهوم الويب وكيف تعمل المواقع، وما هي HTML ولماذا هي اللغة الأساسية لبناء صفحات الويب، وكيف يتفاعل المتصفح مع الكود.',
      dur: '15 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=qfPUMV9J5yw',
      codeExample: '<!DOCTYPE html>\n<html lang="ar">\n<head>\n  <meta charset="UTF-8">\n  <title>أول صفحة لي</title>\n</head>\n<body>\n  <h1>مرحباً بالعالم!</h1>\n</body>\n</html>'
    },
    {
      num: 2,
      title: 'هيكل صفحة HTML والعناصر الأساسية',
      description: 'تتعلم في هذا الدرس الهيكل الأساسي لأي صفحة HTML، والعناصر الرئيسية مثل html, head, body، وكيفية إضافة العنوان والوصف للموقع.',
      dur: '20 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=X1ulCwyhCVM',
      codeExample: '<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>عنوان الصفحة</title>\n  <meta name="description" content="وصف الصفحة">\n</head>\n<body>\n  <!-- المحتوى هنا -->\n</body>\n</html>'
    },
    {
      num: 3,
      title: 'العناوين والفقرات والنصوص',
      description: 'شرح تفصيلي للعناوين من h1 إلى h6، وكيفية استخدام الفقرات p، والعناصر النصية المختلفة مثل strong, em, mark, del.',
      dur: '18 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=300',
      codeExample: '<h1>العنوان الرئيسي</h1>\n<h2>عنوان فرعي</h2>\n<p>هذه فقرة <strong>نص مهم</strong> و <em>نص مائل</em>.</p>\n<p>يمكنك أيضاً <mark>تظليل نص</mark> أو <del>شطب نص</del>.</p>'
    },
    {
      num: 4,
      title: 'الروابط والتنقل بين الصفحات',
      description: 'تعلم كيفية إنشاء روابط تشعبية للتنقل بين الصفحات، والروابط الخارجية، وروابط البريد الإلكتروني، وكيفية فتح الرابط في تبويب جديد.',
      dur: '15 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=600',
      codeExample: '<a href="https://example.com">رابط خارجي</a>\n<a href="/about">رابط داخلي</a>\n<a href="mailto:info@example.com">راسلنا</a>\n<a href="https://google.com" target="_blank" rel="noopener">فتح في تبويب جديد</a>'
    },
    {
      num: 5,
      title: 'الصور والوسائط في HTML',
      description: 'شرح كيفية إضافة الصور باستخدام وسم img، وتحسين الصور للموقع، وإضافة الفيديوهات والصوتيات، مع مراعاة الوصولية accessibility.',
      dur: '22 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=900',
      codeExample: '<img src="image.jpg" alt="وصف الصورة" width="300" height="200">\n<video controls width="400">\n  <source src="video.mp4" type="video/mp4">\n</video>\n<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>'
    },
    {
      num: 6,
      title: 'القوائم المرتبة وغير المرتبة',
      description: 'تعلم إنشاء القوائم المنقّطة والمرقّمة، والقوائم المتداخلة، وكيفية استخدام القوائم في إنشاء قوائم تنقل.',
      dur: '12 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=1200',
      codeExample: '<ul>\n  <li>عنصر أول</li>\n  <li>عنصر ثاني</li>\n</ul>\n<ol>\n  <li>خطوة أولى</li>\n  <li>خطوة ثانية</li>\n</ol>'
    },
    {
      num: 7,
      title: 'الجداول في HTML',
      description: 'شرح إنشاء الجداول بالتفصيل، وإضافة العناوين والبيانات، ودمج الخلايا، وكيفية جعل الجداول متجاوبة.',
      dur: '20 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=1500',
      codeExample: '<table>\n  <thead>\n    <tr>\n      <th>الاسم</th>\n      <th>العمر</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>أحمد</td>\n      <td>25</td>\n    </tr>\n  </tbody>\n</table>'
    },
    {
      num: 8,
      title: 'النماذج Forms - الأساسيات',
      description: 'مقدمة في النماذج وكيفية إنشاء حقول الإدخال، وأنواع input المختلفة، وكيفية إرسال البيانات.',
      dur: '25 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=1800',
      codeExample: '<form action="/submit" method="POST">\n  <label for="name">الاسم:</label>\n  <input type="text" id="name" name="name" required>\n  <input type="email" name="email" placeholder="البريد الإلكتروني">\n  <button type="submit">إرسال</button>\n</form>'
    },
  ],

  // ==================== CSS - دورة CSS من Elzero Web School ====================
  css: [
    {
      num: 1,
      title: 'مقدمة في CSS وطريقة الكتابة',
      description: 'تعرف على CSS ولماذا هي مهمة لتصميم المواقع، والفرق بين Inline و Internal و External CSS، وكيفية كتابة القواعد بشكل صحيح.',
      dur: '18 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY',
      codeExample: '/* External CSS */\np {\n  color: blue;\n  font-size: 16px;\n}\n\n/* Internal CSS */\n<style>\n  h1 { color: red; }\n</style>\n\n/* Inline CSS */\n<p style="color: green;">نص أخضر</p>'
    },
    {
      num: 2,
      title: 'الألوان والخلفيات',
      description: 'شرح كيفية استخدام الألوان في CSS بالطرق المختلفة (اسم اللون، Hex، RGB، HSL)، وإضافة خلفيات من صور أو تدرجات.',
      dur: '20 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=400',
      codeExample: 'body {\n  background-color: #f0f0f0;\n  color: rgb(33, 33, 33);\n}\n\n.hero {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  background-size: cover;\n}'
    },
    {
      num: 3,
      title: 'نموذج الصندوق Box Model',
      description: 'فهم عميق لنموذج الصندوق الذي يُعد أساس CSS، وتعلم الفرق بين margin و padding و border، وكيف يؤثروا على حجم العنصر.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=qyVkLebgfzY&t=800',
      codeExample: '.box {\n  width: 200px;\n  height: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  box-sizing: border-box; /* مهم! */\n}'
    },
    {
      num: 4,
      title: 'Flexbox - التخطيط المرن',
      description: 'شرح شامل لـ Flexbox وكيفية استخدامه لإنشاء تخطيطات مرنة وسهلة، مع شرح الخصائص الرئيسية مثل justify-content و align-items.',
      dur: '35 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=JJSoEo8JSnc',
      codeExample: '.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.item {\n  flex: 1;\n}'
    },
    {
      num: 5,
      title: 'CSS Grid - التخطيط الشبكي',
      description: 'تعلم CSS Grid الأقوى لإنشاء تخطيطات معقدة بسهولة، مع شرح الخصائص الأساسية grid-template-columns و grid-gap وغيرها.',
      dur: '40 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=EFafSYg-PkI',
      codeExample: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n}\n\n.grid-item {\n  grid-column: span 2;\n}'
    },
    {
      num: 6,
      title: 'التصميم المتجاوب Responsive Design',
      description: 'كيفية إنشاء مواقع تتكيف مع جميع أحجام الشاشات، واستخدام Media Queries، والـ Mobile-First approach.',
      dur: '30 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=SRPLxbUlWmA',
      codeExample: '/* Mobile First */\n.container {\n  width: 100%;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container { width: 750px; }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .container { width: 960px; }\n}'
    },
    {
      num: 7,
      title: 'الانتقالات والتأثيرات Transitions & Animations',
      description: 'إضافة حيوية للموقع باستخدام Transitions و Animations، وإنشاء تأثيرات جذابة عند التفاعل مع العناصر.',
      dur: '28 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=YszONOTKfmw',
      codeExample: '.button {\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  transform: scale(1.05);\n  box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}'
    },
    {
      num: 8,
      title: 'المتغيرات CSS Variables',
      description: 'استخدام CSS Custom Properties لتنظيم الكود وتسهيل التعديل، وإنشاء ثيمات قابلة للتغيير.',
      dur: '15 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=PHO6TBaA5uQ',
      codeExample: ':root {\n  --primary-color: #6c63ff;\n  --secondary-color: #00d4ff;\n  --spacing: 20px;\n}\n\n.button {\n  background: var(--primary-color);\n  padding: var(--spacing);\n}'
    },
  ],

  // ==================== JavaScript - دورة JavaScript من Elzero Web School ====================
  js: [
    {
      num: 1,
      title: 'مقدمة في JavaScript والإعداد',
      description: 'تعرف على JavaScript ولماذا هي مهمة، وكيف تعمل، وكيفية إضافتها للصفحة، واستخدام console للتجربة.',
      dur: '20 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=GM6dQBbb-Xg',
      codeExample: '// طباعة في الـ Console\nconsole.log("مرحباً بالعالم!");\n\n// إضافة JavaScript في HTML\n<script src="script.js"></script>\n<script>\n  console.log("كود داخل الصفحة");\n</script>'
    },
    {
      num: 2,
      title: 'المتغيرات وأنواع البيانات',
      description: 'شرح المتغيرات بـ let و const و var، وأنواع البيانات المختلفة: نص، رقم، منطقي، مصفوفة، كائن.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=300',
      codeExample: '// المتغيرات\nlet name = "أحمد";\nconst age = 25;\nvar oldWay = "قديم";\n\n// أنواع البيانات\nlet text = "نص";\nlet number = 100;\nlet isTrue = true;\nlet array = [1, 2, 3];\nlet object = { name: "أحمد", age: 25 };'
    },
    {
      num: 3,
      title: 'العمليات الحسابية والمقارنة',
      description: 'تعلم العمليات الحسابية الأساسية، وعوامل المقارنة، والعوامل المنطقية، وكيفية استخدامها في البرمجة.',
      dur: '18 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=600',
      codeExample: '// عمليات حسابية\nlet sum = 10 + 5;\nlet product = 10 * 5;\nlet remainder = 10 % 3;\n\n// مقارنة\nconsole.log(10 > 5);  // true\nconsole.log(10 === 10);  // true\nconsole.log(10 !== 5);  // true\n\n// عوامل منطقية\nconsole.log(true && false);  // false\nconsole.log(true || false);  // true'
    },
    {
      num: 4,
      title: 'الشروط if و else و switch',
      description: 'شرح الجمل الشرطية وكيفية اتخاذ قرارات في البرنامج، واستخدام if و else و else if و switch.',
      dur: '22 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=900',
      codeExample: 'let grade = 85;\n\nif (grade >= 90) {\n  console.log("ممتاز");\n} else if (grade >= 80) {\n  console.log("جيد جداً");\n} else {\n  console.log("اجتهد أكثر");\n}\n\n// Switch\nlet day = "الجمعة";\nswitch (day) {\n  case "الجمعة":\n    console.log("يوم عطلة!");\n    break;\n  default:\n    console.log("يوم عمل");\n}'
    },
    {
      num: 5,
      title: 'الحلقات Loops - for و while',
      description: 'تعلم كيفية تكرار تنفيذ الكود باستخدام الحلقات، والفرق بين for و while و do...while.',
      dur: '20 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=1200',
      codeExample: '// For Loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// While Loop\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n\n// Loop through array\nlet fruits = ["تفاح", "برتقال", "موز"];\nfruits.forEach(fruit => console.log(fruit));'
    },
    {
      num: 6,
      title: 'الدوال Functions',
      description: 'شرح الدوال وكيفية إنشائها، والفرق بين Function Declaration و Expression، والدوال السهمية Arrow Functions.',
      dur: '30 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=h33Srr5J9nY',
      codeExample: '// Function Declaration\nfunction greet(name) {\n  return "مرحباً " + name;\n}\n\n// Arrow Function\nconst greetArrow = (name) => `مرحباً ${name}`;\n\n// استدعاء الدالة\nconsole.log(greet("أحمد"));\nconsole.log(greetArrow("سارة"));'
    },
    {
      num: 7,
      title: 'المصفوفات Arrays وطرقها',
      description: 'شرح المصفوفات بالتفصيل، والطرق المهمة مثل push, pop, map, filter, reduce, find.',
      dur: '35 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=oigfaZ5AaTM',
      codeExample: 'let numbers = [1, 2, 3, 4, 5];\n\n// إضافة وإزالة\nnumbers.push(6);  // إضافة في النهاية\nnumbers.pop();    // إزالة من النهاية\n\n// طرق متقدمة\nlet doubled = numbers.map(n => n * 2);\nlet evens = numbers.filter(n => n % 2 === 0);\nlet sum = numbers.reduce((a, b) => a + b, 0);\n\nconsole.log(doubled);  // [2, 4, 6, 8, 10]\nconsole.log(evens);    // [2, 4]\nconsole.log(sum);      // 15'
    },
    {
      num: 8,
      title: 'الكائنات Objects',
      description: 'فهم الكائنات في JavaScript، وكيفية إنشائها والوصول لخصائصها، والـ Destructuring.',
      dur: '28 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=oigfaZ5AaTM&t=400',
      codeExample: 'let person = {\n  name: "أحمد",\n  age: 25,\n  skills: ["HTML", "CSS", "JS"],\n  greet() {\n    return `مرحباً، أنا ${this.name}`;\n  }\n};\n\n// الوصول للخصائص\nconsole.log(person.name);\nconsole.log(person["age"]);\n\n// Destructuring\nconst { name, age } = person;'
    },
    {
      num: 9,
      title: 'التعامل مع DOM',
      description: 'شرح كيفية التفاعل مع عناصر الصفحة باستخدام DOM، واختيار العناصر وتعديلها وإضافة أحداث.',
      dur: '40 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=y17RuWkWdn8',
      codeExample: '// اختيار العناصر\nconst title = document.querySelector("#title");\nconst buttons = document.querySelectorAll(".btn");\n\n// تعديل المحتوى\ntitle.textContent = "عنوان جديد";\ntitle.innerHTML = "<strong>نص مهم</strong>";\n\n// إضافة حدث\nbutton.addEventListener("click", () => {\n  alert("تم النقر!");\n});'
    },
    {
      num: 10,
      title: 'Promises و Async/Await',
      description: 'فهم البرمجة غير المتزامنة في JavaScript، وكيفية استخدام Promises و Async/Await للتعامل مع العمليات التي تحتاج وقت.',
      dur: '45 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU',
      codeExample: '// Promise\nconst fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => resolve("تم جلب البيانات"), 1000);\n  });\n};\n\n// Async/Await\nasync function getData() {\n  try {\n    const data = await fetchData();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}'
    },
  ],

  // ==================== Python - دورة Python ====================
  python: [
    {
      num: 1,
      title: 'مقدمة في Python وتثبيتها',
      description: 'تعرف على لغة Python ومميزاتها، وكيفية تثبيتها على جهازك، واستخدام الـ Python Shell والـ IDLE.',
      dur: '20 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=rvVYDsE-s7Y',
      codeExample: '# أول برنامج في Python\nprint("مرحباً بالعالم!")\nprint("Python لغة رائعة!")\n\n# التحقق من الإصدار\nimport sys\nprint(sys.version)'
    },
    {
      num: 2,
      title: 'المتغيرات وأنواع البيانات',
      description: 'تعلم كيفية إنشاء المتغيرات، وأنواع البيانات الأساسية في Python: int, float, str, bool.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=rvVYDsE-s7Y&t=300',
      codeExample: '# المتغيرات\nname = "أحمد"\nage = 25\nheight = 1.75\nis_student = True\n\n# معرفة النوع\nprint(type(name))    # <class \'str\'>\nprint(type(age))     # <class \'int\'>\nprint(type(height))  # <class \'float\'>'
    },
    {
      num: 3,
      title: 'القوائم Lists',
      description: 'شرح القوائم في Python وكيفية إنشائها والتعامل معها، وإضافة وحذف العناصر، والتقطيع Slicing.',
      dur: '30 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=NgDaKmx3SoU',
      codeExample: '# إنشاء قائمة\nfruits = ["تفاح", "برتقال", "موز"]\n\n# الوصول للعناصر\nprint(fruits[0])   # تفاح\nprint(fruits[-1])  # موز (آخر عنصر)\n\n# تعديل القائمة\nfruits.append("عنب")      # إضافة\nfruits.remove("برتقال")   # حذف\nfruits.pop()              # حذف الأخير\n\n# Slicing\nnumbers = [0, 1, 2, 3, 4, 5]\nprint(numbers[1:4])  # [1, 2, 3]'
    },
    {
      num: 4,
      title: 'القواميس Dictionaries',
      description: 'فهم القواميس التي تخزن البيانات بشكل key-value، وكيفية الوصول للبيانات وتعديلها.',
      dur: '25 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=NgDaKmx3SoU&t=400',
      codeExample: '# إنشاء قاموس\nperson = {\n    "name": "أحمد",\n    "age": 25,\n    "city": "الرياض"\n}\n\n# الوصول للقيم\nprint(person["name"])       # أحمد\nprint(person.get("age"))    # 25\n\n# إضافة وتعديل\nperson["email"] = "test@example.com"\nperson["age"] = 26\n\n# حذف\ndel person["city"]'
    },
    {
      num: 5,
      title: 'الدوال Functions',
      description: 'كيفية إنشاء الدوال في Python، والمعاملات والقيم الافتراضية، والـ return.',
      dur: '35 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=JeznW_7DlB0',
      codeExample: '# دالة بسيطة\ndef greet(name):\n    return f"مرحباً، {name}!"\n\nprint(greet("أحمد"))\n\n# دالة مع قيمة افتراضية\ndef calculate_area(length, width=10):\n    return length * width\n\nprint(calculate_area(5))      # 50\nprint(calculate_area(5, 3))   # 15\n\n# دالة بأعداد متغيرة\ndef sum_all(*numbers):\n    return sum(numbers)\n\nprint(sum_all(1, 2, 3, 4))  # 10'
    },
    {
      num: 6,
      title: 'البرمجة كائنية التوجه OOP',
      description: 'مقدمة في البرمجة كائنية التوجه، وإنشاء Classes و Objects، والوراثة Inheritance.',
      dur: '50 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=JeznW_7DlB0&t=500',
      codeExample: '# تعريف Class\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"مرحباً، أنا {self.name}"\n\n# إنشاء Object\nperson1 = Person("أحمد", 25)\nprint(person1.greet())\n\n# الوراثة\nclass Student(Person):\n    def __init__(self, name, age, grade):\n        super().__init__(name, age)\n        self.grade = grade'
    },
    {
      num: 7,
      title: 'التعامل مع الملفات',
      description: 'قراءة وكتابة الملفات في Python، والـ Context Manager with.',
      dur: '25 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM',
      codeExample: '# كتابة ملف\nwith open("file.txt", "w", encoding="utf-8") as f:\n    f.write("مرحباً بالعالم!")\n\n# قراءة ملف\nwith open("file.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    print(content)\n\n# قراءة سطر بسطر\nwith open("file.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        print(line.strip())'
    },
    {
      num: 8,
      title: 'الاستثناءات Exceptions',
      description: 'التعامل مع الأخطاء باستخدام try و except و finally، وإنشاء استثناءات مخصصة.',
      dur: '20 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM&t=300',
      codeExample: 'try:\n    number = int(input("أدخل رقماً: "))\n    result = 10 / number\n    print(result)\nexcept ValueError:\n    print("خطأ: يجب إدخال رقم صحيح")\nexcept ZeroDivisionError:\n    print("خطأ: لا يمكن القسمة على صفر")\nfinally:\n    print("انتهى البرنامج")'
    },
  ],

  // ==================== Node.js - دورة Node.js ====================
  nodejs: [
    {
      num: 1,
      title: 'مقدمة في Node.js وتثبيتها',
      description: 'ما هي Node.js ولماذا نستخدمها، والفرق بينها وبين JavaScript في المتصفح، وكيفية تثبيتها.',
      dur: '20 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=JHhs6fsHPgM',
      codeExample: '// التحقق من الإصدار\n// node -v\n// npm -v\n\n// أول برنامج\nconsole.log("مرحباً من Node.js!");\n\n// تشغيل الملف\n// node app.js'
    },
    {
      num: 2,
      title: 'وحدات Node.js Modules',
      description: 'فهم نظام الوحدات في Node.js، واستخدام CommonJS و ES Modules، والوحدات المدمجة.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=JHhs6fsHPgM&t=300',
      codeExample: '// استيراد وحدات مدمجة\nconst fs = require(\'fs\');\nconst http = require(\'http\');\nconst path = require(\'path\');\n\n// إنشاء وحدة خاصة\n// math.js\nmodule.exports = {\n    add: (a, b) => a + b,\n    subtract: (a, b) => a - b\n};\n\n// استخدام الوحدة\nconst math = require(\'./math\');\nconsole.log(math.add(5, 3));'
    },
    {
      num: 3,
      title: 'إنشاء خادم HTTP بسيط',
      description: 'إنشاء أول خادم Node.js باستخدام وحدة http، والتعامل مع الطلبات والردود.',
      dur: '30 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=JHhs6fsHPgM&t=600',
      codeExample: 'const http = require(\'http\');\n\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, { \'Content-Type\': \'text/html; charset=utf-8\' });\n    res.end(\'<h1>مرحباً من الخادم!</h1>\');\n});\n\nserver.listen(3000, () => {\n    console.log(\'الخادم يعمل على http://localhost:3000\');\n});'
    },
    {
      num: 4,
      title: 'إطار العمل Express.js',
      description: 'مقدمة في Express.js، وإعداده، وإنشاء أول تطبيق، والتوجيه Routing.',
      dur: '40 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=JHhs6fsHPgM&t=900',
      codeExample: 'const express = require(\'express\');\nconst app = express();\n\n// Middleware\napp.use(express.json());\n\n// Routes\napp.get(\'/\', (req, res) => {\n    res.json({ message: \'مرحباً!\' });\n});\n\napp.post(\'/users\', (req, res) => {\n    const { name, email } = req.body;\n    res.status(201).json({ name, email });\n});\n\napp.listen(3000, () => console.log(\'الخادم يعمل!\'));'
    },
    {
      num: 5,
      title: 'RESTful API Design',
      description: 'تصميم APIs احترافية، واستخدام HTTP Methods بشكل صحيح، والـ Status Codes.',
      dur: '45 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=JHhs6fsHPgM&t=1200',
      codeExample: '// RESTful API Example\n\n// GET /api/users - جلب كل المستخدمين\napp.get(\'/api/users\', async (req, res) => {\n    const users = await User.find();\n    res.json(users);\n});\n\n// GET /api/users/:id - جلب مستخدم واحد\napp.get(\'/api/users/:id\', async (req, res) => {\n    const user = await User.findById(req.params.id);\n    if (!user) return res.status(404).json({ error: \'غير موجود\' });\n    res.json(user);\n});\n\n// POST /api/users - إنشاء مستخدم\napp.post(\'/api/users\', async (req, res) => {\n    const user = await User.create(req.body);\n    res.status(201).json(user);\n});'
    },
    {
      num: 6,
      title: 'MongoDB و Mongoose',
      description: 'التعامل مع قاعدة بيانات MongoDB، واستخدام Mongoose لإنشاء Schemas والتعامل مع البيانات.',
      dur: '50 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=JHhs6fsHPgM&t=1500',
      codeExample: 'const mongoose = require(\'mongoose\');\n\n// الاتصال بقاعدة البيانات\nmongoose.connect(\'mongodb://localhost:27017/myapp\');\n\n// إنشاء Schema\nconst userSchema = new mongoose.Schema({\n    name: { type: String, required: true },\n    email: { type: String, unique: true },\n    age: Number,\n    createdAt: { type: Date, default: Date.now }\n});\n\n// إنشاء Model\nconst User = mongoose.model(\'User\', userSchema);\n\n// استخدام Model\nconst user = await User.create({ name: \'أحمد\', email: \'test@test.com\' });'
    },
  ],

  // ==================== React - دورة React ====================
  react: [
    {
      num: 1,
      title: 'مقدمة في React وإعداد البيئة',
      description: 'ما هي React ولماذا نستخدمها، والفرق بينها وبين الـ vanilla JavaScript، وإعداد بيئة التطوير.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=ngk2tY2gzVQ',
      codeExample: '// إنشاء مشروع React جديد\n// npx create-react-app my-app\n// cd my-app\n// npm start\n\n// هيكل المشروع\n// src/\n//   ├── App.js\n//   ├── index.js\n//   └── components/'
    },
    {
      num: 2,
      title: 'المكونات Components',
      description: 'فهم المكونات في React، والفرق بين Functional و Class Components، وكيفية إنشاء مكونات قابلة لإعادة الاستخدام.',
      dur: '30 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=ngk2tY2gzVQ&t=300',
      codeExample: '// Functional Component\nfunction Welcome({ name }) {\n    return <h1>مرحباً، {name}!</h1>;\n}\n\n// Arrow Function Component\nconst Card = ({ title, children }) => (\n    <div className="card">\n        <h2>{title}</h2>\n        {children}\n    </div>\n);\n\n// استخدام المكون\n<Welcome name="أحمد" />\n<Card title="عنوان">محتوى</Card>'
    },
    {
      num: 3,
      title: 'JSX - كتابة HTML في JavaScript',
      description: 'شرح JSX بالتفصيل، والفرق بين JSX و HTML، وكيفية استخدام JavaScript داخل JSX.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=ngk2tY2gzVQ&t=600',
      codeExample: '// JSX أساسي\nconst element = <h1>مرحباً!</h1>;\n\n// استخدام المتغيرات\nconst name = "أحمد";\nconst greeting = <p>مرحباً، {name}!</p>;\n\n// التعبيرات\nconst sum = <p>المجموع: {5 + 3}</p>;\n\n// الـ Attributes\nconst img = <img src="image.jpg" alt="صورة" />;\n\n// الأنماط\nconst style = { color: \'red\', fontSize: \'20px\' };\nconst styled = <p style={style}>نص أحمر</p>;'
    },
    {
      num: 4,
      title: 'Props - تمرير البيانات',
      description: 'كيفية تمرير البيانات بين المكونات باستخدام Props، والـ Default Props.',
      dur: '20 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=ngk2tY2gzVQ&t=900',
      codeExample: '// تعريف Props\nfunction UserCard({ name, age, email = "غير محدد" }) {\n    return (\n        <div>\n            <h2>{name}</h2>\n            <p>العمر: {age}</p>\n            <p>البريد: {email}</p>\n        </div>\n    );\n}\n\n// استخدام\n<UserCard name="أحمد" age={25} />\n<UserCard name="سارة" age={30} email="sara@test.com" />'
    },
    {
      num: 5,
      title: 'State - الحالة في React',
      description: 'فهم الـ State وكيفية إدارة البيانات داخل المكون باستخدام useState Hook.',
      dur: '35 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=ngk2tY2gzVQ&t=1200',
      codeExample: 'import { useState } from \'react\';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    \n    return (\n        <div>\n            <p>العدد: {count}</p>\n            <button onClick={() => setCount(count + 1)}>زيادة</button>\n            <button onClick={() => setCount(0)}>إعادة تعيين</button>\n        </div>\n    );\n}'
    },
    {
      num: 6,
      title: 'useEffect - التأثيرات الجانبية',
      description: 'استخدام useEffect للتعامل مع التأثيرات الجانبية مثل الـ API calls و Subscription.',
      dur: '40 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=ngk2tY2gzVQ&t=1500',
      codeExample: 'import { useState, useEffect } from \'react\';\n\nfunction UserProfile({ userId }) {\n    const [user, setUser] = useState(null);\n    const [loading, setLoading] = useState(true);\n    \n    useEffect(() => {\n        fetch(`/api/users/${userId}`)\n            .then(res => res.json())\n            .then(data => {\n                setUser(data);\n                setLoading(false);\n            });\n    }, [userId]); // يعاد تنفيذه عند تغيير userId\n    \n    if (loading) return <p>جاري التحميل...</p>;\n    return <h1>{user.name}</h1>;\n}'
    },
  ],

  // ==================== Flutter - دورة Flutter ====================
  flutter: [
    {
      num: 1,
      title: 'مقدمة في Flutter وإعداد البيئة',
      description: 'ما هي Flutter ولماذا تُعد خياراً ممتازاً لتطوير التطبيقات، وإعداد بيئة التطوير على جهازك.',
      dur: '30 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=VPjVDJYlsQA',
      codeExample: '// التحقق من التثبيت\n// flutter doctor\n\n// إنشاء مشروع جديد\n// flutter create my_app\n// cd my_app\n// flutter run\n\n// هيكل المشروع\n// lib/\n//   └── main.dart'
    },
    {
      num: 2,
      title: 'أساسيات Dart للـ Flutter',
      description: 'مراجعة سريعة لأساسيات لغة Dart التي تحتاجها للعمل مع Flutter.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=VPjVDJYlsQA&t=300',
      codeExample: '// المتغيرات\nString name = \'أحمد\';\nint age = 25;\ndouble height = 1.75;\nbool isActive = true;\n\n// الدوال\nvoid greet(String name) {\n  print(\'مرحباً، $name!\');\n}\n\n// Classes\nclass User {\n  String name;\n  int age;\n  \n  User(this.name, this.age);\n  \n  void sayHello() {\n    print(\'مرحباً، أنا $name\');\n  }\n}'
    },
    {
      num: 3,
      title: 'Widgets الأساسية',
      description: 'فهم مفهوم Widget في Flutter، والـ Widgets الأساسية مثل Text, Container, Row, Column.',
      dur: '35 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=VPjVDJYlsQA&t=600',
      codeExample: 'import \'package:flutter/material.dart\';\n\nclass MyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text(\'عنوان\')),\n      body: Column(\n        children: [\n          Text(\'مرحباً!\'),\n          Container(\n            padding: EdgeInsets.all(16),\n            color: Colors.blue,\n            child: Text(\'محتوى\'),\n          ),\n        ],\n      ),\n    );\n  }\n}'
    },
    {
      num: 4,
      title: 'التخطيط Layout Widgets',
      description: 'استخدام Row و Column و Expanded و Flexible لإنشاء تخطيطات مرنة.',
      dur: '40 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=VPjVDJYlsQA&t=900',
      codeExample: 'Column(\n  children: [\n    Row(\n      children: [\n        Expanded(\n          child: Container(color: Colors.red, height: 100),\n        ),\n        Expanded(\n          flex: 2,\n          child: Container(color: Colors.blue, height: 100),\n        ),\n      ],\n    ),\n    Expanded(\n      child: Container(color: Colors.green),\n    ),\n  ],\n)'
    },
    {
      num: 5,
      title: 'التنقل بين الصفحات',
      description: 'كيفية التنقل بين الشاشات في Flutter باستخدام Navigator و Routes.',
      dur: '30 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=VPjVDJYlsQA&t=1200',
      codeExample: '// التنقل لصفحة جديدة\nNavigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => SecondPage()),\n);\n\n// العودة\nNavigator.pop(context);\n\n// التنقل باسم\nNavigator.pushNamed(context, \'/details\');\n\n// في MaterialApp\nMaterialApp(\n  routes: {\n    \'/\': (context) => HomePage(),\n    \'/details\': (context) => DetailsPage(),\n  },\n)'
    },
    {
      num: 6,
      title: 'State Management مع Provider',
      description: 'إدارة الحالة في Flutter باستخدام Provider، وهي الطريقة الأكثر شيوعاً.',
      dur: '45 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=VPjVDJYlsQA&t=1500',
      codeExample: '// إنشاء Model\nclass Counter extends ChangeNotifier {\n  int _count = 0;\n  int get count => _count;\n  \n  void increment() {\n    _count++;\n    notifyListeners();\n  }\n}\n\n// في main.dart\nMultiProvider(\n  providers: [\n    ChangeNotifierProvider(create: (_) => Counter()),\n  ],\n  child: MyApp(),\n)\n\n// استخدام\nConsumer<Counter>(\n  builder: (context, counter, child) {\n    return Text(\'${counter.count}\');\n  },\n)'
    },
  ],

  // ==================== SQL - دورة SQL ====================
  sql: [
    {
      num: 1,
      title: 'مقدمة في قواعد البيانات و SQL',
      description: 'ما هي قواعد البيانات العلائقية، وما هي SQL، ولماذا نحتاجها في تطوير التطبيقات.',
      dur: '20 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=KUISoGHTACc',
      codeExample: '-- ما هي SQL؟\n-- Structured Query Language\n-- لغة الاستعلام الهيكلية\n\n-- أنواع أوامر SQL:\n-- DDL: CREATE, ALTER, DROP\n-- DML: SELECT, INSERT, UPDATE, DELETE\n-- DCL: GRANT, REVOKE'
    },
    {
      num: 2,
      title: 'إنشاء الجداول CREATE TABLE',
      description: 'كيفية إنشاء الجداول وتعريف الأعمدة وأنواع البيانات المختلفة.',
      dur: '25 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=KUISoGHTACc&t=300',
      codeExample: 'CREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(255) UNIQUE,\n    age INT CHECK (age >= 0),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE orders (\n    id INT PRIMARY KEY,\n    user_id INT,\n    total DECIMAL(10, 2),\n    FOREIGN KEY (user_id) REFERENCES users(id)\n);'
    },
    {
      num: 3,
      title: 'إدخال البيانات INSERT',
      description: 'كيفية إضافة سجلات جديدة إلى الجداول باستخدام INSERT INTO.',
      dur: '15 دقيقة',
      free: true,
      videoUrl: 'https://www.youtube.com/watch?v=KUISoGHTACc&t=600',
      codeExample: '-- إدخال سجل واحد\nINSERT INTO users (name, email, age)\nVALUES (\'أحمد\', \'ahmed@test.com\', 25);\n\n-- إدخال عدة سجلات\nINSERT INTO users (name, email, age) VALUES\n(\'سارة\', \'sara@test.com\', 30),\n(\'محمد\', \'mohammed@test.com\', 28),\n(\'فاطمة\', \'fatima@test.com\', 22);'
    },
    {
      num: 4,
      title: 'الاستعلام SELECT',
      description: 'كيفية استرجاع البيانات من الجداول، وتصفية النتائج، وترتيبها.',
      dur: '30 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=KUISoGHTACc&t=900',
      codeExample: '-- استعلام بسيط\nSELECT * FROM users;\n\n-- أعمدة محددة\nSELECT name, email FROM users;\n\n-- التصفية بـ WHERE\nSELECT * FROM users WHERE age > 25;\n\n-- الترتيب\nSELECT * FROM users ORDER BY name ASC;\n\n-- تحديد عدد النتائج\nSELECT * FROM users LIMIT 10 OFFSET 20;'
    },
    {
      num: 5,
      title: 'تحديث وحذف البيانات UPDATE & DELETE',
      description: 'كيفية تعديل وحذف السجلات مع مراعاة الأمان.',
      dur: '20 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=KUISoGHTACc&t=1200',
      codeExample: '-- تحديث\nUPDATE users \nSET age = 26, email = \'new@test.com\'\nWHERE id = 1;\n\n-- تحديث متعدد\nUPDATE users \nSET age = age + 1\nWHERE age < 30;\n\n-- حذف\nDELETE FROM users WHERE id = 1;\n\n-- حذف متعدد\nDELETE FROM users WHERE age < 18;\n\n-- حذف الكل (احذر!)\n-- DELETE FROM users;'
    },
    {
      num: 6,
      title: 'الربط بين الجداول JOIN',
      description: 'الربط بين الجداول المختلفة باستخدام INNER JOIN و LEFT JOIN.',
      dur: '35 دقيقة',
      free: false,
      videoUrl: 'https://www.youtube.com/watch?v=KUISoGHTACc&t=1500',
      codeExample: '-- INNER JOIN\nSELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\n-- LEFT JOIN\nSELECT users.name, orders.total\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;\n\n-- JOIN متعدد\nSELECT u.name, o.total, p.product_name\nFROM users u\nJOIN orders o ON u.id = o.user_id\nJOIN products p ON o.product_id = p.id;'
    },
  ],
};

// ============================================================================
// أسئلة الاختبارات - كلها بالعربية
// ============================================================================
export const quizQuestions: QuizQuestion[] = [
  // أسئلة HTML
  { id: 'h1', category: 'web', question: 'ما الوسم الصحيح لعنوان رئيسي في HTML؟', options: ['<header>', '<h1>', '<title>', '<heading>'], answerIndex: 1 },
  { id: 'h2', category: 'web', question: 'ما وسم إنشاء رابط تشعبي؟', options: ['<link>', '<a>', '<href>', '<url>'], answerIndex: 1 },
  { id: 'h3', category: 'web', question: 'ما خاصية تحديد مصدر الصورة؟', options: ['link', 'href', 'src', 'url'], answerIndex: 2 },
  { id: 'h4', category: 'web', question: 'ما وسم إنشاء قائمة غير مرتبة؟', options: ['<ol>', '<ul>', '<li>', '<list>'], answerIndex: 1 },
  { id: 'h5', category: 'web', question: 'ما وسم إضافة سطر جديد؟', options: ['<br>', '<nl>', '<hr>', '<break>'], answerIndex: 0 },

  // أسئلة CSS
  { id: 'c1', category: 'web', question: 'خاصية تغيير لون الخلفية في CSS؟', options: ['color', 'font-color', 'background-color', 'text-background'], answerIndex: 2 },
  { id: 'c2', category: 'web', question: 'ما نظام التخطيط المرن في CSS؟', options: ['CSS Grid', 'Float', 'Flexbox', 'Position'], answerIndex: 2 },
  { id: 'c3', category: 'web', question: 'خاصية تعديل حجم الخط؟', options: ['text-size', 'font-size', 'font-weight', 'text-height'], answerIndex: 1 },
  { id: 'c4', category: 'web', question: 'ما قيمة display لإخفاء العنصر؟', options: ['invisible', 'hidden', 'none', 'hide'], answerIndex: 2 },
  { id: 'c5', category: 'web', question: 'وحدة القياس النسبية للخط؟', options: ['px', 'pt', 'rem', 'cm'], answerIndex: 2 },

  // أسئلة JavaScript
  { id: 'j1', category: 'js', question: 'ناتج typeof [] في JavaScript؟', options: ['array', 'object', 'list', 'undefined'], answerIndex: 1 },
  { id: 'j2', category: 'js', question: 'دالة إزالة آخر عنصر من مصفوفة؟', options: ['shift()', 'pop()', 'remove()', 'delete()'], answerIndex: 1 },
  { id: 'j3', category: 'js', question: 'ما معنى === في JavaScript؟', options: ['مساواة القيمة فقط', 'مساواة القيمة والنوع', 'أكبر أو يساوي', 'إسناد'], answerIndex: 1 },
  { id: 'j4', category: 'js', question: 'كيف تعرّف دالة سهمية؟', options: ['function() {}', 'fn() =>', '() => {}', 'def():'], answerIndex: 2 },
  { id: 'j5', category: 'js', question: 'دالة تحويل نص إلى رقم؟', options: ['toNumber()', 'parseInt()', 'convert()', 'Number.parse()'], answerIndex: 1 },
  { id: 'j6', category: 'js', question: 'ما الذي يُرجعه console.log؟', options: ['القيمة المطبوعة', 'undefined', 'true', 'null'], answerIndex: 1 },

  // أسئلة Python
  { id: 'p1', category: 'python', question: 'دالة الطباعة في Python؟', options: ['echo()', 'console.log()', 'print()', 'write()'], answerIndex: 2 },
  { id: 'p2', category: 'python', question: 'كيف تعرّف دالة في Python؟', options: ['function name():', 'def name():', 'func name():', 'define name():'], answerIndex: 1 },
  { id: 'p3', category: 'python', question: 'ما نوع البيانات لـ [1,2,3] في Python؟', options: ['array', 'list', 'tuple', 'dict'], answerIndex: 1 },
  { id: 'p4', category: 'python', question: 'كيف تعلّق سطر في Python؟', options: ['//', '/* */', '#', '--'], answerIndex: 2 },
  { id: 'p5', category: 'python', question: 'دالة طول قائمة في Python؟', options: ['size()', 'count()', 'length()', 'len()'], answerIndex: 3 },
  { id: 'p6', category: 'python', question: 'ما الفرق بين list و tuple؟', options: ['لا فرق', 'tuple قابل للتعديل', 'list قابل للتعديل', 'tuple أسرع فقط'], answerIndex: 2 },

  // أسئلة عامة
  { id: 'g1', category: 'general', question: 'ما معنى API؟', options: ['Application Programming Interface', 'Advanced Program Installation', 'Automated Protocol Integration', 'Application Process Index'], answerIndex: 0 },
  { id: 'g2', category: 'general', question: 'ماذا يعني HTTP؟', options: ['HyperText Transfer Protocol', 'High Transfer Technology Protocol', 'Host Text Transfer Process', 'HyperText Technology Processor'], answerIndex: 0 },
  { id: 'g3', category: 'general', question: 'ما هو Git؟', options: ['لغة برمجة', 'نظام تحكم بالإصدارات', 'قاعدة بيانات', 'خادم ويب'], answerIndex: 1 },
  { id: 'g4', category: 'general', question: 'ما معنى JSON؟', options: ['Java Script Object Notation', 'Java Serialized Object Network', 'JavaScript Online Notation', 'Java Standard Object Name'], answerIndex: 0 },
  { id: 'g5', category: 'general', question: 'أي منها لغة برمجة للخلفية Backend؟', options: ['HTML', 'CSS', 'Python', 'Figma'], answerIndex: 2 },
  { id: 'g6', category: 'general', question: 'ما هو الـ Frontend؟', options: ['الخادم', 'واجهة المستخدم', 'قاعدة البيانات', 'نظام التشغيل'], answerIndex: 1 },
];

// ============================================================================
// خارطة الطريق التعليمية
// ============================================================================
export const roadmapSteps: RoadmapStep[] = [
  {
    step: 1,
    title: 'أساسيات الويب',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    duration: '4-6 أسابيع',
    icon: 'fab fa-html5',
  },
  {
    step: 2,
    title: 'Git وأدوات التطوير',
    skills: ['Git', 'GitHub', 'Terminal', 'VS Code'],
    duration: '1-2 أسابيع',
    icon: 'fab fa-git-alt',
  },
  {
    step: 3,
    title: 'أطر العمل الأمامية',
    skills: ['React.js', 'Tailwind CSS', 'TypeScript'],
    duration: '6-8 أسابيع',
    icon: 'fab fa-react',
  },
  {
    step: 4,
    title: 'الخوادم وقواعد البيانات',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    duration: '6-8 أسابيع',
    icon: 'fab fa-node-js',
  },
  {
    step: 5,
    title: 'النشر والـ DevOps',
    skills: ['Docker', 'Vercel/Netlify', 'CI/CD', 'Nginx'],
    duration: '3-4 أسابيع',
    icon: 'fas fa-cloud',
  },
];

// ============================================================================
// إحصائيات المنصة
// ============================================================================
export const stats: Stat[] = [
  { value: 27400, label: 'طالب مسجّل', icon: 'fas fa-users', suffix: '+' },
  { value: 8, label: 'دورات متاحة', icon: 'fas fa-book-open' },
  { value: 520, label: 'درس في المناهج', icon: 'fas fa-video', suffix: '+' },
  { value: 4500, label: 'شهادة صدرت', icon: 'fas fa-trophy', suffix: '+' },
];

// ============================================================================
// المقالات التقنية
// ============================================================================
export const articles: Article[] = [
  {
    id: '1',
    title: 'أفضل 10 مشاريع للمبتدئين في JavaScript',
    description: 'تعلم JavaScript من خلال بناء مشاريع حقيقية تتراوح من السهل إلى المتقدم، مع شروحات مفصلة وكود جاهز.',
    icon: '📘',
    category: 'JavaScript',
    readTime: '8 دقائق',
  },
  {
    id: '2',
    title: 'دليلك الشامل لـ React Hooks',
    description: 'فهم عميق لجميع React Hooks الأساسية والمتقدمة مع أمثلة عملية من مشاريع حقيقية.',
    icon: '⚛️',
    category: 'React',
    readTime: '12 دقيقة',
  },
  {
    id: '3',
    title: 'كيف تبدأ في تعلم الذكاء الاصطناعي',
    description: 'خارطة طريق واضحة ومحددة للدخول إلى عالم AI وMachine Learning من الصفر.',
    icon: '🤖',
    category: 'AI',
    readTime: '10 دقائق',
  },
  {
    id: '4',
    title: 'نصائح لأداء أفضل في اختبارات البرمجة',
    description: 'استراتيجيات مجربة ونصائح عملية للنجاح في اختبارات التوظيف التقنية.',
    icon: '📝',
    category: 'مسار مهني',
    readTime: '6 دقائق',
  },
  {
    id: '5',
    title: 'مقارنة بين React و Vue و Angular',
    description: 'تحليل شامل لأشهر أطر العمل الأمامية مع مزايا وعيوب كل واحد.',
    icon: '⚖️',
    category: 'تطوير ويب',
    readTime: '15 دقيقة',
  },
  {
    id: '6',
    title: 'أساسيات الـ Clean Code',
    description: 'تعلم كيفية كتابة كود نظيف وقابل للصيانة يتبع أفضل الممارسات.',
    icon: '✨',
    category: 'أفضل الممارسات',
    readTime: '10 دقائق',
  },
];

// ============================================================================
// الكود الافتراضي للمحرر التفاعلي
// ============================================================================
export const defaultCode: Record<string, string> = {
  html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>صفحتي الأولى</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .card {
      background: white;
      padding: 2rem 2.5rem;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 25px 50px rgba(0,0,0,0.25);
      max-width: 400px;
      width: 100%;
    }
    h1 {
      color: #667eea;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }
    p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .btn {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 مرحباً بك!</h1>
    <p>هذه صفحتك الأولى مع HTML و CSS. جرّب تعديل الكود وشاهد النتيجة!</p>
    <button class="btn" onclick="alert('أحسنت! أنت الآن مبرمج 🎉')">اضغط هنا</button>
  </div>
</body>
</html>`,
  css: `/* ✨ تصميم بطاقة متحركة */
body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 350px;
}

.icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 40px;
  animation: float 3s ease-in-out infinite;
}

h2 {
  color: #fff;
  margin-bottom: 10px;
}

p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}`,
  js: `// 🚀 JavaScript للمبتدئين

console.log("مرحباً بك في عالم JavaScript!");

// ========== المتغيرات ==========
const name = "أحمد";
let age = 25;
console.log("الاسم:", name, "| العمر:", age);

// ========== المصفوفات ==========
const skills = ["HTML", "CSS", "JavaScript"];
console.log("المهارات:", skills.join(" - "));

// ========== الكائنات ==========
const user = {
  name: "سارة",
  role: "مطورة ويب",
  level: "متوسط"
};
console.log(\`\${user.name} هي \${user.role}\`);

// ========== الدوال ==========
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(10, 5);
console.log("مساحة المستطيل:", area);

// ========== البرمجة غير المتزامنة ==========
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("تم جلب البيانات!"), 1000);
  });
};

// استخدام async/await
async function loadData() {
  console.log("جاري التحميل...");
  const data = await fetchData();
  console.log(data);
}

loadData();`,
};

// ============================================================================
// آراء الطلاب
// ============================================================================
export const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'مطور Full Stack',
    avatar: '👨‍💻',
    text: 'منصة رائعة ساعدتني على الانتقال من مبتدئ إلى مطور محترف في أقل من سنة. المحتوى العربي ممتاز والشرح واضح جداً.',
    rating: 5,
  },
  {
    id: 2,
    name: 'سارة العلي',
    role: 'مطورة Frontend',
    avatar: '👩‍💻',
    text: 'دورات CSS و React غيرت مساري المهني تماماً. أنصح بها كل من يريد دخول عالم تطوير الويب.',
    rating: 5,
  },
  {
    id: 3,
    name: 'خالد الأحمد',
    role: 'مهندس AI',
    avatar: '🧑‍🔬',
    text: 'دورة الذكاء الاصطناعي شاملة جداً وغطت كل الأساسيات والمفاهيم المتقدمة بأسلوب سهل ومفهوم.',
    rating: 5,
  },
  {
    id: 4,
    name: 'نورة السالم',
    role: 'مطورة موبايل',
    avatar: '👩‍🎨',
    text: 'دورة Flutter ممتازة! استطعت بناء تطبيقي الأول خلال شهرين فقط من التعلم.',
    rating: 5,
  },
  {
    id: 5,
    name: 'محمد الراشد',
    role: 'مطور Backend',
    avatar: '👨‍💼',
    text: 'دورة Node.js و MongoDB قدمت لي كل ما أحتاج لبناء APIs احترافية. شكراً Code Academy Pro!',
    rating: 5,
  },
];
