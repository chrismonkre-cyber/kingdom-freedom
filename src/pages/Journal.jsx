import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { Trash2, Plus, BookOpen } from "lucide-react";

const PROMPTS = [
  "What chain am I surrendering to Jesus today?",
  "What truth is God asking me to believe?",
  "Where have I seen breakthrough?",
  "What lie am I replacing with Scripture?",
  "What victory am I thanking God for?",
  "How will I guard my freedom this week?",
];

function loadEntries() {
  const raw = localStorage.getItem("kf_journal");
  return raw ? JSON.parse(raw) : [];
}

function saveEntries(entries) {
  localStorage.setItem("kf_journal", JSON.stringify(entries));
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    saveEntries(entries);
  }, [entries]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    if (editingId) {
      setEntries(entries.map(e => e.id === editingId ? { ...e, title, date, content } : e));
      setEditingId(null);
    } else {
      setEntries([{ id: Date.now().toString(), title, date, content }, ...entries]);
    }
    setTitle("");
    setDate(new Date().toISOString().slice(0, 10));
    setContent("");
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      setEntries(entries.filter(e => e.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setTitle("");
        setContent("");
      }
    }
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setTitle(entry.title);
    setDate(entry.date);
    setContent(entry.content);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWrapper pageKey="journal">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <PageHeader
            title="Freedom Journal"
            subtitle="Write the journey. Remember the breakthrough."
          />

          {/* Prompts */}
          <GlassCard gold className="mb-6">
            <h3 className="font-cinzel text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3">Journal Prompts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PROMPTS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setContent(content ? content + "\n\n" + p : p)}
                  className="text-left font-lora text-xs text-yellow-50/80 hover:text-yellow-200 bg-yellow-900/20 border border-yellow-600/20 rounded-lg px-3 py-2 transition-colors cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          </GlassCard>

          {/* Form */}
          <GlassCard className="mb-6">
            <h3 className="font-cinzel text-lg font-bold text-yellow-200 mb-4">
              {editingId ? "Edit Entry" : "New Entry"}
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Journal title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-red-950/40 border border-yellow-600/30 rounded-lg px-4 py-3 font-lora text-yellow-50 placeholder-yellow-200/40 focus:outline-none focus:border-yellow-500/60 text-sm"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-red-950/40 border border-yellow-600/30 rounded-lg px-4 py-3 font-lora text-yellow-50 focus:outline-none focus:border-yellow-500/60 text-sm"
              />
              <textarea
                placeholder="Write your thoughts, prayers, breakthroughs..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full bg-red-950/40 border border-yellow-600/30 rounded-lg px-4 py-3 font-lora text-yellow-50 placeholder-yellow-200/40 focus:outline-none focus:border-yellow-500/60 text-sm resize-none"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-yellow-50 border border-yellow-400/40 hover:from-yellow-500/90 hover:to-yellow-400/90 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  {editingId ? "Update" : "Save Entry"}
                </button>
                {editingId && (
                  <button
                    onClick={() => { setEditingId(null); setTitle(""); setContent(""); }}
                    className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-red-950/50 text-yellow-200 border border-yellow-600/30 hover:bg-red-900/60 transition-all"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </GlassCard>

          {/* Entries */}
          {entries.length === 0 ? (
            <GlassCard className="text-center py-12">
              <BookOpen className="w-12 h-12 text-yellow-400/40 mx-auto mb-3" />
              <p className="font-lora text-yellow-200/60 text-sm">Your freedom story begins with the first entry...</p>
            </GlassCard>
          ) : (
            <div className="space-y-3">
              {entries.map((entry) => (
                <GlassCard key={entry.id}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-cinzel text-base font-bold text-yellow-200">{entry.title}</h4>
                      <p className="font-lora text-xs text-yellow-400/70">{entry.date}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEdit(entry)}
                        className="text-yellow-400/60 hover:text-yellow-300 transition-colors text-xs font-cinzel"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="text-red-400/60 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-lora text-base text-white leading-relaxed whitespace-pre-wrap">{entry.content}</p>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
