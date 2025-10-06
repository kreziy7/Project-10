import { Calendar, User, Tag } from 'lucide-react';

export function BlogCard({ blog, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] h-[400px]"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/30">
          <Tag className="w-3 h-3" />
          {blog.category}
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-2xl mb-3 line-clamp-2 leading-tight group-hover:text-yellow-300 transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-white/90 text-sm mb-4 line-clamp-2 leading-relaxed">
          {blog.description}
        </p>

        <div className="flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <Calendar className="w-3.5 h-3.5" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <User className="w-3.5 h-3.5" />
            <span>{blog.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
