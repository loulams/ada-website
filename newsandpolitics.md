# Uncovering the patterns of the  power players of YouTube 🔍 📊 🎥

As explained beforehand, only a small number of users post a lot of comments. We need to isolate these highly active users from the rest, who are not as invested, in order to extract clusters that can be further analyzed for specific patterns.
Therefore we need to set a threshold for the number of comments we require a user to have in order to make them a part of the cluster.


![output](/assets/img/thresold_.png)

The threshold used in this study is the 99% percentile. Based on this threshold, clusters are created for each channel regrouping the most active users. 


| Channel |           Total number of users in cluster              |
|---------|---------------------------------------------------------|
|   CNN   |                         22895                           |
|   ABC   |                         33499                           |
|   BBC   |                         10464                           |
|   AJE   |                          5250                           |
|   FOX   |                         17372                           |


The difference in the number of top commenters taken per cluster also suggests that some channels have a more active user base than others. Therefore, it can be assumed that each channel attracts a distinct group of highly active users, with some overlap of users also commenting on videos from other channels.

In our study we are interested in exploring the existence of isolated groups where the users do most likely not interact with each other. 


![output](/assets/img/venn.png)

Regarding the Venn diagram, we see that out of 49 480 users in the 99% percentile only 122 are shared across all channels, meaning that few users are among the most active in all of our 5 channels, which is not very surprising.



| Channel | Percentage of Users Not Overlapping with Other Channels |
|---------|---------------------------------------------------------|
|   CNN   |                         55.8%                           |
|   ABC   |                         70.6%                           |
|   BBC   |                         66.1%                           |
|   AJE   |                         62.9%                           |
|   FOX   |                         63.7%                           |



Additionally, approximately 60% of the total users for each channel are in the top commenters uniquely for their own channel. This indicates that these users are not among the top commenters in other channels. This means that we have enough unique users in our clusters to be able to compare the clusters to each other. 
Now that we have verified that the defined clusters are distinct enough, we can turn to the more interesting question of whether the distinct users of one cluster have similar commenting habits, and less similar habits when being compared to users from a different cluster.

