const movies = [
    {
        id: 1,
        Image1: "/image/picture1.jpg",
        Image2: "/image/background.jpg",
        title: "Interstellar",
        description: {
            title: "Mankind was born on Earth. It was never meant to die here.",
            description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
        },
        type: {
            title: "Adventure, Drama, Science Fiction",
            description: "Legendary Pictures, Syncopy, Lynda Obst Productions"
        },
        originalRelease: {
            title: "Original Release:",
            description: "2014-11-15"
        },
        runtime: {
            title: "Runtime:",
            description: "169 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$165,000,000"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.439"
        }
    },
    {
        id: 2,
        Image1: "/image/picture2.jpg",
        Image2: "/image/background2.jpg",
        title: "Inception",
        description: {
            title: "Your mind is the scene of the crime.",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious is given the inverse task of planting an idea into the mind of a CEO."
        },
        type: {
            title: "Action, Adventure, Science Fiction",
            description: "Warner Bros., Syncopy"
        },
        originalRelease: {
            title: "Original Release:",
            description: "2010-07-16"
        },
        runtime: {
            title: "Runtime:",
            description: "148 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$829,895,144"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.8"
        }
    },
    {
        id: 3,
        Image1: "/image/picture3.jpg",
        Image2: "/image/background3.jpg",
        title: "The Dark Knight",
        description: {
            title: "Why so serious?",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to embark on a quest to stop him."
        },
        type: {
            title: "Action, Crime, Drama",
            description: "Warner Bros., Legendary Pictures"
        },
        originalRelease: {
            title: "Original Release:",
            description: "2008-07-18"
        },
        runtime: {
            title: "Runtime:",
            description: "152 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$1,005,456,031"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "9.0"
        }
    },
    {
        id: 4,
        Image1: "/image/picture4.jpg",
        Image2: "/image/background4.jpg",
        title: "The Matrix",
        description: {
            title: "Welcome to the real world.",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        },
        type: {
            title: "Action, Sci-Fi",
            description: "Warner Bros., Village Roadshow Pictures"
        },
        originalRelease: {
            title: "Original Release:",
            description: "1999-03-31"
        },
        runtime: {
            title: "Runtime:",
            description: "136 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$465,343,787"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.7"
        }
    },
    {
        id: 5,
        Image1: "/image/picture5.jpg",
        Image2: "/image/background5.jpg",
        title: "Pulp Fiction",
        description: {
            title: "Just because you are a character doesn't mean you have character.",
            description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
        type: {
            title: "Crime, Drama",
            description: "A Band Apart, Miramax"
        },
        originalRelease: {
            title: "Original Release:",
            description: "1994-10-14"
        },
        runtime: {
            title: "Runtime:",
            description: "154 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$214,179,000"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.9"
        }
    },
    {
        id: 6,
        Image1: "/image/picture6.jpg",
        Image2: "/image/background6.jpg",
        title: "Fight Club",
        description: {
            title: "How much can you know about yourself if you've never been in a fight?",
            description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into much more."
        },
        type: {
            title: "Drama",
            description: "Fox 2000 Pictures, Regency Enterprises"
        },
        originalRelease: {
            title: "Original Release:",
            description: "1999-10-15"
        },
        runtime: {
            title: "Runtime:",
            description: "139 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$101,209,702"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.8"
        }
    },
    {
        id: 7,
        Image1: "/image/picture7.jpg",
        Image2: "/image/background7.jpg",
        title: "The Shawshank Redemption",
        description: {
            title: "Fear can hold you prisoner. Hope can set you free.",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
        type: {
            title: "Drama",
            description: "Columbia Pictures"
        },
        originalRelease: {
            title: "Original Release:",
            description: "1994-09-23"
        },
        runtime: {
            title: "Runtime:",
            description: "142 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$28,341,469"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "9.3"
        }
    },
    {
        id: 8,
        Image1: "/image/picture8.jpg",
        Image2: "/image/background8.jpg",
        title: "The Godfather",
        description: {
            title: "An offer you can't refuse.",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
        type: {
            title: "Crime, Drama",
            description: "Paramount Pictures"
        },
        originalRelease: {
            title: "Original Release:",
            description: "1972-03-24"
        },
        runtime: {
            title: "Runtime:",
            description: "175 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$246,120,974"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "9.2"
        }
        // Thêm các đối tượng phim khác vào đây
    }
];
export default movies;