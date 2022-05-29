## Prepare
* web address   
  * https://www.pyimagesearch.com/start-here/
    
* Install
```python
python -m pip install opencv-python
python -m pip install opencv-python-headless
python -m pip install opencv-contrib-python
python -m pip install imutils
```

## Get Started
* panorama stitching
  * https://www.pyimagesearch.com/2016/01/11/opencv-panorama-stitching/

* stream your output to a web browser
  * https://www.pyimagesearch.com/2019/09/02/opencv-stream-video-to-web-browser-html-page/

## Deep Learning
* Deep Learning algorithms are capable of obtaining unprecedented accuracy in Computer Vision tasks, including Image Classification, Object Detection, Segmentation, and more.

### Video Classification
* reference
	* https://www.pyimagesearch.com/2019/07/15/video-classification-with-keras-and-deep-learning/
* overview
  * Videos can be understood as a series of individual images; and therefore, many deep learning practitioners would be quick to treat video classification as performing image classification a total of N times, where N is the total number of frames in a video.

	* There’s a problem with that approach though.

	* Video classification is more than just simple image classification — with video we can typically make the assumption that subsequent frames in a video are correlated with respect to their semantic contents.

	* If we are able to take advantage of the temporal nature of videos, we can improve our actual video classification results.

	* Neural network architectures such as Long short-term memory (LSTMs) and Recurrent Neural Networks (RNNs) are suited for time series data — two topics that we’ll be covering in later tutorials — but in some cases, they may be overkill. They are also resource-hungry and time-consuming when it comes to training over thousands of video files as you can imagine.

	* Instead, for some applications, all you may need is rolling averaging over predictions.

* performing image classification
	* Input an image to our CNN
	* Obtain the predictions from the CNN
	* Choose the label with the largest corresponding probability

* naive video classification
	* Loop over all frames in the video file
	* For each frame, pass the frame through the CNN
	* Classify each frame individually and independently of each other
	* Choose the label with the largest corresponding probability
	* Label the frame and write the output frame to disk

* There’s a problem with this approach though — if you’ve ever tried to apply simple image classification to video classification you likely encountered a sort of “prediction flickering”

* A simple, yet elegant solution, is to utilize a rolling prediction average.
	* Loop over all frames in the video file
	* For each frame, pass the frame through the CNN
	* Obtain the predictions from the CNN
	* Maintain a list of the last K predictions
	* Compute the average of the last K predictions and choose the label with the largest corresponding probability
	* Label the frame and write the output frame to disk