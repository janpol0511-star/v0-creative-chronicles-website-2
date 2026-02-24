"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const stories = [
  {
    name: "Aljun",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Jan 17, 2022",
    story: "When Aljun joined our team as a sales agent, he was fresh out of college with a passion for books but limited sales experience. With our comprehensive training and supportive environment, Aljun quickly developed his skills. Within a year, he became the top performer, securing major book deals with national retailers. Aljun's story is a testament to how determination and the right company culture can turn a novice into a sales leader.",
    highlight: "Top Performer",
    color: "bg-primary",
  },
  {
    name: "Jasper",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Aug 2, 2023",
    story: "Jasper came to us with a background in retail, but little experience in publishing sales. He embraced the challenge of learning the industry and found success through persistence and the tailored strategies we provide to our sales agents. In just six months, Jasper broke the company record for the most sales in a quarter, successfully landing our books on the shelves of leading bookstores nationwide.",
    highlight: "Record Breaker",
    color: "bg-secondary",
  },
  {
    name: "Romulo",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    date: "Aug 20, 2023",
    story: "Romulo initially joined our team as a part-time sales agent while pursuing his degree in literature. What started as a side job soon became a full-blown passion. With our flexible work structure, he was able to balance his studies and work. Today, Romulo manages some of our top clients, and his innovative approach has helped us expand our reach into new markets. His success story is one of passion turning into a fulfilling career.",
    highlight: "Client Manager",
    color: "bg-accent",
  },
]

export function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section id="stories" className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 animate-fade-in-down text-sm font-semibold uppercase tracking-wider text-accent">
            Real Stories
          </p>
          <h2 className="mb-4 animate-fade-in-up text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="mx-auto max-w-2xl animate-fade-in-up text-pretty text-lg text-muted-foreground animation-delay-200">
            See how our sales agents have transformed their careers at Creative Chronicle Solutions.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-12 animate-scale-in overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden lg:aspect-auto">
              <img
                src={stories[activeIndex].image || "/placeholder.svg"}
                alt={stories[activeIndex].name}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className={`absolute left-4 top-4 rounded-full ${stories[activeIndex].color} px-4 py-1`}>
                <span className="text-sm font-semibold text-primary-foreground">
                  {stories[activeIndex].highlight}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <Quote className="mb-4 h-10 w-10 text-primary/30" />
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {stories[activeIndex].story}
              </p>
              <div className="mb-6">
                <p className="text-xl font-bold text-card-foreground">
                  {stories[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stories[activeIndex].date}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevStory}
                  className="rounded-full bg-transparent"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous story</span>
                </Button>
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={`story-${index}-dot`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    >
                      <span className="sr-only">Go to story {index + 1}</span>
                    </button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextStory}
                  className="rounded-full bg-transparent"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next story</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story, index) => (
            <button
              key={story.name}
              onClick={() => setActiveIndex(index)}
              className={`animate-fade-in-up overflow-hidden rounded-2xl border bg-card p-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index === activeIndex
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.date}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
