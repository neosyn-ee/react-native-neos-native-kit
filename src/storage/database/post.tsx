import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {PostActions} from '@components/VirtualizedVideoList/PostActions';
import {PostBody} from '@components/VirtualizedVideoList/PostBody';

const data = [
  {
    id: 1,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 2,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 3,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 4,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 5,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 6,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 7,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 8,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 9,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 10,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 11,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 12,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 13,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 14,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 15,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 16,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 17,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 18,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 19,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 20,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 21,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 22,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 23,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 24,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 25,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 26,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 27,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 28,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 29,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 30,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 31,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 32,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 33,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 34,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 35,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 36,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 37,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 38,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 39,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 40,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 41,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 42,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 43,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 44,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 45,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 46,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 47,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 48,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 49,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 50,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 51,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 52,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 53,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 54,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 55,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 56,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 57,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 58,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 59,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 60,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 61,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 62,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 63,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 64,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 65,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 66,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 67,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 68,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 69,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 70,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 71,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 72,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 73,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 74,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 75,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 76,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 77,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 78,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 79,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 80,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 81,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 82,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 83,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 84,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 85,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 86,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 87,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 88,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 89,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 90,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 91,
    name: 'Big Buck Bunny',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    bodyContent: (
      <PostBody>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 92,
    name: 'Elephant Dream',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    bodyContent: 'The first Blender Open Movie from 2006',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 93,
    name: 'For Bigger Blazes',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    bodyContent: (
      <PostBody>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 94,
    name: 'For Bigger Escape',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 95,
    name: 'For Bigger Fun',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 96,
    name: 'For Bigger Joyrides',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 97,
    name: 'For Bigger Meltdowns',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    bodyContent: (
      <PostBody>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 98,
    name: 'Tears of Steel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
    bodyContent: (
      <PostBody>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 99,
    name: 'Sintel',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    bodyContent: (
      <PostBody>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </PostBody>
    ),
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
  {
    id: 100,
    name: 'Subaru Outback on Street and Dirt',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
    actionsContent: (
      <PostActions>
        <MaterialCommunityIcons name="cards-heart" size={20} color="red" />
        <MaterialCommunityIcons
          name="message-outline"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons name="send-outline" size={20} color="black" />
      </PostActions>
    ),
    videoControls: {
      autoplay: false,
      controls: false,
      muted: true,
    },
  },
];
export default data;
