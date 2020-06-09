// IIFE Immediate invoke function expression
(function() {
  const quotes = [
    {
      quote:
        "Probably the first thing you'll notice if you've been following cryptocurrencies is that they're exceptionally volatile. This derives from the fact that virtual currency trading occurs on various cryptocurrency exchanges rather than a central exchange, leading to increased volatility.",
      title: "1"
    },
    {
      quote:
        "Unlike the U.S. dollars in your wallet, or any other currency around the world, digital currencies aren't backed by a central bank or a government.",
        title: "2"
    },
    {
      quote:
        "There are more than 1,300 cryptocurrencies (but Bitcoin is king??)",
        title: "3"
    },
    {
      quote: "Blockchain technology is the infrastructure that cryptocurrencies like bitcoin are founded on. It's a digital and decentralized ledger that records payment and transfer transactions in a safe and efficient manner. It's also the big reason why big businesses are so excited.",
      title: "5"
    },
    {
      quote:
        "However, cryptocurrency transactions need to be verified, and the blockchain regularly enlarged, to account for new transactions and payments. This job falls to a group of folks known as cryptocurrency miners.",
        title: "6"
    },
    {
      quote:
        "What makes blockchain technology so enticing is the fact that it's decentralized. In other words, there is no central hub where this information is stored, and therefore no major data center where cybercriminals can attack and gain control of a particular digital currency.",
        title: "7"
    },
    {
      quote:
        "Miners are working 24 hours a day and seven days a week to verify transactions, they can be settled much quicker than through traditional banking, which sticks to normal businesses hours, closes for the weekends, and often holds funds for a few days. Plus, without a middleman, transaction costs can actually go down with blockchain.",
        title: "8"
    },
    {
      quote:
        "Blockchain does have its drawbacks. For instance, it's a nascent technology that's still being developed, meaning it's bound to hit bumps in the road. These bumps can include transaction speed and verification slowdowns, which are critical advantages that enterprises will be looking for if they switch away from the traditional databases currently in use.",
        title: "9"
    },
    {
      quote:
        "It's also worth pointing out that while blockchain technology could change the landscape for the financial services industry, virtually no barrier to entry exists. If you have time, money, and a team that understands how to code, you can potentially write blockchain and bring a cryptocurrency to market.",
        title: "10"
    },
    {
      quote:
        "Bitcoin’s price increased by over 2000% between January-December 2017.",
        title: "11"
    },
    {
      quote:
        "Not everyone is onboard with the crypto-craze. Buy-and-hold investing mogul Warren Buffett noted in 2014 in an interview with CNBC that he believed bitcoin was a \"mirage.\" Buffett commented that bitcoin amounted to nothing more than a means to transmit money, much in the same way a check does.",
        title: "12"
    },
    {
      quote:
        "Cryptocurrencies might be the hottest thing since sliced bread, but they're not accepted everywhere. Because of their unregulated and decentralized nature, some countries have chosen to outright ban the use of, and/or trading of, digital currencies.",
        title: "13"
    },
    {
      quote:
        "Between 2010-2017, 2014 was the only year when the price of Bitcoin dropped by 62% between the beginning and end of the year. This was because of the hack of the MtGox exchange.",
        title: "14"
    },
    {
      quote:
        "Truth be told, most folks don't have the slightest clue of what makes cryptocurrencies tick. Though a September poll conducted by student loan refinancing market LendEDU found that nearly 79% of Americans were aware of bitcoin, a more recent poll found that just 32% were aware of Ethereum, the second-largest cryptocurrency by market cap.",
        title: "15"
    },
    {
      quote:
        "Don't assume that just because cryptocurrencies are unregulated, you're getting a free ride on any profits you pocket. The Internal Revenue Service (IRS) still expects you to pay tax on your cryptocurrency profits, and it's doing everything in its power to make sure that happens.",
        title: "16"
    },
    {
      quote:
        "The first cryptocurrency transaction in the real world took place on May 22, 2010. On that fateful day, Laszlo Hanyecz paid 10,000 bitcoins for two delivered Papa John's pizzas. The Hungarian developer had a fierce hunger and bitcoins to spare, and used the bitcointalk forums to find a user in the UK to make the $25 delivery order for him in exchange for the 10,000 bitcoins, a transaction that was pretty over-the-top back then and even crazier today.",
        title: "17"
    },
    {
      quote:
        "350,000 bitcoin transactions are performed every day on average, as traders are always looking to buy and sell to their advantage.",
        title: "18"
    },
    {
      quote:
        "Ethereum is the second most popular and valued cryptocurrency after Bitcoin, with a market cap of $17.1 billion. Ethereum was proposed by cryptocurrency researcher and programmer Vitalik Buterin in late 2013. Buterin was just 19 years old at the time!",
        title: "19"
    },
    {
      quote:
        "One of the ideas built-in to bitcoin right from the beginning is its conception as a limited resource, much like gold, oil or other precious trading commodities. You can see this in the terminology for the creation of bitcoin, which is known as ‘mining’.",
        title: "20"
    },
    {
      quote:
        "‘Satoshi Nakamoto’ is the pseudonym given to the anonymous founder or more likely, group of founders, responsible for the creation of cryptocurrency as proposed on a cryptography online mailing list back in 2008.",
        title: "21"
    },
    {
      quote:
        "As of April 2019, there are a total of 17.6 million Bitcoins in circulation. Not more than 21 million Bitcoins can ever exist at the same time.",
        title: "22"
    },
    {
      quote:
        "Bitcoins once gone cannot be recovered. If you forget your Bitcoin wallet password or lose your private key, your Bitcoins are gone forever. As of November 2017, a total of 3.79 million Bitcoins (worth 20,15,52,57,900) is already lost.",
        title: "23"
    },
    {
      quote:
        "The US dollar and the Japanese yen are the two leading currencies to be exchanged for Bitcoin.",
        title: "24"
    },
    {
      quote:
        "Close to 64% of Bitcoin wallets have not been used (called ghost wallets) since their inception.",
        title: "24"
    },
    {
      quote:
        "The value of Bitcoin in early 2010, a year after its launch, was 2 cents per coin.",
        title: "25"
    },
    {
      quote:
        "James Howells is a British man who accidentally threw away his hard drive containing the private keys to his Bitcoin account having 7,500 Bitcoins (worth $39 million today) in mid-2013.",
        title: "26"
    },
    {
      quote:
        "The number of search queries and interest for ‘Bitcoin’ in Google was the highest in December 2017.",
        title: "27"
    },
    {
      quote:
        "Bitcoin has nearly 9,000 mining nodes, while its closest competitor Ethereum has about three times, 25,000 nodes to be exact.",
        title: "28"
    },
    {
      quote:
        "Cryptocurrency mining continues to remain a lucrative business, and China is the biggest industry player with 75% control over the mining network.",
        title: "29"
    },
    {
      quote:
        "ICO or Initial Coin Offering refers to the sale of cryptocurrencies in the exchange for investor funding for a blockchain-based startup.",
        title: "30"
    },
    {
      quote:
        "Cryptocurrency is practically usable in every industry that deals with financial or digital transactions.",
        title: "31"
    },
    {
      quote:
        "Another interesting thing about cryptocurrencies is that anyone can create one. You don’t need special authority or permissions in order to create a digital currency.",
        title: "32"
    },
    {
      quote:
        "As of April 2019, there are 4,518 Bitcoin ATMs worldwide, with the United States being the country with the highest number of Bitcoin ATMs.",
        title: "33"
    },
    {
      quote:
        "4.68% of youngsters have invested in some kind of cryptocurrencies.",
        title: "34"
    },
    {
      quote:
        "Decentralization is the main feature of blockchain which ensures that there is no centralized storing of data, which enhances the transparency and security of digital assets/data.",
        title: "35"
    },
    {
      quote:
        "Blockchain transactions are faster, more secure and global, as blockchain miners are working 24*7, unlike banks which operate in specific business hours only.",
        title: "36"
    },
    {
      quote:
        "Blockchains do not have any middleman, which means the transaction costs are much lower in a blockchain as compared to the traditional banking system.",
        title: "37"
    },
    {
      quote:
        "Cryptocurrency/Bitcoin Mining is the process of creating new blocks by verifying transactions involving various cryptocurrencies.",
        title: "39"
    },
    {
      quote:
        "The price of Bitcoin is related to the mining difficulty. As the price drops, the difficulty is reduced, making it easier to mine the coins.",
        title: "40"
    },
    {
      quote:
        " As per the report, an average of 1800 new bitcoins mined per day. This can be calculated by multiplying average blocks mined per day (144) x a block have 12.5 bitcoins, so 144×12.5 = 1800.",
        title: "41"
    },
    {
      quote:
        "A cryptocurrency’s value can change by the hour. An investment that may be worth thousands of U.S. dollars today might be worth only hundreds tomorrow.",
        title: "42"
    },
    {
      quote:
        "Although cryptocurrency transactions are anonymous, the transactions may be posted to a public ledger, like Bitcoin’s blockchain. ",
        title: "43"
    },
    {
      quote:
        "Cryptojacking is when scammers use your computer or smartphone’s processing power to “mine” cryptocurrency for their own benefit, and without your permission.",
        title: "44"
    },
  ];

  // query button
  const btn = document.getElementById('generate-btn');
  //function
  btn.addEventListener("click", function() {
    //generate index
    let random = Math.floor(Math.random() * quotes.length);

    //query array and append to HTML
    document.getElementById('quote').textContent = quotes[random].quote;
    document.querySelector(".number").textContent = quotes[random].title;
  });
})();