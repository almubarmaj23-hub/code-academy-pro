"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, RotateCcw, Copy, Check } from "lucide-react";
import { defaultCode } from "@/lib/data";

const languages = [
  { id: "html", label: "HTML", icon: "🌐" },
  { id: "css", label: "CSS", icon: "🎨" },
  { id: "js", label: "JS", icon: "⚡" },
];

export function CodeEditor() {
  const [language, setLanguage] = useState<"html" | "css" | "js">("html");
  const [code, setCode] = useState(defaultCode.html);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runCode = useCallback(() => {
    setConsoleOutput(["▶ جارٍ التشغيل..."]);

    if (language === "html") {
      setOutput(code);
      setConsoleOutput((prev) => [...prev, "✅ تم التشغيل بنجاح"]);
    } else if (language === "css") {
      const htmlWrapper = `<!DOCTYPE html>
<html>
<head><style>${code}</style></head>
<body>
  <div class="box"></div>
  <div class="text">CSS ✨</div>
</body>
</html>`;
      setOutput(htmlWrapper);
      setConsoleOutput((prev) => [...prev, "✅ تم التشغيل بنجاح"]);
    } else if (language === "js") {
      const logs: string[] = [];
      const jsCode = code;
      try {
        // Safe JS execution using Function constructor
        const fn = new Function("console", jsCode);
        fn({
          log: (...args: unknown[]) => {
            logs.push(args.map((a) => String(a)).join(" "));
          },
        });
        setConsoleOutput(logs);
        const htmlWrapper = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: monospace;
      background: #0d0d1f;
      color: #22c55e;
      padding: 1rem;
      line-height: 1.8;
    }
    .log { padding: 0.25rem 0; }
  </style>
</head>
<body>
  ${logs.map((log) => `<div class="log">→ ${log}</div>`).join("")}
</body>
</html>`;
        setOutput(htmlWrapper);
      } catch (e) {
        setConsoleOutput(["❌ خطأ في تنفيذ الكود: " + String(e)]);
      }
    }
  }, [code, language]);

  const resetCode = useCallback(() => {
    setCode(defaultCode[language]);
    setOutput("");
    setConsoleOutput([]);
  }, [language]);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleLanguageChange = (lang: "html" | "css" | "js") => {
    setLanguage(lang);
    setCode(defaultCode[lang]);
    setOutput("");
    setConsoleOutput([]);
  };

  return (
    <section id="editor" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-cyan-500 border-cyan-500/30">
            💻 المحرر التفاعلي
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            اكتب <span className="gradient-text">الكود</span> وشاهد النتيجة فوراً
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            جرّب البرمجة مباشرة في المتصفح — HTML، CSS، JavaScript
          </p>
        </div>

        {/* Editor Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Code Input */}
          <Card className="border-border overflow-hidden">
            <CardHeader className="p-4 border-b border-border bg-muted/50">
              <div className="flex items-center justify-between">
                <Tabs
                  value={language}
                  onValueChange={(v) => handleLanguageChange(v as typeof language)}
                >
                  <TabsList className="bg-background">
                    {languages.map((lang) => (
                      <TabsTrigger
                        key={lang.id}
                        value={lang.id}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        <span className="mr-1">{lang.icon}</span>
                        {lang.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={copyCode}>
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" onClick={resetCode}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={runCode}
                  >
                    <Play className="w-4 h-4 ml-1" />
                    تشغيل
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-[400px] p-4 bg-[#0d0d1f] text-gray-100 font-mono text-sm resize-none focus:outline-none border-none placeholder:text-gray-500"
                  dir="ltr"
                  spellCheck={false}
                  placeholder="اكتب الكود هنا..."
                />
              </div>
              {/* Console Output */}
              {consoleOutput.length > 0 && (
                <div className="border-t border-border bg-[#0a0a1a] p-3 font-mono text-xs text-green-500 max-h-32 overflow-y-auto">
                  {consoleOutput.map((log, i) => (
                    <div key={i} className="py-0.5">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-border overflow-hidden">
            <CardHeader className="p-4 border-b border-border bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  معاينة النتيجة
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                srcDoc={output}
                className="w-full h-[400px] bg-white"
                sandbox="allow-scripts"
                title="Code Preview"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
