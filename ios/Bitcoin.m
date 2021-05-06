//
//  Bitcoin.m
//  Assignment
//
//  Created by appasaheb4 on 06/05/21.
//

#import "Bitcoin.h"

@implementation Bitcoin

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(
                  getCoin:(NSString *)type
                  get:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                  )
{
      NSString *urlAsString = [NSString stringWithFormat:@"https://api.coindesk.com/v1/bpi/currentprice.json"];
      NSURL *url = [[NSURL alloc] initWithString:urlAsString];
      [NSURLConnection sendAsynchronousRequest:[[NSURLRequest alloc] initWithURL:url] queue:[[NSOperationQueue alloc] init] completionHandler:^(NSURLResponse *response, NSData *data, NSError *error) {
          if (error) {
             // [self.delegate fetchingGroupsFailedWithError:error];
            NSLog(error);
          } else {
            NSLog(@"data :",data);
            NSLog(@"response",response);
             // [self.delegate receivedGroupsJSON:data];
          }
      }];

  resolve(@"Hello from iOS");
}


@end
