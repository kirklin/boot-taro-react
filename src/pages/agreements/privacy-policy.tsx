import { Text, View } from "@tarojs/components";
import PageWrapper from "~/components/PageWrapper";

export default function PrivacyPolicy() {
  return (
    <PageWrapper
      navTitle="隐私保护政策"
      className="h-full"
    >
      <View className="p-4 text-sm text-text leading-sm space-y-4">
        <View className="text-center text-lg text-text font-bold">_boot-taro-react_小程序隐私保护政策</View>

        <View className="text-text font-medium">【特别提示】</View>
        <View>本政策仅适用于_boot-taro-react_小程序开发者"XXX有限公司"（以下简称"开发者"或"我们"）提供的产品和服务。请您仔细阅读（尤其是加粗内容），在确认充分理解并同意后使用相关产品和服务。</View>

        <View>本政策是开发者为处理你的个人信息而制定。</View>

        <View className="space-y-2">
          <View className="text-text font-medium">一、开发者处理的信息</View>
          <View>为了注册、登录小程序，开发者将在获取你的明示同意后，收集你的微信昵称、头像。</View>
          <View className="pl-4 space-y-1">
            <View>• 基本信息：昵称、头像等您选择提供的信息</View>
            <View>• 设备信息：设备型号、操作系统版本等基本设备信息</View>
            <View>• 使用数据：您使用我们服务时的操作记录、互动内容等</View>
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">二、Cookie和同类技术的使用</View>
          <View>在您使用我们的服务时，我们会在您的设备上使用Cookie和相关技术。这些技术帮助我们：</View>
          <View className="pl-4 space-y-1">
            <View>• 记住您的身份和登录状态</View>
            <View>• 分析服务的使用情况以改进用户体验</View>
            <View>• 保护账号安全</View>
          </View>
          <View>您可以通过浏览器设置管理Cookie。但请注意，关闭Cookie可能会影响您使用我们的部分功能。</View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">三、第三方插件信息/SDK信息</View>
          <View>为实现特定功能，开发者可能会接入由第三方提供的插件/SDK。这些插件/SDK的使用遵循以下原则：</View>
          <View className="pl-4 space-y-1">
            <View>• 仅为实现必要功能而使用第三方插件/SDK</View>
            <View>• 要求第三方遵守相关法律法规和隐私保护规定</View>
            <View>• 对接入的第三方插件/SDK进行安全评估</View>
          </View>
          <View>第三方插件/SDK的个人信息处理规则，请以其公示的官方说明为准。我们会持续评估这些第三方的个人信息保护水平。</View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">四、您如何管理个人信息</View>
          <View className="font-bold">请您注意，您在使用我们服务时自愿共享甚至公开分享的信息，可能会涉及您或他人的个人信息甚至敏感个人信息。请您共享时谨慎考虑并决定。如涉及第三方个人信息，请您确保您已经取得合法的授权。</View>
          <View>我们非常重视您对个人信息的关注，并尽全力保护您对于您个人信息访问、更正、删除以及撤回同意的权利，以使您拥有充分的能力保障您的隐私和安全。您的权利包括：</View>

          <View className="pl-4 space-y-2">
            <View>（一）访问和更正您的个人信息</View>
            <View>除法律法规规定外，您有权随时访问和更正您的个人信息，具体包括：</View>

            <View className="pl-4 space-y-1">
              <View>1. 账号信息</View>
              <View className="pl-4">路径：进入"我的"-"个人资料"-"更改资料"，您可以访问和修改您的头像、昵称等基本信息。</View>
            </View>

            <View>（二）删除您的个人信息</View>
            <View>在以下情形中，您可以向我们提出删除个人信息的请求：</View>
            <View className="pl-4">
              <View>1. 如果我们处理个人信息的行为违反法律法规；</View>
              <View>2. 如果我们收集、使用您的个人信息，却未征得您的同意；</View>
              <View>3. 如果我们处理个人信息的行为严重违反了与您的约定。</View>
            </View>

            <View>（三）改变您授权同意的范围或撤回您的授权</View>
            <View>您可以通过以下路径改变或撤回您的授权：</View>
            <View className="pl-4">路径：小程序右上角"···"-"设置"-点击对应的权限进行关闭。</View>
            <View className="font-bold">请您理解，当您撤回同意或授权后，我们将无法继续为您提供相应的服务，但您撤回同意或授权的决定，不会影响此前基于您的授权而开展的个人信息处理。</View>

            <View>（四）注销账号</View>
            <View>若您在小程序中注册了账号，您可以通过以下方式注销您的账号：</View>
            <View className="pl-4">
              {/* <View>• 进入"我的"-"设置"-"注销账号"，按提示完成注销流程</View> */}
              <View>• 发送注销申请至开发者邮箱，我们将在15个工作日内处理您的申请</View>
            </View>
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">五、开发者对信息的存储和保护</View>
          <View>
            开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">六、未成年人的个人信息保护</View>
          <View className="font-bold">
            <Text className="font-normal">我们非常重视对未成年人个人信息的保护。</Text>
            若您是18周岁以下的未成年人，在使用我们的服务前，应事先取得您监护人的同意。
          </View>
          <View>对于可能涉及的不满14周岁的儿童个人信息，我们进一步采取以下措施予以保障：</View>
          <View>（1）对于收集到的儿童个人信息，我们除遵守本隐私政策关于用户个人信息的约定外，还会秉持正当必要、知情同意、目的明确、安全保障、依法利用的原则，严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用和披露，且不会超过实现收集、使用目的所必须的期限保存儿童个人信息，到期后我们会对儿童个人信息进行删除或匿名化处理。</View>
          <View>（2）儿童或其监护人有权随时访问、更正或要求删除其个人信息。如您对儿童个人信息相关事宜有任何意见、建议或投诉、举报，请联系我们。我们会随时为您提供帮助。</View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">七、本政策的更新</View>
          <View>
            我们可能适时修订本隐私保护政策的条款，该等修订构成本政策的一部分。如该等修订造成您在本政策下权利的实质减少，我们将在修订生效前通过在主要页面上显著位置提示或向您发送电子邮件等方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本政策的约束。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">八、联系我们</View>
          <View>
            当您有其他的投诉、建议、未成年人个人信息相关问题时，您可以通过以下方式联系我们：
          </View>
          <View className="pl-4 space-y-1">
            <View>📫 邮箱：_EMAIL_</View>
            <View>📞 电话：_PHONE_</View>
            <View>🗺️ 地址：_ADDRESS_</View>
          </View>
        </View>

        <View className="mt-6 text-left text-xs text-text">
          <View>更新日期：2025年1月21日</View>
          <View>生效日期：2025年1月21日</View>
        </View>
      </View>
    </PageWrapper>
  );
}
