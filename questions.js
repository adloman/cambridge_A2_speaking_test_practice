const questionBank = [
    { 
        q: "1. What is your favorite color?", 
        options: [
            { text: "My favorite color is blue because it is the color of the sea. What about you?", score: 100, feedback: "Excellent detail and interaction!" },
            { text: "I like blue more better than red because is very nice.", score: 0, feedback: "TRAP! 'More better' and 'because is' (missing subject) are errors." },
            { text: "I like green because it is the color of nature.", score: 75, feedback: "Good, but try to ask a question back." },
            { text: "I like red.", score: 50, feedback: "Correct but very short." }
        ] 
    },
    { 
        q: "2. Do you have any pets?", 
        options: [
            { text: "Yes, I have a dog named Max. He is very friendly. Do you have a pet?", score: 100, feedback: "Great details and follow-up!" },
            { text: "No, I am not have pets because my mother is hate animals.", score: 0, feedback: "TRAP! 'I am not have' and 'is hate' are common A2 errors." },
            { text: "I have a cat but she sleeps all day.", score: 75, feedback: "Nice detail!" },
            { text: "I don't have any pets.", score: 50, feedback: "Simple and correct." }
        ] 
    },
    { 
        q: "3. What did you eat for breakfast today?", 
        options: [
            { text: "I ate some toast and drank orange juice. It was delicious! And you?", score: 100, feedback: "Perfect past tense and interaction." },
            { text: "Today I am eat bread and milk because I am want for be healthy.", score: 0, feedback: "TRAP! 'I am eat' and 'want for be' are incorrect." },
            { text: "I had cereal with milk and a banana.", score: 75, feedback: "Good past tense." },
            { text: "I didn't eat breakfast.", score: 50, feedback: "Short but accurate." }
        ] 
    },
    { 
        q: "4. Do you like to go to the beach?", 
        options: [
            { text: "Yes, I love swimming in the ocean when the weather is hot. Do you like it?", score: 100, feedback: "Great description!" },
            { text: "I like for go to the beach because I am want for play with the sand.", score: 0, feedback: "TRAP! 'Like for go' and 'want for play' are errors." },
            { text: "I prefer the mountains because the beach is too crowded.", score: 75, feedback: "Good contrast!" },
            { text: "I go to the beach every summer.", score: 50, feedback: "Correct." }
        ] 
    },
    { 
        q: "5. How do you usually travel to school?", 
        options: [
            { text: "I usually take the bus, but sometimes my dad drives me. How do you get here?", score: 100, feedback: "Excellent use of frequency adverbs!" },
            { text: "I am go by walk because my house is very near of the school.", score: 0, feedback: "TRAP! 'I am go by walk' and 'near of' are errors." },
            { text: "I ride my bicycle because it is good exercise.", score: 75, feedback: "Nice reason!" },
            { text: "I take the train.", score: 50, feedback: "Simple." }
        ] 
    },
    { q: "6. Do you like learning English?", options: [
        { text: "Yes, I enjoy it because I want to travel to London. Do you like it too?", score: 100, feedback: "Good goal-setting and interaction!" },
        { text: "I am agree that English is important but it is very difficult for me.", score: 0, feedback: "TRAP! 'I am agree' is a classic error. Just say 'I agree'." },
        { text: "I think English is very useful for my future job.", score: 75, feedback: "Good vocabulary." },
        { text: "Yes, I like English.", score: 50, feedback: "Correct." }
    ]},
    { q: "7. Who is your best friend?", options: [
        { text: "My best friend is Sara. She is very kind and funny. Who is your best friend?", score: 100, feedback: "Great adjectives!" },
        { text: "My best friend name is Mark and he have a big car.", score: 0, feedback: "TRAP! 'Friend name' (possessive) and 'he have' (singular) are wrong." },
        { text: "I have many friends, but my best friend is called David.", score: 75, feedback: "Good structure." },
        { text: "My best friend is Maria.", score: 50, feedback: "Simple." }
    ]},
    { q: "8. What is your favorite season?", options: [
        { text: "I love summer because I can go swimming and the days are long. And you?", score: 100, feedback: "Good linking words!" },
        { text: "I like the winter more better because it have the snow.", score: 0, feedback: "TRAP! 'More better' and 'it have' are errors." },
        { text: "Spring is my favorite because the flowers are beautiful.", score: 75, feedback: "Good vocabulary." },
        { text: "I like autumn.", score: 50, feedback: "Simple." }
    ]},
    { q: "9. Do you prefer reading books or watching TV?", options: [
        { text: "I prefer watching TV because I like action movies. What about you?", score: 100, feedback: "Clear preference and follow-up." },
        { text: "I am prefer books because I can for learn many things.", score: 0, feedback: "TRAP! 'I am prefer' and 'can for learn' are errors." },
        { text: "I like reading books before I go to sleep.", score: 75, feedback: "Nice detail." },
        { text: "I like both.", score: 50, feedback: "Very short." }
    ]},
    { q: "10. What is your favorite food?", options: [
        { text: "I really love pizza with lots of cheese. What is your favorite dish?", score: 100, feedback: "Great interaction!" },
        { text: "My favorite food is the pasta because my mother cook it very good.", score: 0, feedback: "TRAP! 'Mother cook' (needs -s) and 'good' should be 'well'." },
        { text: "I like sushi because it is very healthy.", score: 75, feedback: "Good reason." },
        { text: "I like hamburgers.", score: 50, feedback: "Simple." }
    ]},
    { q: "11. Tell me about your bedroom.", options: [
        { text: "It's a small room but it's very comfortable. I have a big desk. Is yours big?", score: 100, feedback: "Great description!" },
        { text: "In my room there is a bed and is very messy always.", score: 0, feedback: "TRAP! 'Is very messy always' (word order) is wrong." },
        { text: "I have a blue walls and a lot of posters on them.", score: 75, feedback: "Watch out: 'a' with plural 'walls' is slightly off, but clear." },
        { text: "My bedroom is large.", score: 50, feedback: "Simple." }
    ]},
    { q: "12. What do you do in the evenings?", options: [
        { text: "I usually do my homework and then I play video games. What do you do?", score: 100, feedback: "Good sequence of events." },
        { text: "Every evenings I am watching the television with my brother.", score: 0, feedback: "TRAP! 'Every evenings' (plural) and 'I am watching' (for habit)." },
        { text: "I help my parents to cook dinner most days.", score: 75, feedback: "Good frequency phrase." },
        { text: "I sleep.", score: 50, feedback: "Correct but funny/short." }
    ]},
    { q: "13. Where did you go on your last holiday?", options: [
        { text: "I went to Italy and I saw the Colosseum. It was amazing! Where did you go?", score: 100, feedback: "Perfect past tense." },
        { text: "Last year I am go to the beach and I am have a fun time.", score: 0, feedback: "TRAP! Use 'I went' and 'I had'." },
        { text: "We traveled to the mountains and went hiking.", score: 75, feedback: "Good vocabulary." },
        { text: "I went to Paris.", score: 50, feedback: "Simple." }
    ]},
    { q: "14. How many people are there in your family?", options: [
        { text: "There are four people: my parents, my sister, and me. How many in yours?", score: 100, feedback: "Perfect list and interaction." },
        { text: "In my family are five persons and we are living in a small flat.", score: 0, feedback: "TRAP! Say 'There are' and 'five people'." },
        { text: "We are a big family with three brothers and two sisters.", score: 75, feedback: "Good detail." },
        { text: "There are three of us.", score: 50, feedback: "Correct." }
    ]},
    { q: "15. What is the weather like today?", options: [
        { text: "It's sunny and quite warm today. Is it raining where you live?", score: 100, feedback: "Good use of 'quite' and interaction." },
        { text: "Today is having a very good weather because the sun is shine.", score: 0, feedback: "TRAP! 'Today is having' and 'sun is shine' are errors." },
        { text: "It is cloudy and a bit cold, so I am wearing a jacket.", score: 75, feedback: "Good cause and effect." },
        { text: "It is raining.", score: 50, feedback: "Simple." }
    ]},
    { q: "16. What are you going to do this weekend?", options: [
        { text: "I'm going to visit my grandparents on Saturday. What are your plans?", score: 100, feedback: "Great future 'going to' usage." },
        { text: "This weekend I am go for buy a new shoes at the mall.", score: 0, feedback: "TRAP! 'I am go for buy' and 'a new shoes' are errors." },
        { text: "I plan to study for my English exam and relax.", score: 75, feedback: "Good use of 'plan to'." },
        { text: "I will stay at home.", score: 50, feedback: "Correct." }
    ]},
    { q: "17. Do you like sports?", options: [
        { text: "Yes, I love playing basketball because it's exciting. Do you play any sports?", score: 100, feedback: "Perfect interaction!" },
        { text: "I am not like sports because is very boring for me.", score: 0, feedback: "TRAP! 'I am not like' and 'is very boring' (no subject)." },
        { text: "I enjoy watching football on TV with my friends.", score: 75, feedback: "Good detail." },
        { text: "I like swimming.", score: 50, feedback: "Simple." }
    ]},
    { q: "18. What subject do you like best at school?", options: [
        { text: "I like History best because I love learning about the past. And you?", score: 100, feedback: "Good reason and interaction." },
        { text: "The math is my favorite subject because is easy for me.", score: 0, feedback: "TRAP! Just say 'Math' (no 'the') and 'it is easy'." },
        { text: "I prefer Art because I am good at drawing.", score: 75, feedback: "Good use of 'good at'." },
        { text: "I like PE.", score: 50, feedback: "Simple." }
    ]},
    { q: "19. Can you play a musical instrument?", options: [
        { text: "I can play the piano, but I am not very good yet. Can you play anything?", score: 100, feedback: "Honest and interactive." },
        { text: "I am play the guitar since three years but I am not like practice.", score: 0, feedback: "TRAP! 'I am play' and 'since three years' (should be 'for')." },
        { text: "I don't play an instrument, but I would like to learn the drums.", score: 75, feedback: "Good 'would like to'." },
        { text: "No, I can't.", score: 50, feedback: "Simple." }
    ]},
    { q: "20. What time do you usually wake up?", options: [
        { text: "I usually wake up at seven o'clock on school days. What about you?", score: 100, feedback: "Great use of 'usually'!" },
        { text: "In the morning I am wake up at 8 because I am have to go work.", score: 0, feedback: "TRAP! 'I am wake up' and 'I am have to'." },
        { text: "I wake up late at the weekends, around ten o'clock.", score: 75, feedback: "Good contrast." },
        { text: "At 7 AM.", score: 50, feedback: "Short." }
    ]},
    { q: "21. Do you like your town?", options: [
        { text: "Yes, because there are many shops and a beautiful park. Do you like your town?", score: 100, feedback: "Great details and interaction!" },
        { text: "I am like my town because have a big cinema and is very quiet.", score: 0, feedback: "TRAP! 'I am like' and 'because have' (missing subject)." },
        { text: "It is a bit small but the people are very friendly.", score: 75, feedback: "Good contrast adjectives." },
        { text: "Yes, it is nice.", score: 50, feedback: "Simple." }
    ]},
    { q: "22. What did you do yesterday afternoon?", options: [
        { text: "I played football with my friends and then I did my homework. And you?", score: 100, feedback: "Perfect past tense sequence!" },
        { text: "Yesterday I am go to the park and I am seeing my friends.", score: 0, feedback: "TRAP! Use 'went' and 'saw'." },
        { text: "I went to the shopping mall to buy some new clothes.", score: 75, feedback: "Good use of 'went to'." },
        { text: "I watched a movie.", score: 50, feedback: "Simple." }
    ]},
    { q: "23. Do you prefer summer or winter?", options: [
        { text: "I prefer summer because I love the sun and the beach. Which do you like?", score: 100, feedback: "Clear preference and follow-up." },
        { text: "I like the winter more better because it have the snow.", score: 0, feedback: "TRAP! 'More better' and 'it have' are errors." },
        { text: "I like winter because I can go skiing in the mountains.", score: 75, feedback: "Nice detail!" },
        { text: "Summer is better.", score: 50, feedback: "Simple." }
    ]},
    { q: "24. Tell me about your house.", options: [
        { text: "I live in a modern flat with three bedrooms and a balcony. Is your house big?", score: 100, feedback: "Good descriptive words!" },
        { text: "My house is have a big garden and is near of the city center.", score: 0, feedback: "TRAP! 'House is have' and 'near of' are errors." },
        { text: "It is a small house but it has a very beautiful garden.", score: 75, feedback: "Nice contrast." },
        { text: "My house is white.", score: 50, feedback: "Simple." }
    ]},
    { q: "25. What is your favorite animal?", options: [
        { text: "I love cats because they are very independent and cute. What about you?", score: 100, feedback: "Great vocabulary!" },
        { text: "The dogs is my favorite because they are always happy for see me.", score: 0, feedback: "TRAP! 'Dogs is' (plural) and 'happy for see' are errors." },
        { text: "I like tigers because they are very strong and fast.", score: 75, feedback: "Good adjectives." },
        { text: "I like monkeys.", score: 50, feedback: "Simple." }
    ]},
    { q: "26. How often do you watch movies?", options: [
        { text: "I watch movies twice a week, usually on Friday nights. How about you?", score: 100, feedback: "Perfect frequency phrase!" },
        { text: "I am watch movies every days because I am love the cinema.", score: 0, feedback: "TRAP! 'I am watch' and 'every days' (plural) are wrong." },
        { text: "I often watch films on Netflix with my family.", score: 75, feedback: "Good use of 'often'." },
        { text: "Sometimes.", score: 50, feedback: "Very short." }
    ]},
    { q: "27. What do you usually do on your birthday?", options: [
        { text: "I usually have a party with my friends and eat cake. When is your birthday?", score: 100, feedback: "Great interaction!" },
        { text: "In my birthday I am invite all my family for eat a big dinner.", score: 0, feedback: "TRAP! 'In my birthday' (should be On) and 'I am invite'." },
        { text: "I go out to a restaurant with my parents for a special meal.", score: 75, feedback: "Good vocabulary." },
        { text: "I get presents.", score: 50, feedback: "Simple." }
    ]},
    { q: "28. Can you cook?", options: [
        { text: "I can make simple things like pasta or eggs. Can you cook well?", score: 100, feedback: "Good examples and interaction." },
        { text: "I am not can cook because my mother is do everything for me.", score: 0, feedback: "TRAP! 'I am not can' and 'is do' are errors." },
        { text: "Yes, I like baking cakes for my friends at the weekend.", score: 75, feedback: "Good use of 'baking'." },
        { text: "No, I can't.", score: 50, feedback: "Correct." }
    ]},
    { q: "29. What is your favorite drink?", options: [
        { text: "I really like orange juice, especially in the morning. What do you like?", score: 100, feedback: "Great detail!" },
        { text: "The coffee is my favorite because makes me feel more better.", score: 0, feedback: "TRAP! 'The coffee' (general) and 'more better' are errors." },
        { text: "I prefer cold water because it is very refreshing in summer.", score: 75, feedback: "Good adjective!" },
        { text: "I like milk.", score: 50, feedback: "Simple." }
    ]},
    { q: "30. What did you do last weekend?", options: [
        { text: "I went to the park and then I visited my cousins. What did you do?", score: 100, feedback: "Perfect past tense interaction!" },
        { text: "Last weekend I am stay at home and I am play many video games.", score: 0, feedback: "TRAP! Use 'stayed' and 'played'." },
        { text: "I finished a book and watched a very interesting documentary.", score: 75, feedback: "Good vocabulary." },
        { text: "I went shopping.", score: 50, feedback: "Simple." }
    ]},
    { q: "31. Do you live in a house or a flat?", options: [
        { text: "I live in a flat on the third floor of a big building. Where do you live?", score: 100, feedback: "Great preposition use!" },
        { text: "I am living in a house that have a very big garage.", score: 0, feedback: "TRAP! 'House that have' (singular) is an error." },
        { text: "We have a house with a small garden in the suburbs.", score: 75, feedback: "Good detail." },
        { text: "I live in a flat.", score: 50, feedback: "Simple." }
    ]},
    { q: "32. What is your favorite movie?", options: [
        { text: "My favorite movie is Harry Potter because I love magic. And yours?", score: 100, feedback: "Good reason and interaction!" },
        { text: "The Toy Story is my favorite because the characters is very funny.", score: 0, feedback: "TRAP! 'Characters is' (plural) is an error." },
        { text: "I like action movies like Spider-man because they are exciting.", score: 75, feedback: "Good adjective." },
        { text: "I like Titanic.", score: 50, feedback: "Simple." }
    ]},
    { q: "33. Do you like clothes?", options: [
        { text: "Yes, I like wearing comfortable clothes like jeans and T-shirts. Do you?", score: 100, feedback: "Good examples and follow-up." },
        { text: "I am love buy a new clothes every months with my friends.", score: 0, feedback: "TRAP! 'I am love' and 'a new clothes' (plural) are wrong." },
        { text: "I prefer sports clothes because I play a lot of football.", score: 75, feedback: "Good reason." },
        { text: "Yes, I do.", score: 50, feedback: "Short." }
    ]},
    { q: "34. Who is your favorite singer?", options: [
        { text: "I really like Taylor Swift because her songs are very beautiful. And you?", score: 100, feedback: "Perfect interaction!" },
        { text: "My favorite singer is Ed Sheeran because he sing very good.", score: 0, feedback: "TRAP! 'He sing' (needs -s) and 'good' (should be 'well')." },
        { text: "I don't have a favorite, but I like listening to pop music.", score: 75, feedback: "Good alternative." },
        { text: "I like Bruno Mars.", score: 50, feedback: "Simple." }
    ]},
    { q: "35. What is the best place in your city?", options: [
        { text: "The central park is the best place because it's very quiet. And yours?", score: 100, feedback: "Good superlative and follow-up." },
        { text: "The shopping mall is the more better place because have many shops.", score: 0, feedback: "TRAP! 'More better' and 'because have' (no subject)." },
        { text: "I think the museum is very interesting for tourists.", score: 75, feedback: "Good vocabulary." },
        { text: "The beach.", score: 50, feedback: "Simple." }
    ]},
    { q: "36. Do you have any brothers or sisters?", options: [
        { text: "Yes, I have one older brother and two younger sisters. How about you?", score: 100, feedback: "Excellent use of 'older/younger'!" },
        { text: "I have two brothers, but they is always making a lot of noise.", score: 0, feedback: "TRAP! 'They is' (plural) is an error." },
        { text: "I am an only child, so I don't have any siblings.", score: 75, feedback: "Good use of 'only child'." },
        { text: "I have one sister.", score: 50, feedback: "Simple." }
    ]},
    { q: "37. What is your favorite day of the week?", options: [
        { text: "I love Saturday because I can stay in bed until late. What about you?", score: 100, feedback: "Great reason!" },
        { text: "The Friday is my favorite because I am can to go out with friends.", score: 0, feedback: "TRAP! 'I am can to' is a big error." },
        { text: "Sunday is my favorite day because I spend time with my family.", score: 75, feedback: "Nice detail." },
        { text: "I like Friday.", score: 50, feedback: "Simple." }
    ]},
    { q: "38. Do you like cameras and taking photos?", options: [
        { text: "Yes, I take lots of photos with my phone to remember holidays. Do you?", score: 100, feedback: "Good purpose and interaction." },
        { text: "I am like take photos of my cat because she is more better than a model.", score: 0, feedback: "TRAP! 'I am like take' and 'more better'." },
        { text: "I prefer taking photos of nature and beautiful landscapes.", score: 75, feedback: "Excellent vocabulary!" },
        { text: "Yes, I like it.", score: 50, feedback: "Simple." }
    ]},
    { q: "39. What are you wearing today?", options: [
        { text: "I'm wearing a blue sweater, black trousers, and sneakers. And you?", score: 100, feedback: "Great vocabulary for clothes!" },
        { text: "Today I am wear a jeans and a white shirt for the school.", score: 0, feedback: "TRAP! 'I am wear' and 'a jeans' (plural) are wrong." },
        { text: "I am wearing my favorite school uniform today.", score: 75, feedback: "Correct use of present continuous." },
        { text: "A T-shirt and shorts.", score: 50, feedback: "Simple." }
    ]},
    { q: "40. Is your school big or small?", options: [
        { text: "My school is quite big; there are about five hundred students. Is yours?", score: 100, feedback: "Good use of 'quite' and numbers!" },
        { text: "My school is have many classrooms but the library is near of the gym.", score: 0, feedback: "TRAP! 'School is have' and 'near of'." },
        { text: "It is a small school, but we have a very modern computer lab.", score: 75, feedback: "Good detail!" },
        { text: "It is big.", score: 50, feedback: "Simple." }
    ]},
    { q: "41. What is your favorite fruit?", options: [
        { text: "I love strawberries because they are sweet. What fruit do you like?", score: 100, feedback: "Good adjective and interaction." },
        { text: "The bananas is my favorite because are very easy for eat.", score: 0, feedback: "TRAP! 'Bananas is' and 'easy for eat' (to eat)." },
        { text: "I prefer apples because they are very crunchy and healthy.", score: 75, feedback: "Good adjectives!" },
        { text: "I like grapes.", score: 50, feedback: "Simple." }
    ]},
    { q: "42. How many languages can you speak?", options: [
        { text: "I can speak two languages: [My Language] and English. Can you speak more?", score: 100, feedback: "Clear and interactive." },
        { text: "I am speak English a little bit but is very hard for me for understand.", score: 0, feedback: "TRAP! 'I am speak' and 'hard for me for understand'." },
        { text: "I speak three languages because my parents are from different countries.", score: 75, feedback: "Interesting detail!" },
        { text: "I speak English.", score: 50, feedback: "Simple." }
    ]},
    { q: "43. Do you like computers?", options: [
        { text: "Yes, I use my computer for schoolwork and playing games. Do you?", score: 100, feedback: "Good uses and follow-up." },
        { text: "I am like computers because I am can for watch many videos on internet.", score: 0, feedback: "TRAP! 'I am like' and 'I am can for'." },
        { text: "I think computers are very important for our daily life.", score: 75, feedback: "Good vocabulary." },
        { text: "Yes, I do.", score: 50, feedback: "Short." }
    ]},
    { q: "44. What time does your school start?", options: [
        { text: "My school starts at half past eight every morning. What time does yours start?", score: 100, feedback: "Great time phrase!" },
        { text: "The school is start at 9 because my teacher is come late always.", score: 0, feedback: "TRAP! 'School is start' and 'teacher is come' are wrong." },
        { text: "Lessons begin at nine o'clock, so I have to leave home at 8:30.", score: 75, feedback: "Good 'have to' use." },
        { text: "At 8 AM.", score: 50, feedback: "Short." }
    ]},
    { q: "45. Tell me about your teacher.", options: [
        { text: "My teacher is very helpful and explains things clearly. Who is your teacher?", score: 100, feedback: "Great adjectives and interaction." },
        { text: "My teacher name is Mr. Smith and he give us too much homeworks.", score: 0, feedback: "TRAP! 'Teacher name' and 'much homeworks' (uncountable) are wrong." },
        { text: "She is a very kind person and she makes the lessons fun.", score: 75, feedback: "Good detail." },
        { text: "He is nice.", score: 50, feedback: "Simple." }
    ]},
    { q: "46. What is your favorite hobby?", options: [
        { text: "I love drawing because it's very relaxing. Do you have a hobby?", score: 100, feedback: "Good reason and interaction!" },
        { text: "My hobby is play the football because I am want for be a famous player.", score: 0, feedback: "TRAP! 'Is play' and 'want for be' are errors." },
        { text: "I enjoy swimming at the local pool twice a week.", score: 75, feedback: "Good frequency." },
        { text: "I like gaming.", score: 50, feedback: "Simple." }
    ]},
    { q: "47. Do you like healthy food?", options: [
        { text: "Yes, I eat a lot of fruit and vegetables every day. Do you like salad?", score: 100, feedback: "Great examples and follow-up." },
        { text: "I am not like the salad because is not have a good taste.", score: 0, feedback: "TRAP! 'I am not like' and 'is not have' (no subject)." },
        { text: "I try to eat healthy, but sometimes I eat chocolate and chips.", score: 75, feedback: "Good contrast!" },
        { text: "Yes, I do.", score: 50, feedback: "Short." }
    ]},
    { q: "48. Where are you going for your next holiday?", options: [
        { text: "I'm going to Spain with my family this summer. Where are you going?", score: 100, feedback: "Perfect 'going to' for plans!" },
        { text: "Next holiday I am go for visit my grandparents in the village.", score: 0, feedback: "TRAP! 'I am go for visit' is an error." },
        { text: "We plan to go to the mountains for a skiing trip in December.", score: 75, feedback: "Good detail." },
        { text: "To the beach.", score: 50, feedback: "Short." }
    ]},
    { q: "49. Do you prefer tea or coffee?", options: [
        { text: "I prefer tea because it's relaxing. Which do you prefer?", score: 100, feedback: "Good interaction." },
        { text: "I am prefer coffee because makes me feel more better in the morning.", score: 0, feedback: "TRAP! 'I am prefer' and 'more better'." },
        { text: "I like iced tea in the summer because it's very refreshing.", score: 75, feedback: "Good adjective!" },
        { text: "I like coffee.", score: 50, feedback: "Simple." }
    ]},
    { q: "50. Is it a good idea to travel alone?", options: [
        { text: "Traveling with friends is more fun, but alone is good for learning. What do you think?", score: 100, feedback: "Good contrast and interaction." },
        { text: "No, I think travel alone is more better because you can doing what you want.", score: 0, feedback: "TRAP! 'more better' and 'can doing'." },
        { text: "I prefer traveling with my family because it is safer.", score: 75, feedback: "Good reason." },
        { text: "I don't know.", score: 50, feedback: "Honest but simple." }
    ]}
];