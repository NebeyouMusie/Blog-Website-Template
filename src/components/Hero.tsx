import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-down text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-transparent">
              BlogFolio
            </span>
          </h1>
          <p className="animate-fade-up mt-6 text-lg text-muted-foreground">
            Discover stories, thinking, and expertise from writers on any topic.
            Share your ideas with millions of readers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="animate-fade-up [animation-delay:200ms]">
              Start Reading
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="animate-fade-up [animation-delay:400ms]"
            >
              Start Writing
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden rounded-b-[3rem] bg-gradient-to-b from-primary/5 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}