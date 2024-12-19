# Creation of content 

On youtube , a lot of videos are produced, meaning a lot of content is created by various channels. 


![output](/assets/img/histo_intro.png)

As we can observe on these plots, there is less channels of N&P than the other categories however N&P is one of the categories with the most videos. 
This suggests that News & Politics youtubers are relatively active in posting content.

This distribution analysis aligns with our qualitative reasoning mentionned in the introduction, the N&P category is an environment conducive to studying potential users-clusters. With fewer channels producing in total a larger volume of videos , it is more likely for the users to overlap in their interactions, such as commenting similar videos. Therefore, studying News & Politics videos seems to be a worthwhile pursuit, with a large enough number of videos available, even though it will naturally not fully represent the broader YouTube community.

Even though there are relatively few channels in the N&P category, there are still around thousands of them.  In this study, we focus on the five leading English speaking news publishers active on Youtube.

![output](/assets/img/biggest_new.png)
As we can see in this plot , the biggest ones are CNN , ABC News , AI Jazeera English and Vox. However Vox was created in 2013 , which is not a relevant channel for our study as our data spans from 2005 to 2019. Therefore the next biggest one was taken : Fox news. 

# How content is received by viewers: generation of activity (ie commenting tendence)

Once the content is created , it will be watched anywhere from a single to even millions  of people.  This will generate activity in terms of subscriber or commenters for instance. 

![output](/assets/img/output1.png)

As seen on the plot above, for each channel the number of commenters is significantly lower than the number of subscriber. However a very high number of comments can be seen compared to number of subscribers and commenters. This likely means that the subscribers which comment are very active.
 
To confirm this , we will look at the distribution of authors per number of comments for each channel.

![output](/assets/img/log_histo.png)

These plots suggest that the distribution seems to follow a power law, as the lines in the log log plots are (to a varying degree) close to a straight line, though further analysis is needed to confirm this. A power law distribution inherently implies a highly skewed distribution. 

It can be observed that ABC seems to be the channel with the most users that write a small numbers of comments, and AJE the lowest of such commenters.  What stands out across all these distributions is the consistent presence of a "long tail", indicating that in every channel, a small number of user post significantly more comments compared to the majority. This suggests that the most active authors can be identified as distinct clusters based on their comment volume.

Furthermore, one can see that Fox users tend to be way more active then others, showcasing significant differences in user activity levels across the channels. 
Despite these differences, the general trends remain consistent across all distributions. Based on these observations, let’s dive deeper to uncover the characteristics of the most active users. Are there even differences ?
