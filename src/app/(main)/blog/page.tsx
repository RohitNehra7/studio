
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Rise of Sustainable Architecture',
    date: 'October 26, 2023',
    excerpt: 'Exploring how eco-friendly materials and design are shaping the future of our cities and homes. We delve into the latest innovations and how they contribute to a greener planet.',
    image: 'https://images.unsplash.com/photo-1466678914828-09436531519a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nfGVufDB8fHx8fDE3NTQ1ODEzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'green building',
    tags: ['Sustainability', 'Innovation']
  },
  {
    id: 2,
    title: 'Minimalism: The Art of Less in Design',
    date: 'October 15, 2023',
    excerpt: 'A deep dive into the principles of minimalism and how it creates serene and functional spaces.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NTgxMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'minimalist interior',
    tags: ['Design', 'Philosophy']
  },
  {
    id: 3,
    title: 'Integrating Smart Technology in Modern Homes',
    date: 'September 30, 2023',
    excerpt: 'From automated lighting to intelligent climate control, see how tech is revolutionizing residential architecture.',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWV8ZW58MHx8fHwxNzU0NTgxMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'smart home',
    tags: ['Technology', 'Residential']
  },
   {
    id: 4,
    title: 'The Timeless Allure of Brutalism',
    date: 'September 12, 2023',
    excerpt: 'Rediscovering the raw beauty and powerful forms of brutalist architecture in the 21st century.',
    image: 'https://images.unsplash.com/photo-1599905292461-6aa8767355ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTQ1ODE0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'brutalist building',
    tags: ['History', 'Design']
  },
  {
    id: 5,
    title: 'Biophilic Design: Connecting with Nature',
    date: 'August 28, 2023',
    excerpt: 'How incorporating natural elements into our buildings can improve well-being and productivity.',
    image: 'https://images.unsplash.com/photo-1558985250-2d88b4d84c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHN8ZW58MHx8fHwxNzU0NTgxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'indoor plants',
    tags: ['Wellness', 'Sustainability']
  },
  {
    id: 6,
    title: 'The Future of Urban Planning',
    date: 'August 05, 2023',
    excerpt: 'What will our cities look like in 2050? We explore the trends shaping urban landscapes.',
    image: 'https://images.unsplash.com/photo-1545431681-86a7479a8f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBjaXR5fGVufDB8fHx8fDE3NTQ1ODE0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'future city',
    tags: ['Urbanism', 'Innovation']
  },
];

const featuredPost = blogPosts[0];
const otherPosts = blogPosts.slice(1);

export default function BlogPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="text-center py-16 md:py-24 bg-gradient-to-b from-card to-background">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Architectural Insights</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our thoughts on design, innovation, and the future of architecture.
        </p>
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Featured Post */}
      <Card className="mb-16 grid md:grid-cols-2 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-primary">
        <div className="overflow-hidden">
            <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={featuredPost.hint}
                priority
            />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
            <CardHeader className="p-0">
                <div className="flex items-center gap-4 mb-4">
                    {featuredPost.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">{tag}</Badge>
                    ))}
                </div>
                <CardTitle className="font-headline text-3xl md:text-4xl text-primary mb-3">{featuredPost.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{featuredPost.date}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
                <p className="text-foreground/80 text-lg">{featuredPost.excerpt}</p>
            </CardContent>
            <CardFooter className="p-0 pt-8">
                 <Button size="lg" asChild>
                    <Link href="#">
                    Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </CardFooter>
        </div>
      </Card>


      {/* Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherPosts.map(post => (
          <Card key={post.id} className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-primary">
            <CardHeader className="p-0">
               <div className="overflow-hidden aspect-video">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint={post.hint}
                />
               </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-3">
                 {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="font-headline text-2xl text-primary mb-2">{post.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">{post.date}</CardDescription>
              <p className="text-foreground/80 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0">
                <Link href="#">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}
