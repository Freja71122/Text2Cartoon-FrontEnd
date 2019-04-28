let test_texts = {
    7: ['Mike is kicking the soccer ball.', 'The cat is watching Jenny and Mike.', 'The dog is looking at the cat.', 'It is a sunny day.', 'Jenny has her hands in the air'],
    21: ['Jenny has a pie.', 'Jenny is holding a pie.', 'Mike is looking at Jenny.', 'Mike is wearing a hat.', 'Mike wants some of the pie.', 'Mike is standing beside the swing'],
    30: ['There is lightning coming from the cloud.', 'Mike is wearing a wool cap.', 'There are apples on the tree.', 'Mike and Jenny are playing soccer.', 'Mike kicked the soccer ball.', 'A dog is looking at an apple tree'],
    42: ['There is a hot-air balloon in the sky.', 'A hot air balloon is flying in the sky.', 'Jenny is running.', 'There is a hot dog on the picnic table.', 'A hot dog is sitting on the picnic table.', 'The cat is sitting by the picnic table'],
    50: ['Owl watches Mike and Jenny play.', 'Mike has on sunglasses.', 'Mike and Jenny play in the sun.', 'Jenny is wearing a blue hat with a star.', 'Jenny is kicking a beach ball to Mike.', 'Mike and Jenny play with a beach ball'],
    167: ['Jenny is running toward Mike.', 'Mike plays on the slide.', 'Mike is sliding down the slide a.', 'Jenny runs towards Mike.', 'The sun is in the sky.', 'Mike and Jenny are playing under the sun'],
    187: ['It is raining at the park.', 'There is a bbq grill in the park.', 'Mike and Jenny went home.', 'no one is playing in the park'],
    254: ['There is an owl on the swing set.', 'Mike has on sunglasses.', 'Mike is wearing purple glasses.', 'Jenny is holding a frisbee.', 'Mike has a bat.', 'The owl is looking at Mike and Jenny'],
    255: ['Mike gave Jenny some balloons.', 'Mike is wearing sunglasses.', 'Jenny wanted to hold the balloons.', 'Mike is holding balloons.', 'Jenny and Mike was standing on the grass.', 'Jenny is happy because she wants the balloons'],
    259: ['Jenny and Mike are running.', 'There is an air balloon in the sky.', 'Mike is wearing funny glasses.', 'There is a duck behind Mike and Jenny.', 'Mike is wearing purple sunglasses.', 'There is a yellow table behind Jenny'],
    334: ['Mike is very happy.', 'Mike is playing with the dog.', 'Mike is holding a tennis ball.', 'A dog is near Mike.', 'Mike is wearing a blue cap'],
    372: ['Mike and Jenny make a fire.', 'The kids are scared by the bear.', 'The kids are standing by a campfire.', 'The bear is happy to play today.', 'The campfire is near a tree.', 'Mike and Jenny are scared of the bear'],
    484: ['There is a duck in grass.', 'Mike and Jenny are chasing the rocket.', 'Jenny is running.', 'Jenny wants to catch the duck.', 'Mike has purple shades on.', 'The duck is under the small tree'],
    597: ["Mike is angry because Jenny won't play.", 'Mike wants to catch the tennis ball.', 'Jenny is sitting by a sandbox.', 'The cat is on the bee toy.', 'A cat is sitting on a toy near Mike and Jenny.', 'It is a sunny day'],
    601: ['Mike is holding a baseball bat.', 'Mike is going to play baseball.', 'Mike is wearing a blue baseball cap.', 'A goose is in the park.', 'There is a blue duck next to Mike.', 'Mike is meeting Jenny at the park later'],
    629: ['Jenny kicked the soccer ball.', 'Mike is sitting in the sandbox.', 'Jenny is wearing sunglasses'],
    663: ["Jenny is laughing that there is a duck on mike 's head.", 'Mike has a funny look on his face.', 'Mike is angry.', 'Jenny just threw the soccer ball to Mike.', 'Jenny is about to catch the soccer ball'],
    746: ['Mike is wearing a glasses.', 'A cat is sitting on top of the tree.', 'Mike is holding the frisbee.', 'A lightning is striking on a tree'],
    768: ['Jenny is making burgers.', 'Jenny raises her arms while smiling.', 'The campfire is in front of the tent.', 'The fire is by the tent.', 'Mike wants a hamburger.', 'The tennis ball is rolling by the grill'],
    836: ['Jenny kicks the football to Mike.', 'Mike jumped into the air to catch the football.', 'Mike wants to catch the ball.', 'Mike and Jenny are playing by a tent.', 'Mike put up his tent near the spring toy'],
    962: ['Jenny is a chef.', "Jenny has on a chef 's hat.", 'Food is on the table.', 'Jenny is running to the food'],
    1025: ['The kids are angry at the snake.', "Jenny is angry that she didn't kick the soccer ball far.", 'Jenny kicks a soccer ball.', 'Mike is shocked to see a snake.', 'The dog is happy at the park.', 'The dog wants to play with the snake'],
    1027: ['Mike is jumping in the air.', 'Jenny is sitting on the grass.', 'The dog is standing next to Mike.', 'The dog is standing by the snake'],
    1176: ['Mike and Jenny are sitting by the camp fire.', 'Jenny is sitting by the campfire.', 'Mike is talking to Jenny.', 'Mike and Jenny are happy together.', 'The snake is sneaking up behind Mike.', 'The snake is sneaking up to the children'],
    1274: ['Jenny and Mike have two balls.', 'The kids are happy to see their toys.', 'The bat and balls are under the tree.', 'Jenny and Mike are happy.', 'A hot air balloon is in the sky.', 'The baseball bat is under the tree'],
    1306: ['Jenny has a soda.', 'Jenny has a drink by her side.', 'Mike is near a tree.', 'Mike is talking to Jenny.', 'A cloud is in the sky.', 'Jenny is wearing a blue hat'],
    1330: ['Mike is holding a soda.', 'Mike and Jenny are scared of the bear.', 'Jenny is running to Mike.', 'Mike was drinking a soda.', 'Mike is wearing a viking hat.', 'Jenny was kicking a ball'],
    1461: ['The cat is watching the balloon.', 'Mike is sitting in the grass.', 'Mike and Jenny play with the bucket.', 'There is a cat in front of Mike and Jenny.', 'The balloon is behind the tree'],
    1502: ['Mike is unhappy with Jenny.', 'Jenny is a chef.', 'Mike and Jenny are having a campfire.', 'Mike made a campfire.', 'Jenny has a bottle of mustard in her hand.', 'Jenny brought mustard to eat'],
    1506: ['Mike is sitting on the table.', 'Jenny is holding mustard.', 'The hot dog is near the fire.', 'There is a hot dog on the grass'],
    1521: ['Mike is holding a baseball bat.', 'There is a red slide.', 'The baseball is in the grass.', 'Jenny is beside the slide.', 'Jenny is running towards Mike'],
    1588: ['Jenny wears a blue baseball cap.', 'Jenny is wearing the the hat.', 'Mike wears a pirate hat.', 'Mike wants to play football with Jenny.', 'Mike is sad because he wants the ball'],
    1683: ['Mike and Jenny are playing soccer.', 'Jenny has a hat on.', 'Jenny is wearing a baseball cap.', 'The ball is on the ground.', 'A hot air balloon is flying in the sky'],
    1693: ['The bear is holding a tennis racket.', 'Mr bear and mr dog are at the park today.', 'The dog is standing next to a pizza.', 'The bear already ate so he wants to play tennis.', "The dog is starving and can't bring himself to leave the pizza.", 'The bear is wearing a helmet'],
    1999: ['Jenny and Mike are having a picnic in the park.', 'The mustard bottle is near the soda.', 'Jenny is talking to Mike.', "There 's a bottle of mustard and a cola on the table.", 'Mike is sad and runs away from the picnic.', 'Mike is upset'],
    2065: ['Jenny is holding a tennis rack.', 'There is a bat beside Jenny.', 'Jenny is wearing pink.', 'Jenny has a bat near her.', 'There is a shovel in the sandbox'],
    2129: ['Jenny is very angry.', 'Mike is happy to play in the sandbox.', 'Jenny is kicking Mike.', 'Mike is very happy.', 'Jenny is near a sand-box.', 'There is a cloud in the sky'],
    2318: ['The airplane is above Mike.', 'The cat is in the sandbox.', 'Jenny looks quite sad.', 'An airplane is flying.', 'Mike and Jenny are sitting on the ground'],
    2324: ['The owl is sitting in the tree.', 'The snake is between the trees.', 'The snake is by the tree.', 'The cloud is in front of the sun.', 'The rain cloud is in the sky'],
    2740: ['Jenny has her foot caught in the swing.', 'Jenny has a colorful hat on.', 'Mike has on shades.', 'Mike is sitting cross legged on the ground.', 'Mike has blue shoes on.', 'Jenny is wearing a beanie hat with a propeller on it'],
    2829: ['Mike is making burgers.', 'Mike holds a hamburger.', 'Jenny wants a burger.', 'Mike is between the grill and table.', 'Jenny holds the baseball.', 'Jenny has a baseball'],
    2904: ['Mike and Jenny like their campfire.', 'Mike is sitting next to a campfire.', 'It is raining in the background.', 'A storm is overhead.', 'The tent flaps are open.', 'Mike and Jenny are camping'],
    3187: ['Mike is scaring Jenny.', 'Mike is angry because Jenny has the soda.', 'Jenny is swinging.', 'Jenny is on the swings.', 'Jenny is drinking a soda.', 'Jenny is wearing sunglasses'],
    3197: ['Mike is mad because it is raining.', 'Jenny wants to play in the rain.', 'Jenny is sitting in the sandbox.', 'Mike does not want to get wet.', 'There is a tree next to a sandbox.', 'Jenny is really happy'],
    3370: ['There is a single cloud in the sky.', 'Mike is throwing the football to Jenny.', 'Mike and Jenny are throwing a football.', 'There is a hot air balloon behind Mike.', 'The cat is watching Mike and Jenny.', 'The cat is sitting beside Mike'],
    3705: ['The owl is in the tree.', 'Jenny is trying to scare the owl.', 'Mike is laughing watching Jenny.', 'Jenny is very angry with the owl.', 'Mike has black shades on'],
    3715: ['Mike is afraid of the big bear.', 'The bear is catching the frisbee.', 'The big bear only wants to play frisbee with Mike but scared him away.', 'Mike sees the hot air balloon and runs to it for help.', 'Mike is running away'],
    3748: ['Mike wears a viking hat.', 'Jenny is wearing the hat.', 'Jenny sits by the campfire.', 'Jenny is sitting by the fire'],
    3811: ['Mike is playing with a football.', 'A airplane flies by.', 'There is a plane flying in the sky.', 'Mike got a new football.', 'The tree is growing apples.', 'Apples are growing on the tree'],
    3876: ['Mike is wearing purple glasses.', 'Jenny is sad that she has to hit the bear with a bat.', 'Jenny is holding a baseball bat.', 'The bear is not afraid of the bat.', 'Jenny is scared of the bear.', 'Mike cheers Jenny on to fight the bear.', 'The bear has big claws'],
    3890: ['Jenny is holding a football.', 'Jenny throws the football to Mike.', 'A dog is standing between Mike and Jenny.', 'Mike is under the sun.', "There 's a dog between Mike and Jenny.", 'Jenny is standing beside a tree'],
    3945: ['Jenny wants to play basketball.', 'Mike and Jenny are at the park.', 'Jenny is happy that Mike is giving her a drink and mustard.', 'Mike wants to eat his lunch.', 'Mike is sad because Jenny ignores him.', "Mike is upset and Jenny doesn't know why"],
    4009: ['Mike is wearing a viking helmet.', 'There is a duck between Mike and Jenny.', 'It is raining on Mike and Jenny.', 'The duck likes the rain.', 'Jenny is wearing a crown'],
    4073: ['Mike is holding a baseball bat.', 'Jenny is kicking he leg.', 'Mike is standing next to the swing set.', 'Here is a yellow picnic table in the background.', 'Jenny angrily kicks at Mike'],
    4102: ['Mike let go of the balloons.', 'Jenny is crying for her balloons.', 'Jenny is giving Mike back his soda.', 'Jenny is chasing after the balloons.', 'Jenny and Mike are standing by a tree.', 'A rocket ship is flying away'],
    4124: ['The rain started to fall so the duck hid under the tree.', 'It is beginning to rain.', 'The duck is under a tree.', 'Mike kicked the basketball over to Jenny.', "Jenny didn't want to play with the ball because it was raining.", 'Mike is kicking a basketball'],
    4436: ['The sun is shining today at the park.', 'Mike and kelly are running from a bear.', 'Jenny and Mike are scared of the bear.', 'Kelly is holding a baseball.', 'Jenny is running with a baseball.', 'There is a bear near the swing set'],
    4501: ['Mike is bringing mustard to Jenny.', 'Mike is wearing a chefs hat.', 'Mike is mad at Jenny.', 'Jenny is holding a hot dog.', "Jenny took mike 's hotdog"],
    4589: ['Mike is very shocked.', 'Mike is holding a bottle of ketchup.', "The owl is sitting on jenny 's hand.", 'A owl is on Jenny hand.', 'Jenny is very happy.', 'Mike and Jenny are barbecuing'],
    4611: ['The snake is trying to attack Jenny.', 'Mike does not like the snake.', 'Jenny is talking to Mike.', 'Mike is trying to grab the snake.', 'There is an apple tree behind Jenny.', 'There are apples on the tree'],
    4705: ['A bear is scaring Mike and kelly.', 'Jenny is sad the balloons are flying away.', 'Mike is angry at the bear.', 'Kelly is sitting on the picnic table.', 'Jenny has a hotdog'],
    4857: ["Mike is wearing a baker 's hat.", 'Jenny is crying.', 'Mike sits indian style.', 'It is raining on the bench.', 'The duck wants the pizza.', 'There is a bird next to Mike'],
    4886: ["There 's a pizza in the grass.", 'The dog is about to eat the pizza.', 'Mike is mad at the dog.', 'A dog is near Mike.', 'Mike is near Jenny.', 'Jenny is running to stop the dog'],
    4993: ['Jenny is holding balloons.', 'Mike is wearing a helmet.', 'Mike is sitting by the slide.', 'The cat came with Jenny'],
    5125: ['Jenny is wearing a pointy hat.', 'Mike is wearing a baseball cap.', 'Jenny is swinging on the swing set'],
    5251: ['Mike and Jenny are holding hands.', 'Jenny is flying a kite.', 'Mike is standing next to Jenny.', 'The tree is full of apples.', 'The tree has fruit on it'],
    5255: ['Jenny is flying a kite.', 'Mike and Jenny fly a kite.', 'Jenny and Mike are holding hands.', 'Mike is sitting in the grass.', 'There is a baseball beside the tree'],
    5461: ['There is a rocket in the sky.', 'Mike is kicking the soccer ball.', 'The cat is in the sandbox.', 'Mike is wearing a ball cap.', 'Jenny is upset with the cat'],
    5476: ['Jenny is sitting in the grass.', 'Jenny is sitting behind the swing set.', 'Jenny is sitting in front of swing-set.', 'There is an apple tree behind Jenny.', 'Jenny is near a apple tree.', 'Jenny is waving to a friend'],
    5810: ['Mike is wearing sunglasses.', 'Jenny is holding her drink.', 'Jenny is drinking a soda.', 'Mike and Jenny are cooking on the grill.', 'There are hamburgers on the grill'],
    5933: ['Jenny is very upset.', 'Mike is not having any fun.', 'Jenny is wearing purple sunglasses.', 'Mike is playing on a bee toy.', 'Jenny thinks the airplane is too noisy'],
    6020: ['Mike and Jenny are mad at the bear.', 'Jenny is sitting by the fire.', 'Mike wants the bear to go away.', 'The bear wants to cook his hotdog.', 'There is lightning coming from the cloud.', 'There is a thunderstorm'],
    6048: ['A bear is behind Mike and Jenny.', 'Everyone is very angry.', 'Mike is sitting on ground beside Jenny.', 'There is a hot air balloon above'],
    6337: ['The bear is wearing a rainbow color hat.', 'Mike is standing by the tree.', 'Mike and Jenny are dancing with the bear.', 'Jenny is standing by the ber.', 'The duck is ignoring the bear'],
    6342: ['Jenny is very happy.', 'Mike is in the sandbox.', 'Jenny is waving at Mike.', 'Jenny has on the color pink.', 'It is a sunny day at the park'],
    6398: ['Mike and Jenny are playing frisbee.', 'The bear is peeking at Mike and Jenny.', "Mike and Jenny don't see the bear yet.", 'Mike is throwing the frisbee.', 'The bear will scare Mike and Jenny.', 'There is a sandbox under the tree'],
    6580: ['Jenny is wearing sunglasses.', 'Jenny is wearing round glasses.', 'The dog and cat are sitting together.', 'The cat is sitting by the dog.', 'Jenny is smiling at the cat and dog.', 'The dog is looking at Jenny'],
    6595: ['Mike and Jenny are playing with a beach ball.', 'Jenny is catching the ball.', 'Jenny is in front of the tree.', 'Mike is throwing the ball.', 'There are no apples on the tree.', 'The airplane is flying'],
    6600: ['Mike kicked the soccer ball.', 'Jenny is making a scary face.', 'Jenny is angry at Mike.', "Mike 's hat has a star on it.", 'Mike has a new hat on.', 'Mike and Jenny are playing soccer'],
    6650: ['Jenny is very upset.', 'The owl is sitting on the swing.', 'Mike is very happy.', 'The dog is standing by Mike.', 'A owl is on a swing set.', 'Mike and Jenny are wearing hats'],
    6686: ['Jenny kicked the beach ball.', 'Jenny is kicking a beach ball.', 'Mike waves at Jenny.', 'Mike has a viking hat on.', 'Mike is very happy.', 'Mike wore his viking hat to the park'],
    6744: ['Mike is playing soccer.', 'Mike is kicking the ball.', 'Jenny is sitting next to the dog.', 'Jenny is playing with the dog.', 'An apple tree is behind the dog.', 'Mike and Jenny are very happy'],
    6789: ['Mike and Jenny are on the plane.', 'Jenny is sitting on the air plane.', "The cat is riding the plane 's wing.", 'The plane is flying into the tree'],
    6981: ['A brown bear is standing on the grass.', 'A bear is scaring Jenny.', 'A cat is sitting in a sandbox.', 'Mike wants to play baseball.', 'Mike is playing with a bat'],
    7005: ['Jenny and Mike kick a basketball over the fire.', 'Jenny kicked the ball over the fire.', 'A hot air balloon is in the sky.', 'The hot air balloon is flying behind Mike.', 'Jenny and Mike are worried about this game.', 'Mike and Jenny are playing around a fire'],
    7007: ['The bear has an owl on his head.', 'The bear is standing on the picnic table.', 'The bear has taken the food.', 'Mike and Jenny are playing with a basketball.', 'Mike threw the basketball to Jenny.', 'Jenny and Mike are by a campfire'],
    7327: ['Mike is wearing a blue cap.', 'Mike is wearing the hat.', 'Jenny is standing next to Mike.', 'A duck is following Jenny.', 'A rocket is flying into the sky.', 'The rocket is flying in the sky'],
    7626: ['Mike is happy to see Jenny.', 'An owl watches Mike and Jenny from the apple tree.', 'Jenny is doing a dance.', 'Jenny is skipping through the park.', 'An owl in the tree is watching them.', 'Mike is cooking hotdogs to share with Jenny'],
    7963: ['Jenny is sitting on the grass.', 'Mike is flying a kite.', 'The duck is watching Jenny.', 'Jenny is wearing sunglasses.', "Mike is holding the kite 's tail.", 'Jenny is holding a drink'],
    8028: ['Jenny is wearing a chef hat.', 'Jenny is sad because Mike fell.', 'Mike fell off the slide.', 'Mike slid down the slide.', 'It is raining at the park today.', 'It starts to rain'],
    8150: ['Jenny had on a crown and Mike had on a pirate hat.', 'Jenny kicks the football.', 'Mike is wearing a pirate hat.', 'Jenny kicked the football to Mike.', 'Mike was happy to be playing football.', 'Jenny is wearing a crown'],
    8271: ['Jenny is wearing a witch hat.', 'Mike and Jenny are wearing funny hats.', 'Mike is wearing a funny hat.', 'A hot air balloon is floating in the sky.', 'Mike is holding a hamburger'],
    8281: ['Mike is playing with a ball.', 'There are hotdogs on the grill.', 'Mike is standing beside the grill.', 'There is an air balloon in the background.', 'Mike is holding a beach ball.', 'Someone is riding in the hot air balloon'],
    8336: ['Mike kicked the soccer ball.', 'Mike sees an owl on the swing set.', 'Mike is surprised by the owl.', 'An owl watches Mike play soccer.', 'An owl is sitting on top of the swing set'],
    8368: ['Mike is wearing a pirate hat.', 'Mike is kicking a soccer ball.', 'Jenny is afraid its going too hit her pizza.', 'A dog is watching Mike and Jenny.', 'The dog has a blue collier'],
    8385: ['It is thundering in the park.', 'Lightning is striking near Jenny.', 'Mike is holding a pie.', 'Mike fell on the ground.', 'Jenny is standing next to the fire'],
    8439: ['Jenny is kicking the ball.', 'Mike is wearing the hat.', 'Jenny is by the slide'],
    8604: ['Mike has a soccer ball.', 'Jenny is running toward Mike.', 'The dog is behind Mike.', 'The sun is in the sky.', 'The riding toy is behind Jenny'],
    8824: ['Mike and Jenny are having fun in sandbox.', 'Mike and Jenny like the sand box.', 'The sun is shining on Mike and Jenny.', 'Mike and Jenny are happy today'],
    8901: ['A hot air balloon is flying in the sky.', 'Jenny is very sad.', 'Jenny is running because a storm is coming.', 'Jenny is wearing a pink jumper.', 'Jenny is near a apple tree.', 'Jenny is running to pick up the football'],
    9054: ['Mike is wearing sun glasses.', 'There is a helicopter in the sky.', 'Jenny is wearing sunglasses.', 'Jenny is wearing purple glasses.', 'Mike is wearing sunglasses.', 'Mike is throwing the frisbee'],
    9103: ['There is a swing set behind Jenny.', 'Mike showed Jenny how high he can jump.', 'Jenny has a bright beach ball.', 'Jenny offered Mike her beach ball.', 'Mike wants Jenny to throw the ball to him.', 'Jenny and Mike played by the swing set'],
    9210: ['Jenny and Mike are playing ball.', 'The duck is hiding beneath the slide.', 'Mike kicks the beach ball.', 'Jenny runs to catch the beach ball'],
    9247: ['Jenny has a baseball glove.', 'Jenny is going to catch the ball.', 'Mike is very happy.', 'The plane is flying across the sky.', 'Mike is sitting in the grass.', 'An airplane is in the sky'],
    9253: ['It is a sunny day.', 'Jenny and Mike are surprised by the snake.', 'Jenny is afraid of the green snake.', 'Jenny and Mike are cooking on a grill.', 'There are burgers on the grill.', 'Jenny and Mike are under an apple tree'],
    9422: ['Mike is sitting on the floor.', 'Jenny is next to the table.', 'Jenny is talking to Mike.', 'The water is on the table.', 'A drink and ketchup bottle are on the table'],
    9509: ['Mike and Jenny are having a barbecue picnic.', 'Jenny is flying a kite.', 'Mike is holding a frisbee.', 'Jenny is wearing a pirate hat.', 'Mike and Jenny are throwing a frisbee'],
    9792: ['Jenny and Mike are next to a tent.', 'Mike and Jenny see a bear.', 'There is a bear next to a tent.', 'The bear is happy to play today.', 'Jenny and Mike look scared'],
    9797: ['Jenny and Mike are scared of the bear.', 'The bear is trying to scare Jenny and Mike.', 'Mike has a hamburger.', 'Mike is holding a hamburger.', 'Jenny is holding a hotdog.', 'Jenny has a hot dog']
};