import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Watch Movies of 2024',
    excerpt: 'Discover the most compelling and innovative films that have captured audiences this year.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Lists',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'The Evolution of Special Effects in Cinema',
    excerpt: 'From practical effects to CGI: How movie magic has transformed over the decades.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    date: '2024-03-10',
  },
  {
    id: 3,
    title: 'Interview: Rising Stars of Independent Film',
    excerpt: 'Meet the emerging filmmakers who are reshaping the landscape of independent cinema.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Interviews',
    date: '2024-03-05',
  },
];

const categories = ['All', 'Lists', 'Reviews', 'Technology', 'Interviews'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Blog</h1>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover aspect-video md:aspect-square"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}