resource "aws_autoscaling_group" "app" {
  name = "app"

  availability_zones = [
    "us-east-1a",
    "us-east-1b"
  ]
  desired_capacity = 2
  max_size         = 10
  min_size         = 1

  target_group_arns = [
    aws_lb_target_group.app.arn
  ]

  



  tag {
    key                 = "sg"
    propagate_at_launch = true
    value               = "app"
  }
}

resource "aws_autoscaling_policy" "scale_app" {
  name        = "requests_count_scaling_policy"
  policy_type = "TargetTrackingScaling"

  autoscaling_group_name = aws_autoscaling_group.my-app.name

  target_tracking_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ALBRequestCountPerTarget"
      resource_label = format("%s/%s", aws_lb.pubic_alb.arn_suffix, aws_lb_target_group.app.arn_suffix)
    }

    target_value = 50
  }
}
