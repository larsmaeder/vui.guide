![Handling user intents](/images/behavior/handlingUserIntents.png)

Every command consists of three factors: **intent,** **utterance,** and **slot**. User intent reflects the exact goals that should be achieved with a voice command or conversation. The utterance indicates how a user phrases his command and slots give more information when there is too little detail and the voice user interface does not know how to handle the user input.

![Structure of a command: intent, utterance and slot.](/images/behavior/intentUtteranceSlot.png)

## Shorter dialogue flow or accuracy of user intent?

With these three factors in mind, it should not be forgotten how the voice user interface should handle user tasks. Sometimes it is more important to have a short dialogue in order to quickly reach the user goal. Suppose a user wants to call his friend "Jason" and says something like "Hey, call my friend Jason". And there are two people in his contact list called Jason – which person should you call now and how should the voice interface react?

Should the voice interface simply call the first Jason in his contact list or ask him again which Jason should be called, thereby interrupting the flow and slowing down the task?

It probably depends on the situation and what the user prefers, which option is better. The first option is very error-prone and results in the wrong Jason being called, which can be really annoying to the user. The second option leads to an additional step – and even in conventional user interfaces, many voices criticize this additional step because the task is slowed down.

> Once trust is gone, it is more difficult to regain that trust.

But what we do know is that in a voice user interface the user wants control – and this control is lost in the first option. And what we also know is that once trust is gone, it is more difficult to regain that trust.

So the extra step will be the better solution in this case and should therefore always be preferred if possible, because this will do less to none "damage" in long term than losing trust first hand. 

## Flexibility and efficiency of use

In graphic interfaces users often make use of keyboard shortcuts, they can be be really useful and reduce time and make complex task easier. In voice user interfaces there is no keyboard, but shortcuts doesn't have to be omitted. A simple voice command can take that task – but within a conversation or task that is already started, it is difficult to use an shortcut, let alone knowing that it exists.

A good way to improve efficiency is using the design pattern [Chips](/docs/design-patterns/chip/). Chips are used to provide a quick way to respond in a conversation without voice interaction.

While the nature of voice interfaces can be more efficient, there is still the question of customizing the experience. If users can customize the experience of more frequent actions, the product can be flexibly adapted to the user. With language products, this can also be achieved by simply adapting the product, e.g. specify what the product should use when it relates to the user. Do you prefer your first name? Maybe an entertaining nickname? These are small things that have a significant impact on the overall experience.



