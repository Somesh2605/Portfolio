import { ArrowUpRight } from "lucide-react"
import { Github } from "lucide-react"

export default function ProjectCard({ title, subtitle, bullets, tags, githubLink }) {
  return (
    <div className="border border-gray-800 p-10 rounded-2xl bg-[#0f0f0f] hover:border-gray-600 transition">

      {/* Clickable Title */}
     <h3 className="text-3xl font-semibold mb-3">
  <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-xl font-semibold hover:text-gray-300 transition"

  >
    <span className="inline">{title}</span>
  <Github size={26} className="inline ml-2 text-white-400 align-middle shrink-0"/>
</a>

</h3>




      {/* Subtitle */}
      <p className="text-gray-400 mb-6 text-lg">
        {subtitle}
      </p>

      {/* Bullet Points */}
      <ul className="list-disc list-outside pl-5 text-white space-y-3 leading-relaxed mb-8">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-sm px-4 py-2 rounded-lg text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  )
}
