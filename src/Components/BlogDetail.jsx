import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

export function BlogDetail({ blog, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-all duration-300 group bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Назад к блогам</span>
        </button>

        <article className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded-full text-black text-sm font-bold">
                <Tag className="w-4 h-4" />
                {blog.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-white text-5xl font-bold mb-6 leading-tight drop-shadow-2xl">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{blog.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                  <span className="font-medium">Поделиться</span>
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white leading-relaxed mb-8 font-light">
                {blog.description}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                Современная нефтегазовая промышленность переживает период трансформации,
                связанный с внедрением инновационных технологий и адаптацией к новым
                рыночным условиям. Компании отрасли активно инвестируют в модернизацию
                производственных мощностей и повышение эффективности операций.
              </p>

              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                Особое внимание уделяется вопросам экологической безопасности и
                устойчивого развития. Внедрение зеленых технологий и снижение углеродного
                следа становятся приоритетными направлениями деятельности ведущих
                нефтяных компаний мира.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Ключевые направления развития
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <p className="text-white/80 leading-relaxed text-lg">
                  Цифровизация производственных процессов открывает новые возможности для
                  оптимизации добычи и переработки углеводородов. Использование систем
                  искусственного интеллекта и анализа больших данных позволяет повысить
                  точность прогнозирования и принятия управленческих решений.
                </p>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                Международное сотрудничество играет важную роль в обмене технологиями
                и лучшими практиками. Партнерства между компаниями разных стран
                способствуют ускорению инновационного развития всей отрасли.
              </p>
              <h2 className="text-3xl font-bold text-white mt-12 mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Перспективы на будущее
              </h2>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 mb-6">
                <p className="text-white/90 leading-relaxed text-lg">
                  Эксперты прогнозируют дальнейшее усиление роли технологий в нефтегазовой
                  отрасли. Автоматизация процессов, развитие альтернативных источников
                  энергии и повышение энергоэффективности станут определяющими факторами
                  конкурентоспособности компаний в ближайшие десятилетия.
                </p>
              </div>
              <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/30">
                <p className="text-white text-center font-medium text-lg">
                  Будущее отрасли зависит от нашей способности адаптироваться к изменениям и внедрять инновации
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
