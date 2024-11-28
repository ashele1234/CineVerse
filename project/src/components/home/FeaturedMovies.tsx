// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Star } from 'lucide-react';

// const featuredMovies = [
//   {
//     id: 1,
//     title: 'Inception',
//     image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     rating: 4.8,
//     genre: 'Sci-Fi',
//   },
//   {
//     id: 2,
//     title: 'The Dark Knight',
//     image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     rating: 4.9,
//     genre: 'Action',
//   },
//   {
//     id: 3,
//     title: 'Pulp Fiction',
//     image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     rating: 4.7,
//     genre: 'Crime',
//   },
//   // Add more movies as needed
// ];

export function FeaturedMovies() {
  return (
  <div className="container mx-auto p-4 mt-8">
   <h1 className="text-4xl font-bold mb-8 text-center">
    Featured Movies
   </h1>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Inception showing a cityscape bending in on itself" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/vJy6mAwBaO6bE545TbCyZybgdVZhT4eNQOLc0MvBiLMvFz5JA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Inception (2010)
      </h2>
      <p className="text-gray-700">
       Genre: Sci-Fi/Thriller
      </p>
      <p className="mt-2">
       A skilled thief who steals corporate secrets through the use of dream-sharing technology is given a chance to have his criminal history erased.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Shawshank Redemption showing two men standing in the rain" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/quPGa9R8h3pnO97FlYZ2BVsIASGL8vT1QPTK8KNg5H94i58E.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Shawshank Redemption (1994)
      </h2>
      <p className="text-gray-700">
       Genre: Drama
      </p>
      <p className="mt-2">
       Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Godfather showing Marlon Brando as Vito Corleone" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/kfPeR0UXLDsINUheQLRl0ruWdkuQMeA7XrgEjf4rdezJ0i58E.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Godfather (1972)
      </h2>
      <p className="text-gray-700">
       Genre: Crime/Drama
      </p>
      <p className="mt-2">
       An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Pulp Fiction showing John Travolta and Samuel L. Jackson holding guns" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/3gxCfJ4AiejkOE1JvVN1eHejK8OunjzXBU4tvVbvukRZtYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Pulp Fiction (1994)
      </h2>
      <p className="text-gray-700">
       Genre: Crime/Drama
      </p>
      <p className="mt-2">
       The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Dark Knight showing Batman standing in front of a burning building" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/JzQZprWdOzrDCtXjfChWvIKUYyS5S08JY1jzftXKfe9QsYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Dark Knight (2008)
      </h2>
      <p className="text-gray-700">
       Genre: Action/Crime
      </p>
      <p className="mt-2">
       When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Forrest Gump showing Tom Hanks sitting on a bench" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/51Uvv9WPeMVfckf8T2eJSk9N7HesST1uOlc422jRsJdBdxceE.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Forrest Gump (1994)
      </h2>
      <p className="text-gray-700">
       Genre: Drama/Romance
      </p>
      <p className="mt-2">
       The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with a low IQ.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Matrix showing Keanu Reeves as Neo in a futuristic setting" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/1FTZWVRsUVbuFt2n5YxtZSq1mm4M42GaAwXNpI0UDU32i58E.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Matrix (1999)
      </h2>
      <p className="text-gray-700">
       Genre: Sci-Fi/Action
      </p>
      <p className="mt-2">
       A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Parasite showing the Kim family in front of a modern house" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/IEXic2jlhSaxERaJvf1rIeTAxPu62en6n5X7qPpP34zKXMnnA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Parasite (2019)
      </h2>
      <p className="text-gray-700">
       Genre: Thriller/Drama
      </p>
      <p className="mt-2">
       A poor family schemes to become employed by a wealthy family by infiltrating their household, leading to an unexpected outcome.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Gladiator showing Russell Crowe as Maximus in a Roman arena" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/WVIAccCsdFq9E9UiSsAq3wfho3fzWyH3lyRePiG9jwQwWMnnA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Gladiator (2000)
      </h2>
      <p className="text-gray-700">
       Genre: Action/Drama
      </p>
      <p className="mt-2">
       A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Titanic showing Leonardo DiCaprio and Kate Winslet on the bow of the ship" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/JNSMO9p6XkKdMNGsgBS7f7RUk6DqJbf5O7eE25yFgfwItYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Titanic (1997)
      </h2>
      <p className="text-gray-700">
       Genre: Romance/Drama
      </p>
      <p className="mt-2">
       A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Silence of the Lambs showing Jodie Foster and Anthony Hopkins" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/TbPhYfdpfzn4t0QhedChdSOQedMhbsPGqmqgnrxm3Rq2tYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Silence of the Lambs (1991)
      </h2>
      <p className="text-gray-700">
       Genre: Thriller/Horror
      </p>
      <p className="mt-2">
       A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Fight Club showing Brad Pitt and Edward Norton" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/F1TrpwQmKB4XEhjxCIGQeeViUB8YqwfhaO0BuflT9TkvsYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Fight Club (1999)
      </h2>
      <p className="text-gray-700">
       Genre: Drama
      </p>
      <p className="mt-2">
       An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Lord of the Rings: The Fellowship of the Ring showing the fellowship walking in a line" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/wFAsNo8zeCwQECFCe9QMepGtAoQSiAQPfEMVqt6bQzhIuYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Lord of the Rings: The Fellowship of the Ring (2001)
      </h2>
      <p className="text-gray-700">
       Genre: Fantasy/Adventure
      </p>
      <p className="mt-2">
       A young hobbit named Frodo Baggins embarks on a quest to destroy a powerful ring that could bring doom to Middle-earth.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Social Network showing Jesse Eisenberg as Mark Zuckerberg" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/AwiNncIOGA4qKJ5BDPHDxQC01ftWfCGzbcNBYLUzqM7OLmzTA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Social Network (2010)
      </h2>
      <p className="text-gray-700">
       Genre: Biography/Drama
      </p>
      <p className="mt-2">
       As Harvard students create the social networking site that would become known as Facebook, they must deal with fame, fortune, and betrayal.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Mad Max: Fury Road showing Tom Hardy and Charlize Theron in a post-apocalyptic setting" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/SxkcSNpNWApGDttkgjjusme8Iof7fJ2PFBGJC81waxTOWMnnA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Mad Max: Fury Road (2015)
      </h2>
      <p className="text-gray-700">
       Genre: Action/Adventure
      </p>
      <p className="mt-2">
       In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical ruler and his army.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Inside Out showing the five emotions Joy, Fear, Anger, Disgust, and Sadness" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/fmnC8zNGB1xrKq8r3HvG3MH4V2oStFKAXPiFAcSBAIi1Fz5JA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Inside Out (2015)
      </h2>
      <p className="text-gray-700">
       Genre: Animation/Family
      </p>
      <p className="mt-2">
       After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions—Joy, Fear, Anger, Disgust, and Sadness—conflict on how best to navigate a new city, house, and school.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Get Out showing Daniel Kaluuya looking terrified" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/LVkaiBvKLEbODt9NAf0eZheEyrBiuHJKPjCq3tESc3kYWMnnA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Get Out (2017)
      </h2>
      <p className="text-gray-700">
       Genre: Horror/Thriller
      </p>
      <p className="mt-2">
       A young African-American man visits his white girlfriend's family estate, where he becomes ensnared in a sinister conspiracy.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie La La Land showing Ryan Gosling and Emma Stone dancing" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/ncSWF1xlBP6LIZMgwX12DfNdf9qvQq0gfiHkfsafNVNwYxceE.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       La La Land (2016)
      </h2>
      <p className="text-gray-700">
       Genre: Musical/Romance
      </p>
      <p className="mt-2">
       A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Spider-Man: Into the Spider-Verse showing multiple Spider-People" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/oDwfKXE5uesgokNFeCPs74a6sQk96EEOsHwvOPbVlx3AXMnnA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Spider-Man: Into the Spider-Verse (2018)
      </h2>
      <p className="text-gray-700">
       Genre: Animation/Action
      </p>
      <p className="mt-2">
       Teenager Miles Morales becomes the Spider-Man of his universe and must join forces with other Spider-People to stop a threat to all realities.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Avengers showing the main characters in action poses" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/cLweV4AHntXJRyPayGDY3eTI4mocksU4RIbw0vtYYI0VLmzTA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Avengers (2012)
      </h2>
      <p className="text-gray-700">
       Genre: Action/Sci-Fi
      </p>
      <p className="mt-2">
       Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Lion King showing Simba, Timon, and Pumbaa walking across a log" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/p5pNTl62uO7GK55WfRjg3aAsjSNxe7HigkcaWmvoXarmLmzTA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Lion King (1994)
      </h2>
      <p className="text-gray-700">
       Genre: Animation/Adventure
      </p>
      <p className="mt-2">
       A lion prince flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Interstellar showing Matthew McConaughey in a space suit" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/bfLff9lyIGLH0pD1rSKXCUiQFH9Shexfwq2EYawlxvIOaxceE.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Interstellar (2014)
      </h2>
      <p className="text-gray-700">
       Genre: Sci-Fi/Adventure
      </p>
      <p className="mt-2">
       A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Departed showing Leonardo DiCaprio and Matt Damon" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/QeYplMGdftoeeSyqE76jX4gJmM10O4fIcE7x4Ji3VoDe0i58E.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Departed (2006)
      </h2>
      <p className="text-gray-700">
       Genre: Crime/Thriller
      </p>
      <p className="mt-2">
       An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie Whiplash showing Miles Teller playing the drums" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/p629XOfyqXX0fU4lpcAxFHyke7PjB4LmNsoX4Re7aqblsYOPB.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       Whiplash (2014)
      </h2>
      <p className="text-gray-700">
       Genre: Drama/Music
      </p>
      <p className="mt-2">
       A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.
      </p>
     </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
     <img alt="Poster of the movie The Grand Budapest Hotel showing the hotel and its staff" className="w-full h-48 object-cover rounded-t-lg" height="200" src="https://storage.googleapis.com/a1aa/image/elY9W5NpPMQGeUG0Jt5wIdSt0p53J2CCt0xOIbw7I0mZLmzTA.jpg" width="300"/>
     <div className="p-4">
      <h2 className="text-2xl font-bold">
       The Grand Budapest Hotel (2014)
      </h2>
      &lt;p className="text-gray-
     </div>
    </div>
   </div>
  </div>)}
