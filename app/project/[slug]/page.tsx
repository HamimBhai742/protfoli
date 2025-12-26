import { projects } from '../../../ProjectsData/projects';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import ProjectImageSlider from '../../../components/ProjectImageSlider';

const ProjectDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    notFound();
  }

  const allImages = project.images || [project.image];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-purple-900/50 to-slate-900/80" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-4 h-4 border border-indigo-400/30 rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-purple-400/30 animate-float animation-delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-indigo-400/20 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 animate-slide-up"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold linear-text mb-6 animate-slide-up animation-delay-200">
            {project.title}
          </h1>

          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl animate-slide-up animation-delay-300">
              <Tag size={16} className="text-indigo-400" />
              <span className="text-gray-300">{project.category}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl animate-slide-up animation-delay-400">
              <Calendar size={16} className="text-purple-400" />
              <span className="text-gray-300">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl animate-slide-up animation-delay-500">
              <User size={16} className="text-cyan-400" />
              <span className="text-gray-300">{project.role}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-xl hover:bg-indigo-600/20 transition-all duration-300 animate-glow animate-slide-up animation-delay-600"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-xl hover:bg-purple-600/20 transition-all duration-300 animate-slide-up animation-delay-700"
            >
              <Github size={20} />
              Source Code
            </a>
          </div>
        </div>

        {/* Image Gallery Slider */}
        <ProjectImageSlider images={allImages} title={project.title} />

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="animate-slide-up animation-delay-1000">
              <h2 className="text-3xl font-bold mb-6 linear-text">
                About This Project
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features Section */}
            {project.features && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white animate-slide-up animation-delay-1100">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-4 glass-effect rounded-xl hover:bg-white/5 hover:scale-105 transition-all duration-500 animate-slide-up animation-delay-${1200 + (index * 100)} hover:animate-pulse-glow`}
                    >
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-glow" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Section */}
            {project.challenges && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white animate-slide-up animation-delay-1300">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className={`p-4 glass-effect rounded-xl border-l-4 border-orange-400/50 hover:border-orange-400/80 hover:bg-orange-400/5 hover:scale-[1.02] transition-all duration-500 animate-slide-up animation-delay-${1400 + (index * 150)} hover:animate-float`}
                    >
                      <span className="text-gray-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Future Improvements */}
            {project.potentialImprovements && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white animate-slide-up animation-delay-1500">
                  Future Enhancements
                </h3>
                <div className="space-y-4">
                  {project.potentialImprovements.map((improvement, index) => (
                    <div
                      key={index}
                      className={`p-4 glass-effect rounded-xl border-l-4 border-green-400/50 hover:border-green-400/80 hover:bg-green-400/5 hover:scale-[1.02] transition-all duration-500 animate-slide-up animation-delay-${1600 + (index * 150)} hover:animate-glow`}
                    >
                      <span className="text-gray-300">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-6 linear-text animate-slide-up animation-delay-1100">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 glass-effect rounded-full text-sm border border-white/10 hover:border-indigo-400/50 hover:scale-105 transition-all duration-300 animate-slide-up animation-delay-${1200 + (index * 50)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white animate-slide-up animation-delay-1400">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="p-4 glass-effect rounded-xl hover:bg-indigo-400/5 transition-all duration-300 animate-slide-up animation-delay-1500">
                  <h4 className="font-semibold text-indigo-400 mb-2">Category</h4>
                  <p className="text-gray-300">{project.category}</p>
                </div>
                <div className="p-4 glass-effect rounded-xl hover:bg-purple-400/5 transition-all duration-300 animate-slide-up animation-delay-1600">
                  <h4 className="font-semibold text-purple-400 mb-2">Duration</h4>
                  <p className="text-gray-300">{project.duration}</p>
                </div>
                <div className="p-4 glass-effect rounded-xl hover:bg-cyan-400/5 transition-all duration-300 animate-slide-up animation-delay-1700">
                  <h4 className="font-semibold text-cyan-400 mb-2">Role</h4>
                  <p className="text-gray-300">{project.role}</p>
                </div>
                <div className="p-4 glass-effect rounded-xl hover:bg-green-400/5 transition-all duration-300 animate-slide-up animation-delay-1800">
                  <h4 className="font-semibold text-green-400 mb-2">Status</h4>
                  <p className="text-gray-300">Completed & Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-3xl p-8 border border-white/10 hover:scale-[1.02] hover:bg-white/5 transition-all duration-500 animate-slide-up animation-delay-1900">
            <h3 className="text-3xl font-bold linear-text mb-4">
              Interested in Similar Work?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on innovative projects. Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 font-semibold animate-glow"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
